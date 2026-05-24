// 필복 prototype — shared components
// Inline SVG icons (path strings extracted from Wanted design system icon set)
// Components: PhoneShell, StatusBar, AppBar, TabBar, KakaoBubble, etc.

// ─── ICON LIBRARY ──────────────────────────────────────────────────
// All icons are 24×24 fill=currentColor. Use as: <Icon name="bell" size={24}/>
const ICON_PATHS = {
  bell: 'M12 3a7 7 0 0 0-7 7v3.586l-1.207 1.207A1 1 0 0 0 4.5 16.5h15a1 1 0 0 0 .707-1.707L19 13.586V10a7 7 0 0 0-7-7zm-2 16a2 2 0 1 0 4 0h-4z',
  'bell-filled': 'M12 3a7 7 0 0 0-7 7v3.586l-1.207 1.207A1 1 0 0 0 4.5 16.5h15a1 1 0 0 0 .707-1.707L19 13.586V10a7 7 0 0 0-7-7zm-2 16a2 2 0 1 0 4 0h-4z',
  check: 'M19.386 6.864a1.085 1.085 0 0 1 0 1.272L10.386 17.136a1.085 1.085 0 0 1-1.272 0L4.614 12.636a.9.9 0 0 1 1.272-1.272l3.864 3.863 8.364-8.363a1.085 1.085 0 0 1 1.272 0z',
  close: 'M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414z',
  plus: 'M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z',
  'chevron-right': 'M9 6l6 6-6 6',
  'chevron-left': 'M15 6l-6 6 6 6',
  'chevron-down': 'M6 9l6 6 6-6',
  'chevron-up': 'M6 15l6-6 6 6',
  'arrow-left': 'M10.7 5.3a1 1 0 0 1 0 1.4L6.4 11H19a1 1 0 1 1 0 2H6.4l4.3 4.3a1 1 0 0 1-1.4 1.4l-6-6a1 1 0 0 1 0-1.4l6-6a1 1 0 0 1 1.4 0z',
  'arrow-right': 'M13.3 5.3a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1 0 1.4l-6 6a1 1 0 1 1-1.4-1.4L17.6 13H5a1 1 0 1 1 0-2h12.6l-4.3-4.3a1 1 0 0 1 0-1.4z',
  'circle-check': 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm5.4 7.7l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4L10 14.6l6.3-6.3a1 1 0 1 1 1.4 1.4z',
  'circle-info': 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14h-2v-6h2v6zm0-8h-2V6h2v2z',
  'circle-exclamation': 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z',
  bookmark: 'M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-7-3-7 3V5z',
  heart: 'M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z',
  'heart-filled': 'M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z',
  home: 'M11.3 3.3a1 1 0 0 1 1.4 0l8 8A1 1 0 0 1 20 13h-1v7a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-5h-4v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7H4a1 1 0 0 1-.7-1.7l8-8z',
  calendar: 'M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1zm-2 8v10h14V10H5z',
  pencil: 'M14.3 3.7l6 6a1 1 0 0 1 0 1.4l-11 11A1 1 0 0 1 8.6 22H3a1 1 0 0 1-1-1v-5.6a1 1 0 0 1 .3-.7l11-11a1 1 0 0 1 1.4 0z',
  trash: 'M9 3a1 1 0 0 0-1 1v1H4a1 1 0 0 0 0 2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7h1a1 1 0 1 0 0-2h-4V4a1 1 0 0 0-1-1H9zm0 5a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1z',
  share: 'M12 2a1 1 0 0 1 .7.3l4 4a1 1 0 1 1-1.4 1.4L13 5.4V14a1 1 0 1 1-2 0V5.4L8.7 7.7a1 1 0 0 1-1.4-1.4l4-4A1 1 0 0 1 12 2zM4 13a1 1 0 0 1 1 1v6h14v-6a1 1 0 1 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a1 1 0 0 1 1-1z',
  search: 'M11 4a7 7 0 1 0 4.243 12.586l3.585 3.586a1 1 0 0 0 1.414-1.414l-3.585-3.586A7 7 0 0 0 11 4zm-5 7a5 5 0 1 1 10 0 5 5 0 0 1-10 0z',
  person: 'M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-7 16a7 7 0 1 1 14 0v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1z',
  persons: 'M9 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM3 20a6 6 0 0 1 12 0v1H3v-1zM17 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM15 13a5.5 5.5 0 0 1 6.5 5.4v.6a1 1 0 0 1-1 1H17v-.5c0-2.3-.7-4.4-2-6.5z',
  setting: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-1.3-6h2.6a1 1 0 0 1 1 .8l.3 1.5a8 8 0 0 1 2 1.1l1.4-.6a1 1 0 0 1 1.2.4l1.3 2.3a1 1 0 0 1-.2 1.3l-1.1 1a8 8 0 0 1 0 2.4l1.1 1a1 1 0 0 1 .2 1.3l-1.3 2.3a1 1 0 0 1-1.2.4l-1.4-.6a8 8 0 0 1-2 1.1l-.3 1.5a1 1 0 0 1-1 .8h-2.6a1 1 0 0 1-1-.8l-.3-1.5a8 8 0 0 1-2-1.1l-1.4.6a1 1 0 0 1-1.2-.4l-1.3-2.3a1 1 0 0 1 .2-1.3l1.1-1a8 8 0 0 1 0-2.4l-1.1-1a1 1 0 0 1-.2-1.3l1.3-2.3a1 1 0 0 1 1.2-.4l1.4.6a8 8 0 0 1 2-1.1l.3-1.5a1 1 0 0 1 1-.8z',
  send: 'M3.3 3.3a1 1 0 0 1 1.1-.2l16 7a1 1 0 0 1 0 1.8l-16 7a1 1 0 0 1-1.4-1L5 13l8-1-8-1-1.7-7.6a1 1 0 0 1 .3-1.1z',
  download: 'M12 3a1 1 0 0 1 1 1v9.6l3.3-3.3a1 1 0 0 1 1.4 1.4l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.4l3.3 3.3V4a1 1 0 0 1 1-1zM4 20a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z',
  clock: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.5 5a.5.5 0 0 1 .5.5v4.7l3 3a.5.5 0 0 1-.7.8l-3.2-3.3a.5.5 0 0 1-.1-.4V7.5a.5.5 0 0 1 .5-.5z',
  document: 'M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.4L13.6 2H6zm7 1.5V8h4.5L13 3.5z',
  'more-vertical': 'M12 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z',
  moon: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',
  sun: 'M12 5a1 1 0 0 1 1 1V8a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zM6 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zm15 0a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zM6.3 6.3a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 1-1.4 1.4L6.3 7.7a1 1 0 0 1 0-1.4zm9.6 9.6a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 1-1.4 1.4l-1.4-1.4a1 1 0 0 1 0-1.4zm-9.6 1.4a1 1 0 0 1 0-1.4l1.4-1.4a1 1 0 0 1 1.4 1.4l-1.4 1.4a1 1 0 0 1-1.4 0zm9.6-9.6a1 1 0 0 1 0-1.4l1.4-1.4a1 1 0 0 1 1.4 1.4l-1.4 1.4a1 1 0 0 1-1.4 0z',
  phone: 'M6.6 3.5l1.7 4-2.1 2.1a14 14 0 0 0 8.2 8.2l2.1-2.1 4 1.7-1 4.6a1 1 0 0 1-1 .8h-.5C9.5 22.8 1.2 14.5 1.2 4.2v-.5a1 1 0 0 1 .8-1l4.6-1.2z',
  print: 'M6 2a1 1 0 0 0-1 1v5H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h1a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-1V3a1 1 0 0 0-1-1H6zm1 6V4h10v4H7zm0 8h10v4H7v-4z',
  'triangle-exclamation': 'M11.1 2.6a1 1 0 0 1 1.8 0l10 17.4a1 1 0 0 1-.9 1.5h-20a1 1 0 0 1-.9-1.5l10-17.4zM12 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1zm0 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z',
  image: 'M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4zm0 2h16v8.6l-3.3-3.3a1 1 0 0 0-1.4 0L11 16l-2.3-2.3a1 1 0 0 0-1.4 0L4 17V6zm12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  sparkle: 'M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3zm6 9l.8 2.2L21 15l-2.2.8L18 18l-.8-2.2L15 15l2.2-.8L18 12zM6 15l.5 1.5L8 17l-1.5.5L6 19l-.5-1.5L4 17l1.5-.5L6 15z',
};

function Icon({ name, size = 24, style, className }) {
  const d = ICON_PATHS[name];
  if (!d) return <span style={{ display: 'inline-block', width: size, height: size }} />;
  const stroke = name.startsWith('chevron') || name === 'arrow';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={stroke ? 'none' : 'currentColor'}
      stroke={stroke ? 'currentColor' : 'none'}
      strokeWidth={stroke ? 2 : undefined}
      strokeLinecap={stroke ? 'round' : undefined}
      strokeLinejoin={stroke ? 'round' : undefined}
      style={style}
      className={className}
    >
      <path d={d} />
    </svg>
  );
}

// ─── PHONE SHELL ────────────────────────────────────────────────────
function PhoneShell({ children, mode = 'light', tone, time = '오후 12:30' }) {
  return (
    <div className={`phone ${mode === 'dark' ? 'phone-dark' : ''} ${tone || ''}`}>
      <StatusBar dark={mode === 'dark'} time={time} />
      {children}
      <div className="home-indicator" />
    </div>
  );
}

function StatusBar({ dark = false, time = '오후 12:30' }) {
  const color = dark ? '#F7F7F8' : '#0A0A0B';
  return (
    <div className="statusbar">
      <span>{time}</span>
      <div className="right">
        {/* signal */}
        <svg width="18" height="11" viewBox="0 0 18 11" fill={color}>
          <rect x="0" y="6.5" width="3" height="4.5" rx="1" />
          <rect x="5" y="4" width="3" height="7" rx="1" />
          <rect x="10" y="2" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="11" rx="1" />
        </svg>
        {/* wifi */}
        <svg width="16" height="11" viewBox="0 0 16 11" fill={color}>
          <path d="M8 1.5c2.4 0 4.7.9 6.4 2.5l1.4-1.4A11 11 0 0 0 8 0a11 11 0 0 0-7.8 2.6l1.4 1.4A9 9 0 0 1 8 1.5zm0 3a6 6 0 0 1 4.2 1.7l1.4-1.4A8 8 0 0 0 8 3.5a8 8 0 0 0-5.6 2.3l1.4 1.4A6 6 0 0 1 8 4.5zm0 3a3 3 0 0 1 2.1.9L8 10.5 5.9 8.4A3 3 0 0 1 8 7.5z" />
        </svg>
        {/* battery */}
        <svg width="27" height="12" viewBox="0 0 27 12" fill="none">
          <rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke={color} fill="none" opacity="0.4" />
          <rect x="2" y="2" width="19" height="8" rx="1.5" fill={color} />
          <rect x="24" y="4" width="2" height="4" rx="1" fill={color} opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

// ─── APP BAR (caregiver) ────────────────────────────────────────────
function AppBar({ title, back = false, right }) {
  return (
    <div className="app-bar">
      {back && (
        <button className="back-btn">
          <Icon name="arrow-left" size={22} />
        </button>
      )}
      <div className="title">{title}</div>
      <div className="spacer" />
      {right}
    </div>
  );
}

function TabBar({ active = 'home' }) {
  const items = [
    { key: 'home', label: '오늘', icon: 'home' },
    { key: 'calendar', label: '달력', icon: 'calendar' },
    { key: 'my', label: '설정', icon: 'person' },
  ];
  return (
    <div className="tab-bar">
      {items.map(it => (
        <div key={it.key} className={`item ${it.key === active ? 'active' : ''}`}>
          <Icon name={it.icon} size={22} />
          <span>{it.label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── KAKAO BUBBLE ───────────────────────────────────────────────────
function KakaoBubble({ from = 'them', text, time, name, avatarClass = '' }) {
  return (
    <div className={`kakao-row ${from === 'me' ? 'me' : ''}`}>
      {from === 'them' && (
        <div className={`kakao-avatar ${avatarClass}`}>{name?.[0] || '?'}</div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: from === 'me' ? 'flex-end' : 'flex-start', gap: 4 }}>
        {from === 'them' && name && (
          <div style={{ fontSize: 12, color: 'rgba(0,0,0,.65)', fontWeight: 500 }}>{name}</div>
        )}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, flexDirection: from === 'me' ? 'row-reverse' : 'row' }}>
          <div className={`kakao-bubble ${from === 'them' ? 'them' : ''}`}>{text}</div>
          <div className="kakao-time">{time}</div>
        </div>
      </div>
    </div>
  );
}

// ─── BRAND HEADER (for senior screens) ──────────────────────────────
function PilbokBrand({ size = 'sm' }) {
  return (
    <div className="brand-mark" style={{ display: 'inline-flex', alignItems: 'baseline', gap: 4 }}>
      <span style={{ fontSize: size === 'sm' ? 18 : 28, color: 'var(--color-primary-normal)' }}>필복</span>
      <span style={{ fontSize: size === 'sm' ? 11 : 14, color: 'var(--color-label-alternative)', fontWeight: 500 }}>必服</span>
    </div>
  );
}

// expose globally so JSX scripts can use them without imports
Object.assign(window, { Icon, PhoneShell, StatusBar, AppBar, TabBar, KakaoBubble, PilbokBrand });
