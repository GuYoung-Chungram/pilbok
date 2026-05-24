// 필복 — 가설2 인터랙티브 앱 프로토타입 (라우터 + 상태)
// "보호자는 앱 설치 없이 카톡 푸시만으로 부모님 복용 여부를 즉각 인지한다"
// screens-h2.jsx 의 H2* 화면을 그대로 렌더하고, 선택적 nav 훅(window.useH2)으로
// 실제 클릭/상태 반영을 연결한다. (캔버스에는 provider 없음 → 정적 동작 유지)

const H2Ctx = React.createContext(null);
window.useH2 = () => React.useContext(H2Ctx);

const DEFAULT_MEMO = '아빠 점심 약 잘 드셨네요!\n오늘 저녁에 들를게요 🍚';

const STEPS = [
  { key: 'invite', label: '카톡 초대' },
  { key: 'push', label: '푸시 알림' },
  { key: 'home', label: '대시보드' },
  { key: 'detail', label: '복용 상세' },
  { key: 'miss', label: '미복용 경보' },
  { key: 'memo', label: '응원 메모' },
];

const SCREENS = {
  invite: () => <H2KakaoInvite />,
  push: () => <H2PushNotif />,
  home: () => <H2CaregiverHome />,
  detail: () => <H2DetailScreen />,
  miss: () => <H2MissAlert />,
  memo: () => <H2SendMemo />,
};

const INITIAL = {
  screen: 'invite',
  history: [],
  dir: 'fwd',
  eveningTaken: false,
  missMode: false,
  pushContext: 'lunch', // 'lunch' | 'evening'
  sentMemos: [],
  memoDraft: DEFAULT_MEMO,
  toast: null,
};

function H2App() {
  const [s, setS] = React.useState(INITIAL);
  const toastTimer = React.useRef(null);

  // Notion API send helper (Promise based to support Babel standalone safely)
  const sendToNotion = React.useCallback((payload) => {
    fetch('/api/notion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => console.log('Notion log successful:', data))
    .catch(e => console.error('Failed to log to Notion:', e));
  }, []);

  const showToast = React.useCallback((msg) => {
    setS(prev => ({ ...prev, toast: msg }));
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => {
      setS(prev => ({ ...prev, toast: null }));
    }, 2400);
  }, []);

  const go = React.useCallback((next, patch = {}) => {
    setS(prev => prev.screen === next
      ? { ...prev, ...patch }
      : { ...prev, ...patch, history: [...prev.history, prev.screen], screen: next, dir: 'fwd' });
  }, []);

  const jump = React.useCallback((next) => {
    setS(prev => ({ ...prev, screen: next, history: [], dir: 'fwd' }));
  }, []);

  const back = React.useCallback(() => {
    setS(prev => {
      if (prev.history.length === 0) return { ...prev, screen: 'home', dir: 'back' };
      const history = prev.history.slice();
      const screen = history.pop();
      return { ...prev, history, screen, dir: 'back' };
    });
  }, []);

  const reset = React.useCallback(() => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setS({ ...INITIAL });
  }, []);

  const simTime = React.useCallback(() => {
    go('push', { pushContext: 'evening' });
  }, [go]);

  const confirmPush = React.useCallback(() => {
    setS(prev => {
      const isEvening = prev.pushContext === 'evening';
      sendToNotion({
        title: isEvening ? '저녁 약 복용 완료 ⭕' : '점심 약 복용 완료 ⭕',
        step: isEvening ? '저녁 7:30' : '점심 12:30',
        status: '⭕ 복용완료',
        meds: isEvening ? ['혈압약', '소화제'] : ['혈압약', '당뇨약']
      });
      return {
        ...prev,
        eveningTaken: isEvening ? true : prev.eveningTaken,
        pushContext: 'lunch',
        history: [...prev.history, prev.screen],
        screen: 'home',
        dir: 'fwd',
      };
    });
  }, [sendToNotion]);

  const simMiss = React.useCallback(() => {
    setS(prev => ({ ...prev, missMode: true, screen: 'home', history: [], dir: 'fwd' }));
    showToast('⚠️ 아버지가 점심 약을 안 드셨어요');
    sendToNotion({
      title: '점심 약 미복용 경보 발생 ⚠️',
      step: '점심 12:30',
      status: '⚠️ 미복용',
      meds: ['혈압약', '당뇨약']
    });
  }, [showToast, sendToNotion]);

  const setMemoDraft = React.useCallback((text) => {
    setS(prev => ({ ...prev, memoDraft: text }));
  }, []);

  const sendMemo = React.useCallback(() => {
    setS(prev => {
      const isMissWarning = prev.missMode === true;
      sendToNotion({
        title: isMissWarning ? '점심 약 독촉 메모 전송 ⏰' : '자녀 응원 메모 전송 💬',
        step: '점심 12:30',
        status: isMissWarning ? '⏰ 독촉/지연' : '⭕ 복용완료',
        meds: ['혈압약', '당뇨약'],
        memo: prev.memoDraft
      });
      return {
        ...prev,
        sentMemos: [...prev.sentMemos, { text: prev.memoDraft, at: Date.now(), isWarning: isMissWarning }],
        memoDraft: DEFAULT_MEMO,
        missMode: isMissWarning ? 'sent' : prev.missMode,
        history: [...prev.history, prev.screen],
        screen: 'home',
        dir: 'fwd',
      };
    });
    showToast('응원 메모를 보냈어요 ✅');
  }, [showToast, sendToNotion]);

  const ctx = {
    state: s,
    go, back, jump, reset,
    simTime, confirmPush, simMiss,
    setMemoDraft, sendMemo, showToast,
  };

  const stepIdx = STEPS.findIndex(st => st.key === s.screen);
  const Screen = SCREENS[s.screen];

  return (
    <H2Ctx.Provider value={ctx}>
      <div className="proto-root">
        <header className="proto-head">
          <div className="proto-brand">
            필복 <span>· 가설2 인터랙티브</span>
          </div>
          <div className="proto-sub">보호자는 앱 설치 없이 카톡 푸시만으로 부모님 복용 여부를 즉각 인지한다</div>

          <nav className="proto-rail" aria-label="화면 흐름">
            {STEPS.map((st, i) => (
              <button
                key={st.key}
                className={`rail-step ${i === stepIdx ? 'active' : ''} ${i < stepIdx ? 'done' : ''}`}
                onClick={() => jump(st.key)}
              >
                <span className="rail-dot">{i + 1}</span>
                <span className="rail-label">{st.label}</span>
              </button>
            ))}
          </nav>

          <div className="proto-controls">
            <button className="sim-chip" onClick={simTime}>⏩ 시간경과 · 저녁약 복용</button>
            <button className="sim-chip warn" onClick={simMiss}>⚠️ 미복용 상황</button>
            <button className="sim-chip ghost" onClick={reset}>↺ 처음부터</button>
          </div>
        </header>

        <div className="proto-stage">
          <div className="proto-phone">
            <div key={s.screen} className={`scr-anim ${s.dir === 'back' ? 'back' : 'fwd'}`}>
              <Screen />
            </div>
            {s.toast && <div className="proto-toast">{s.toast}</div>}
          </div>
        </div>
      </div>
    </H2Ctx.Provider>
  );
}

const h2root = ReactDOM.createRoot(document.getElementById('app'));
h2root.render(<H2App />);
