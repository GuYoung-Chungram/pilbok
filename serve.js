// Minimal static file server for the 필복 가설2 prototype preview.
// Absolute root — no cwd dependence (preview sandbox blocks getcwd).
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = '/Users/JGY/Documents/medication_app';
const PORT = 8731;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.jsx': 'text/babel; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.json': 'application/json; charset=utf-8',
};

const https = require('https');

let env = {};
try {
  const envContent = fs.readFileSync(path.join(ROOT, '.env'), 'utf8');
  envContent.split('\n').forEach(line => {
    const parts = line.split('=');
    if (parts.length >= 2) {
      env[parts[0].trim()] = parts.slice(1).join('=').trim();
    }
  });
} catch (e) {
  console.log('No .env file found or failed to parse env');
}

const server = http.createServer((req, res) => {
  let rel = decodeURIComponent(req.url.split('?')[0]);
  if (rel === '/') rel = '/index.html';
  const full = path.join(ROOT, rel);

  // Notion proxy route
  if (req.method === 'POST' && rel === '/api/notion') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      let payload;
      try {
        payload = JSON.parse(body);
      } catch (e) {
        res.writeHead(400);
        return res.end('Invalid JSON');
      }

      const notionData = JSON.stringify({
        parent: { database_id: env.NOTION_DATABASE_ID },
        properties: {
          "복약일시": {
            title: [{ text: { content: payload.title || "복약 기록" } }]
          },
          "복용단계": {
            select: { name: payload.step || "점심 12:30" }
          },
          "복용상태": {
            select: { name: payload.status || "⭕ 복용완료" }
          }
        }
      });

      const options = {
        hostname: 'api.notion.com',
        port: 443,
        path: '/v1/pages',
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.NOTION_API_KEY}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(notionData)
        }
      };

      const notionReq = https.request(options, notionRes => {
        let resBody = '';
        notionRes.on('data', chunk => { resBody += chunk; });
        notionRes.on('end', () => {
          res.writeHead(notionRes.statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(resBody);
        });
      });

      notionReq.on('error', e => {
        res.writeHead(500);
        res.end(JSON.stringify({ error: e.message }));
      });

      notionReq.write(notionData);
      notionReq.end();
    });
    return;
  }

  if (!full.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }
  fs.readFile(full, (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end('Not found');
    }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(full)] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => console.log('serving ' + ROOT + ' on ' + PORT));
