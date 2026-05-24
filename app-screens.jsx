// 필복 — 가설 2 앱 디자인 (보호자 PWA + 시니어 페어링)
// 8 screens · warm family tone
// All screens consume `density` prop to support compact/regular/rich

// ─── shared shell ──────────────────────────────────────────────
function Phone({ children, dark = false, density = 'regular', time = '오후 12:30' }) {
  return (
    <div className={`ph ${dark ? 'dark' : ''}`} data-density={density}>
      <StatBar dark={dark} time={time} />
      {children}
      <div className="home-ind" />
    </div>
  );
}

function StatBar({ dark, time }) {
  const color = dark ? '#F7F7F8' : '#2A1D14';
  return (
    <div className={`stat ${dark ? 'dark' : ''}`}>
      <span>{time}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="18" height="11" viewBox="0 0 18 11" fill={color}>
          <rect x="0" y="6.5" width="3" height="4.5" rx="1" />
          <rect x="5" y="4" width="3" height="7" rx="1" />
          <rect x="10" y="2" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="11" rx="1" />
        </svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill={color}>
          <path d="M8 1.5c2.4 0 4.7.9 6.4 2.5l1.4-1.4A11 11 0 0 0 8 0a11 11 0 0 0-7.8 2.6l1.4 1.4A9 9 0 0 1 8 1.5zm0 3a6 6 0 0 1 4.2 1.7l1.4-1.4A8 8 0 0 0 8 3.5a8 8 0 0 0-5.6 2.3l1.4 1.4A6 6 0 0 1 8 4.5zm0 3a3 3 0 0 1 2.1.9L8 10.5 5.9 8.4A3 3 0 0 1 8 7.5z" />
        </svg>
        <svg width="27" height="12" viewBox="0 0 27 12" fill="none">
          <rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke={color} fill="none" opacity="0.4" />
          <rect x="2" y="2" width="19" height="8" rx="1.5" fill={color} />
          <rect x="24" y="4" width="2" height="4" rx="1" fill={color} opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// SCREEN A1 — 카톡 초대 메시지 + 링크 카드
// ────────────────────────────────────────────────────────────────
function ScA1Invite({ density }) {
  return (
    <Phone density={density} time="오후 8:14">
      <div className="kakao-bg-warm" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Kakao chat header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px 10px',
          background: 'transparent',
        }}>
          <Icon name="arrow-left" size={22} style={{ color: '#181818' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#181818' }}>가족방 4</div>
            <div style={{ fontSize: 10, color: 'rgba(0,0,0,.55)' }}>아빠 · 엄마 · 누나 · 나</div>
          </div>
          <Icon name="search" size={20} style={{ color: '#181818' }} />
          <Icon name="menu" size={20} style={{ color: '#181818' }} />
        </div>

        <div style={{ flex: 1, padding: '8px 12px 0', overflow: 'auto' }}>
          <div style={{ textAlign: 'center', fontSize: 11, color: 'rgba(0,0,0,.5)', margin: '8px 0 14px' }}>
            2026년 5월 18일 월요일
          </div>

          <Kbubble from="them" name="누나" color="#FF9200" text="아빠가 오늘도 점심약 안 드신 것 같아 ㅠㅠ" time="오후 1:20" />
          <Kbubble from="me" text="아 내가 매번 확인 못해서 미안해" time="오후 1:21" />
          <Kbubble from="them" name="엄마" color="#CB59FF" text="내가 옆에 있어도 자꾸 깜빡하시네" time="오후 1:24" />
          <Kbubble from="them" name="누나" color="#FF9200" text="이거 설치 안 해도 된대. 한번 해보자" time="오후 8:12" />

          {/* Pilbok rich-link card */}
          <div className="k-row" style={{ marginBottom: 8 }}>
            <div className="k-ava" style={{ background: 'linear-gradient(135deg, #FF9200, #FFC06E)' }}>누</div>
            <div style={{
              background: '#fff', borderRadius: '4px 16px 16px 16px',
              maxWidth: 260, overflow: 'hidden',
              border: '1px solid rgba(0,0,0,.06)',
              boxShadow: '0 2px 8px rgba(0,0,0,.06)',
            }}>
              <div style={{
                height: 116,
                background: 'linear-gradient(135deg, #FF7B5B, #FFB088)',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Floating hearts decoration */}
                <svg width="100%" height="100%" viewBox="0 0 260 116" style={{ position: 'absolute', inset: 0, opacity: 0.18 }}>
                  <path d="M180 30 c4 -6 14 -6 18 0 c4 6 -4 16 -9 22 c-5 -6 -13 -16 -9 -22z" fill="#fff" />
                  <path d="M40 70 c3 -4 10 -4 13 0 c3 4 -3 11 -6 15 c-3 -4 -10 -11 -7 -15z" fill="#fff" />
                </svg>
                <div style={{
                  position: 'absolute', inset: 0, display: 'flex',
                  flexDirection: 'column', justifyContent: 'flex-end', padding: '12px 14px',
                }}>
                  <div style={{ color: '#fff', fontSize: 11, fontWeight: 600, opacity: 0.9 }}>필복 · 가족 함께</div>
                  <div className="brand-mark" style={{ color: '#fff', fontSize: 22, lineHeight: 1.1, marginTop: 2, letterSpacing: '-0.03em' }}>
                    아빠 약, 같이 챙겨요
                  </div>
                </div>
              </div>
              <div style={{ padding: '10px 12px' }}>
                <div style={{ fontSize: 12, color: 'rgba(0,0,0,.65)', lineHeight: 1.45, marginBottom: 6 }}>
                  설치 없이 바로 시작 · 아빠 폰엔 큰 글씨로<br />
                  우리 폰엔 카톡처럼 알림이 와요
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 6, borderTop: '1px solid rgba(0,0,0,.06)' }}>
                  <div style={{ fontSize: 10, color: 'rgba(0,0,0,.4)', fontFamily: 'var(--font-family-mono)' }}>
                    pilbok.app/i/aBkX
                  </div>
                  <div style={{
                    padding: '4px 8px', borderRadius: 9999,
                    background: '#FF7B5B', color: '#fff',
                    fontSize: 11, fontWeight: 700,
                  }}>시작하기 →</div>
                </div>
              </div>
            </div>
          </div>

          <Kbubble from="me" text="오 좋은데? 한번 들어가볼게" time="오후 8:14" tail />
        </div>

        {/* input bar */}
        <div style={{
          background: '#fff', padding: '10px 12px 14px',
          borderTop: '1px solid rgba(0,0,0,.06)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <Icon name="plus" size={22} style={{ color: 'rgba(0,0,0,.45)' }} />
          <div style={{
            flex: 1, height: 36, background: '#F4F4F5',
            borderRadius: 18, padding: '0 14px',
            display: 'flex', alignItems: 'center',
            fontSize: 13, color: 'rgba(0,0,0,.4)'
          }}>메시지 입력</div>
        </div>
      </div>
    </Phone>
  );
}

function Kbubble({ from = 'them', name, color, text, time, tail = false }) {
  return (
    <div className={`k-row ${from === 'me' ? 'me' : ''}`}>
      {from === 'them' && (
        <div className="k-ava" style={{ background: color, visibility: tail ? 'hidden' : 'visible' }}>
          {name?.[0] || '?'}
        </div>
      )}
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: from === 'me' ? 'flex-end' : 'flex-start', gap: 3,
      }}>
        {from === 'them' && name && (
          <div style={{ fontSize: 11, color: 'rgba(0,0,0,.65)', fontWeight: 500 }}>{name}</div>
        )}
        <div style={{
          display: 'flex', alignItems: 'flex-end', gap: 5,
          flexDirection: from === 'me' ? 'row-reverse' : 'row',
        }}>
          <div className={`k-bubble ${from === 'them' ? 'them' : ''}`}>{text}</div>
          <div className="k-time">{time}</div>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// SCREEN A2 — 보호자 가입 + 부모님 폰번호 입력
// ────────────────────────────────────────────────────────────────
function ScA2Signup({ density }) {
  return (
    <Phone density={density} time="오후 8:15">
      {/* PWA address bar */}
      <div className="pwa-bar">
        <div className="dots">
          <span style={{ background: '#FF6363' }} />
          <span style={{ background: '#FFC06E' }} />
          <span style={{ background: '#7DF5A5' }} />
        </div>
        <div className="pwa-url">
          <Icon name="lock" size={12} />
          pilbok.app/start
        </div>
      </div>

      <div className="body-scroll" style={{ padding: 'var(--d-padding)', paddingBottom: 120 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginTop: 12, marginBottom: 24 }}>
          <div style={{
            width: 72, height: 72, borderRadius: 20,
            background: 'linear-gradient(135deg, #FF7B5B, #FFB088)',
            margin: '0 auto 14px',
            display: 'grid', placeItems: 'center',
            color: '#fff', fontWeight: 800,
            fontFamily: 'var(--font-family-brand)',
            fontSize: 30, letterSpacing: '-0.04em',
            boxShadow: '0 8px 24px rgba(255,123,91,0.32)',
          }}>필</div>

          <div style={{
            fontSize: 13, color: 'var(--warm-coral-deep)',
            fontWeight: 700, marginBottom: 4,
          }}>
            누나가 보낸 초대
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.3 }}>
            아빠를 함께 돌봐요
          </div>
          <div className="density-extra" style={{
            fontSize: 13, color: 'var(--warm-text-neutral)',
            lineHeight: 1.5, marginTop: 6,
          }}>
            잠시 자리를 비워도, 멀리 떨어져 있어도<br />
            가족 모두가 한 화면에서 챙겨요.
          </div>
        </div>

        {/* Form */}
        <div style={{ marginBottom: 14, fontSize: 13, fontWeight: 700, color: 'var(--warm-text-neutral)' }}>
          나의 정보
        </div>
        <div className="col" style={{ gap: 12, marginBottom: 20 }}>
          <FldRow label="이름" value="박은영" />
          <FldRow label="아빠와의 관계" value="딸" chevron />
        </div>

        <div style={{ marginBottom: 14, fontSize: 13, fontWeight: 700, color: 'var(--warm-text-neutral)' }}>
          아빠 정보
        </div>
        <div className="col" style={{ gap: 12 }}>
          <FldRow label="아빠 성함" value="정OO" />
          <FldRow label="아빠 휴대폰" value="010 - 7842 - 6913" />
        </div>

        {/* Helper card */}
        <div className="callout" style={{
          marginTop: 18,
          padding: '12px 14px',
          background: 'rgba(255, 237, 226, 0.5)',
          border: '1px solid rgba(255, 123, 91, 0.18)',
        }}>
          <Icon name="circle-info" size={20} style={{ color: 'var(--warm-coral-deep)', flexShrink: 0 }} />
          <div style={{ fontSize: 12, color: 'var(--warm-text-neutral)', lineHeight: 1.5 }}>
            <b style={{ color: 'var(--warm-coral-deep)' }}>설치 안 해도 돼요.</b> 아빠 폰으로 6자리 숫자만 가는 거예요.
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 20, left: 'var(--d-padding)', right: 'var(--d-padding)' }}>
        <button className="cta cta-coral">
          아빠께 인증번호 보내기
        </button>
      </div>
    </Phone>
  );
}

function FldRow({ label, value, chevron }) {
  return (
    <div className="fld active">
      <div style={{ fontSize: 11, color: 'var(--warm-text-alt)', fontWeight: 600, marginBottom: 2 }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1, fontSize: 15, fontWeight: 600 }}>{value}</div>
        {chevron && <Icon name="chevron-down" size={16} style={{ color: 'var(--warm-text-alt)' }} />}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// SCREEN A3 — 시니어 폰 인증번호 입력 + 페어링 완료
// ────────────────────────────────────────────────────────────────
function ScA3SeniorPair({ density }) {
  return (
    <Phone density={density} time="오후 8:17">
      <div className="body-scroll" style={{ padding: '24px var(--d-padding) 120px' }}>
        <div className="senior-big">
          {/* SMS quote (received) */}
          <div style={{
            background: 'var(--warm-coral-soft)',
            borderRadius: 18,
            padding: '14px 16px',
            marginBottom: 24,
            display: 'flex', gap: 12, alignItems: 'flex-start',
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: '#fff', display: 'grid', placeItems: 'center',
              flexShrink: 0,
            }}>
              <Icon name="bell-filled" size={22} style={{ color: 'var(--warm-coral-deep)' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, color: 'var(--warm-coral-deep)', fontWeight: 700 }}>은영(딸)이 보낸 문자</div>
              <div style={{ fontSize: 17, color: 'var(--warm-text)', marginTop: 2, lineHeight: 1.4 }}>
                아빠 약 같이 챙길게요.<br />
                아래 숫자만 눌러주세요.
              </div>
            </div>
          </div>

          <h1 style={{ marginBottom: 8 }}>아빠,</h1>
          <h1 style={{ marginBottom: 24 }}>이 숫자를 눌러주세요</h1>

          {/* Big OTP boxes */}
          <div className="otp-row" style={{ marginBottom: 28 }}>
            {[
              { n: '4', f: true }, { n: '7', f: true }, { n: '2', f: true },
              { n: '9', f: false, c: true }, { n: '', f: false }, { n: '', f: false },
            ].map((b, i) => (
              <div key={i} className={`otp-cell ${b.f ? 'filled' : ''} ${b.c ? 'cursor' : ''}`}
                style={{ width: 44, height: 60, fontSize: 28 }}>
                {b.n}
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--warm-card)',
            border: '2px solid var(--warm-border-strong)',
            borderRadius: 16, padding: 14,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <Icon name="clock" size={22} style={{ color: 'var(--warm-text-alt)' }} />
            <div style={{ fontSize: 17, color: 'var(--warm-text-neutral)' }}>
              남은 시간 <b style={{ color: 'var(--warm-coral-deep)', fontSize: 20 }}>4분 32초</b>
            </div>
          </div>

          <div style={{
            marginTop: 32,
            textAlign: 'center',
            fontSize: 18, color: 'var(--warm-text-alt)',
            lineHeight: 1.5,
          }}>
            모르시면 따님 <b style={{ color: 'var(--warm-text)' }}>은영</b>에게<br />
            전화하세요
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 24, left: 'var(--d-padding)', right: 'var(--d-padding)',
      }}>
        <button className="cta cta-coral" style={{
          background: 'linear-gradient(135deg, #FF7B5B, #FFB088)',
          height: 76, fontSize: 22, borderRadius: 22, fontWeight: 800,
          boxShadow: '0 8px 24px rgba(255,123,91,0.32)',
        }}>
          <Icon name="phone" size={26} />
          은영(딸)에게 전화
        </button>
      </div>
    </Phone>
  );
}

// ────────────────────────────────────────────────────────────────
// SCREEN B1 — 잠금화면 푸시 (보호자 입장)
// ────────────────────────────────────────────────────────────────
function ScB1Lockscreen({ density }) {
  return (
    <Phone density={density} dark={true} time="오후 12:32">
      <div className="lock" />
      <div className="lock-time">
        <div className="d">5월 23일 토요일</div>
        <div className="t">12:32</div>
      </div>

      <div style={{ position: 'absolute', top: 270, left: 0, right: 0 }}>
        {/* Top — most recent */}
        <div className="notif">
          <div className="ico pilbok">필</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="meta" style={{ fontWeight: 700, color: 'var(--warm-coral-deep)' }}>필복</div>
              <div className="meta">지금</div>
            </div>
            <div className="ttl">아빠가 점심 약을 드셨어요 ☺️</div>
            <div className="body">혈압약 · 당뇨약 · 정시 +2분</div>
          </div>
        </div>

        {/* Earlier — group */}
        <div style={{ position: 'relative', height: 78, marginBottom: 4 }}>
          <div className="notif" style={{
            position: 'absolute', inset: '0 12px 0 12px',
            transform: 'translateY(0) scale(0.98)',
            opacity: 0.94,
          }}>
            <div className="ico pilbok">필</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="meta" style={{ fontWeight: 700, color: 'var(--warm-coral-deep)' }}>필복 · 4시간 전</div>
                <div className="meta">▾ 3개</div>
              </div>
              <div className="ttl">아빠가 아침 약을 드셨어요</div>
              <div className="body">혈압약·당뇨약·종합비타민 · 8:14</div>
            </div>
          </div>
          <div className="notif" style={{
            position: 'absolute', inset: '6px 18px -10px 18px',
            transform: 'scale(0.94)', opacity: 0.5,
          }}>
            <div className="ico pilbok">필</div>
            <div style={{ flex: 1 }}>
              <div className="ttl" style={{ fontSize: 13 }}>누나가 응원 메시지를 보냈어요</div>
            </div>
          </div>
        </div>

        {/* Kakao push for context */}
        <div className="notif" style={{ marginTop: 14, opacity: 0.85 }}>
          <div className="ico kakao">K</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="meta" style={{ fontWeight: 700 }}>카카오톡 · 가족방</div>
              <div className="meta">방금</div>
            </div>
            <div className="ttl">누나</div>
            <div className="body">아빠 약 잘 드셨대 다행이다 🙏</div>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 36, left: 0, right: 0,
        textAlign: 'center', color: 'rgba(255,255,255,.55)',
        fontSize: 12, letterSpacing: '0.04em',
      }}>
        밀어서 자세히 보기
      </div>
    </Phone>
  );
}

// ────────────────────────────────────────────────────────────────
// SCREEN B2 — 보호자 메인 대시보드 (warm)
// ────────────────────────────────────────────────────────────────
function ScB2Home({ density }) {
  return (
    <Phone density={density} time="오후 12:35">
      <div className="bar" style={{ paddingBottom: 4 }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--warm-text-alt)', fontWeight: 600 }}>토요일 오후</div>
          <div className="ttl" style={{ fontSize: 22, fontWeight: 800 }}>
            안녕 <span style={{ color: 'var(--warm-coral-deep)' }}>은영</span>!
          </div>
        </div>
        <div className="spc" />
        <button style={{ background: 'transparent', border: 'none', position: 'relative' }}>
          <Icon name="bell" size={22} style={{ color: 'var(--warm-text)' }} />
          <div style={{
            position: 'absolute', top: -2, right: -2,
            width: 16, height: 16, borderRadius: 9999,
            background: 'var(--warm-coral)', color: '#fff',
            fontSize: 9, fontWeight: 800,
            display: 'grid', placeItems: 'center',
            border: '2px solid var(--warm-bg)',
          }}>2</div>
        </button>
      </div>

      <div className="body-scroll" style={{ padding: '4px var(--d-padding) 110px' }}>
        {/* Hero: Dad's status */}
        <div className="hero-warm" style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
            <div className="ava dad" style={{ width: 56, height: 56, fontSize: 22 }}>父</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: 'var(--warm-text-alt)', fontWeight: 600, letterSpacing: '0.04em' }}>아빠 · 72세</div>
              <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.015em' }}>정OO 님</div>
            </div>
            <div className="chip-warm pos">
              <Icon name="circle-check" size={12} /> 잘 챙기는 중
            </div>
          </div>

          {/* Latest event */}
          <div style={{
            background: 'rgba(255,255,255,0.7)',
            borderRadius: 14,
            padding: '12px 14px',
            display: 'flex', gap: 12, alignItems: 'center',
            border: '1px solid rgba(255, 123, 91, 0.12)',
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: '#C8F0D6', color: '#006E25',
              display: 'grid', placeItems: 'center',
              position: 'relative',
            }}>
              <Icon name="check" size={22} />
              <Icon name="heart-filled" size={14}
                className="heart-float"
                style={{ position: 'absolute', top: -8, right: -6, color: '#FF6363' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: 'var(--warm-text-alt)', fontWeight: 600 }}>방금 전 · 12:32</div>
              <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.35 }}>
                아빠가 점심 약을 드셨어요
              </div>
              <div className="density-extra" style={{ fontSize: 12, color: 'var(--warm-text-neutral)', marginTop: 2 }}>
                혈압약 · 당뇨약 · 예정 시간보다 2분 늦게
              </div>
            </div>
          </div>

          {/* Quick reactions */}
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            {[
              { e: '😊', l: '잘하셨어요' },
              { e: '🙏', l: '고마워요' },
              { e: '💪', l: '대단해요' },
            ].map(r => (
              <div key={r.l} style={{
                flex: 1, padding: '8px 4px',
                background: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255, 123, 91, 0.16)',
                borderRadius: 12, textAlign: 'center',
                fontSize: 11, fontWeight: 600, color: 'var(--warm-text-neutral)',
              }}>
                <div style={{ fontSize: 22, lineHeight: 1, marginBottom: 4 }}>{r.e}</div>
                {r.l}
              </div>
            ))}
          </div>
        </div>

        {/* Today schedule */}
        <div className="card-warm" style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: '-0.01em' }}>오늘 아빠의 약</div>
            <div style={{ fontSize: 12, color: 'var(--warm-text-alt)' }}>
              <b style={{ color: '#006E25' }}>2</b>/3 드심
            </div>
          </div>
          <div className="col" style={{ gap: 10 }}>
            {[
              { t: '아침 8:00', label: '혈압약·당뇨약·종합비타민', state: 'done', sub: '오전 8:14 드심' },
              { t: '점심 12:30', label: '혈압약·당뇨약', state: 'done', sub: '방금 전 (+2분)', live: true },
              { t: '저녁 7:30', label: '혈압약·소화제', state: 'pending', sub: '6시간 30분 후' },
            ].map((it, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: it.live ? '10px 12px' : '6px 0',
                background: it.live ? 'rgba(255,237,226,0.5)' : 'transparent',
                borderRadius: 12,
                border: it.live ? '1px solid rgba(255, 123, 91, 0.18)' : 'none',
                marginLeft: it.live ? -8 : 0, marginRight: it.live ? -8 : 0,
              }}>
                <Checkbox state={it.state} />
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex', alignItems: 'baseline', gap: 6,
                    fontSize: 13, fontWeight: 700,
                  }}>
                    <span>{it.t}</span>
                    <span style={{ fontSize: 11, color: 'var(--warm-text-alt)', fontWeight: 500 }}>{it.sub}</span>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--warm-text-neutral)', marginTop: 1 }}>
                    {it.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next doctor visit */}
        <div className="callout" style={{ marginBottom: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'rgba(0, 94, 235, 0.12)',
            color: 'var(--family-blue)',
            display: 'grid', placeItems: 'center',
          }}>
            <Icon name="calendar" size={22} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: 'var(--family-blue)', fontWeight: 700 }}>다음 진료 · 5일 후</div>
            <div style={{ fontSize: 14, fontWeight: 700, marginTop: 1 }}>서울대병원 김교수</div>
            <div className="density-extra" style={{ fontSize: 11, color: 'var(--warm-text-neutral)', marginTop: 1 }}>
              5월 28일 (목) 오후 2:30 · 내과
            </div>
          </div>
          <Icon name="chevron-right" size={18} style={{ color: 'var(--warm-text-assist)' }} />
        </div>

        {/* Family activity */}
        <div className="card-warm">
          <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 8 }}>가족이 다녀갔어요</div>
          <div className="actv">
            <div className="ava sis av">누</div>
            <div className="txt">
              <b>누나</b>가 아빠께 응원 메시지를 보냈어요
              <div style={{ fontSize: 12, color: 'var(--warm-text-neutral)', marginTop: 3, fontStyle: 'italic' }}>
                "아빠 오늘도 잘 챙겨드시고 있죠?"
              </div>
              <div className="when">12분 전</div>
            </div>
          </div>
          <div className="actv">
            <div className="ava mom av">엄</div>
            <div className="txt">
              <b>엄마</b>가 저녁 약 알림을 확인했어요
              <div className="when">2시간 전</div>
            </div>
          </div>
        </div>
      </div>

      <Tabbar active="home" />
    </Phone>
  );
}

function Checkbox({ state }) {
  if (state === 'done') return (
    <div style={{
      width: 28, height: 28, borderRadius: 9999,
      background: '#00BF40', color: '#fff',
      display: 'grid', placeItems: 'center',
    }}>
      <Icon name="check" size={16} />
    </div>
  );
  return (
    <div style={{
      width: 28, height: 28, borderRadius: 9999,
      border: '2px dashed var(--warm-border-strong)',
    }} />
  );
}

function Tabbar({ active }) {
  const items = [
    { k: 'home', l: '오늘', icon: 'home' },
    { k: 'cal', l: '달력', icon: 'calendar' },
    { k: 'family', l: '가족', icon: 'persons' },
    { k: 'set', l: '설정', icon: 'setting' },
  ];
  return (
    <div className="tabbar">
      {items.map(it => (
        <div key={it.k} className={`it ${it.k === active ? 'on' : ''}`}>
          <Icon name={it.icon} size={22} />
          <span>{it.l}</span>
        </div>
      ))}
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// SCREEN B3 — 부모님 복용 상세 + 다음 진료 정보
// ────────────────────────────────────────────────────────────────
function ScB3Detail({ density }) {
  return (
    <Phone density={density} time="오후 12:36">
      <div className="bar">
        <button className="back"><Icon name="arrow-left" size={22} /></button>
        <div className="ttl">아빠의 복용 기록</div>
        <div className="spc" />
        <button style={{ background: 'transparent', border: 'none' }}>
          <Icon name="share" size={20} />
        </button>
      </div>

      <div className="body-scroll" style={{ padding: '4px var(--d-padding) 110px' }}>
        {/* Adherence summary card */}
        <div className="card-warm" style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 80, height: 80, borderRadius: 9999,
            background: `conic-gradient(#00BF40 0% 86%, var(--warm-bg) 86% 100%)`,
            display: 'grid', placeItems: 'center',
            position: 'relative',
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: 9999, background: '#fff',
              display: 'grid', placeItems: 'center',
            }}>
              <div>
                <div style={{ fontSize: 22, fontWeight: 800, textAlign: 'center', lineHeight: 1 }}>86<span style={{ fontSize: 12 }}>%</span></div>
                <div style={{ fontSize: 9, color: 'var(--warm-text-alt)', textAlign: 'center', fontWeight: 600, marginTop: 1 }}>최근 7일</div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-0.01em' }}>잘 챙기고 계세요</div>
              <div className="chip-warm pos" style={{ fontSize: 10 }}>+12% ↑</div>
            </div>
            <div style={{ fontSize: 12, color: 'var(--warm-text-neutral)', marginTop: 4, lineHeight: 1.5 }}>
              21회 중 18회 정시 복용<br />
              <span style={{ color: 'var(--warm-coral-deep)', fontWeight: 600 }}>2회 지연 · 1회 누락</span>
            </div>
          </div>
        </div>

        {/* Next doctor visit — featured */}
        <div className="callout" style={{
          marginBottom: 12, padding: 16,
          background: 'linear-gradient(135deg, #EAF2FE 0%, #F7FBFF 100%)',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <div className="chip-warm blue" style={{ fontSize: 10 }}>다음 진료 · 5일 후</div>
              <div className="chip-warm coral" style={{ fontSize: 10 }}>준비 필요</div>
            </div>
            <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: '-0.015em' }}>
              서울대병원 김교수
            </div>
            <div style={{ fontSize: 12, color: 'var(--warm-text-neutral)', marginTop: 2 }}>
              5월 28일 (목) <b>오후 2:30</b> · 내과 312호
            </div>
            <div style={{
              marginTop: 12, paddingTop: 12,
              borderTop: '1px solid rgba(0, 94, 235, 0.12)',
              display: 'flex', gap: 6,
            }}>
              <button style={{
                flex: 1, padding: '8px 10px',
                background: 'var(--family-blue)',
                color: '#fff', border: 'none', borderRadius: 10,
                fontSize: 12, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
              }}>
                <Icon name="download" size={14} />
                복약기록 PDF
              </button>
              <button style={{
                flex: 1, padding: '8px 10px',
                background: 'transparent',
                color: 'var(--family-blue)',
                border: '1px solid rgba(0, 94, 235, 0.32)', borderRadius: 10,
                fontSize: 12, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
              }}>
                <Icon name="bell" size={14} />
                전날 알림
              </button>
            </div>
          </div>
        </div>

        {/* Mini week calendar */}
        <div className="card-warm" style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 800 }}>이번 주</div>
            <div style={{ fontSize: 11, color: 'var(--warm-text-alt)' }}>5월 18 - 24일</div>
          </div>
          <div className="mini-week">
            <div></div>
            {['월', '화', '수', '목', '금', '토', '일'].map((d, i) => (
              <div key={d} className={`mh ${i === 5 ? 'today' : ''}`}>{d}</div>
            ))}
            {[
              { label: '아침', cells: ['done', 'done', 'done', 'done', 'done', 'done', 'future'] },
              { label: '점심', cells: ['done', 'miss', 'done', 'done', 'done', 'done', 'future'] },
              { label: '저녁', cells: ['done', 'done', 'miss', 'done', 'done', 'now', 'future'] },
            ].map(row => (
              <React.Fragment key={row.label}>
                <div className="ml"><Icon name="clock" size={11} /> {row.label}</div>
                {row.cells.map((s, i) => (
                  <div key={i} className={`mc ${s}`}>
                    {s === 'done' ? <Icon name="check" size={11} /> :
                      s === 'miss' ? <Icon name="close" size={10} /> :
                        s === 'now' ? '?' : ''}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Today list */}
        <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 8, padding: '0 4px' }}>오늘 기록</div>
        <div className="col" style={{ gap: 8 }}>
          {[
            { time: '오전 8:14', label: '아침 약', meds: '혈압약·당뇨약·종합비타민', state: 'done', plus: '아빠가 물 한 컵과' },
            { time: '오후 12:32', label: '점심 약', meds: '혈압약·당뇨약', state: 'done', highlight: true, plus: '점심 식사 직후' },
            { time: '오후 7:30', label: '저녁 약', meds: '혈압약·소화제', state: 'pending' },
          ].map((it, i) => (
            <div key={i} className="card-warm" style={{
              display: 'flex', gap: 12, alignItems: 'flex-start',
              background: it.highlight ? 'rgba(255, 237, 226, 0.5)' : 'var(--warm-card)',
              borderColor: it.highlight ? 'rgba(255, 123, 91, 0.18)' : 'var(--warm-border)',
              padding: 14,
            }}>
              <div style={{ marginTop: 2 }}>
                <Checkbox state={it.state} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: 'var(--warm-text-alt)', fontWeight: 600 }}>{it.time}</div>
                <div style={{ fontSize: 14, fontWeight: 800, marginTop: 1 }}>{it.label}</div>
                <div style={{ fontSize: 12, color: 'var(--warm-text-neutral)', marginTop: 2 }}>{it.meds}</div>
                {it.plus && (
                  <div className="density-extra" style={{
                    fontSize: 11, color: 'var(--warm-coral-deep)',
                    marginTop: 6, fontStyle: 'italic',
                  }}>
                    💬 {it.plus}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Tabbar active="home" />
    </Phone>
  );
}

// ────────────────────────────────────────────────────────────────
// SCREEN B4 — 미복용 경보
// ────────────────────────────────────────────────────────────────
function ScB4Miss({ density }) {
  return (
    <Phone density={density} time="오후 1:05">
      <div className="bar" style={{ background: '#FFFAFA' }}>
        <button className="back"><Icon name="arrow-left" size={22} /></button>
        <div className="ttl" style={{ color: '#B20C0C' }}>미복용 알림</div>
      </div>

      <div className="body-scroll" style={{
        padding: '4px var(--d-padding) 110px',
        background: 'linear-gradient(180deg, #FFFAFA 0%, var(--warm-bg) 70%)',
      }}>
        {/* Alert hero */}
        <div className="card-warm" style={{
          background: '#fff',
          border: '1px solid #FED5D5',
          marginBottom: 12, padding: 18,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 9999,
              background: '#FED5D5', color: '#B20C0C',
              display: 'grid', placeItems: 'center',
            }} className="red-pulse">
              <Icon name="triangle-exclamation" size={22} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: '#B20C0C', fontWeight: 700 }}>35분 늦었어요</div>
              <div style={{ fontSize: 11, color: 'var(--warm-text-alt)' }}>점심 12:30 예정</div>
            </div>
          </div>
          <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-0.015em', lineHeight: 1.35, marginBottom: 6 }}>
            아빠가 점심 약을<br />아직 안 드셨어요
          </div>
          <div style={{ fontSize: 13, color: 'var(--warm-text-neutral)', lineHeight: 1.55 }}>
            아빠 폰에 알림이 3번 울렸어요. 화면에 큰 글씨로 약이 떠 있어요.
            <span className="density-extra" style={{ color: 'var(--warm-coral-deep)' }}> 직접 한번 확인해보시는 게 좋겠어요.</span>
          </div>
        </div>

        {/* Family who's been pinged */}
        <div className="card-warm" style={{ marginBottom: 12, padding: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 10, color: 'var(--warm-text-neutral)' }}>
            가족 모두에게 알렸어요
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { name: '나', sub: '읽음', av: 'me' },
              { name: '누나', sub: '읽음', av: 'sis' },
              { name: '엄마', sub: '안 봄', av: 'mom', unread: true },
            ].map(m => (
              <div key={m.name} style={{
                flex: 1, padding: 10,
                background: 'var(--warm-bg)',
                borderRadius: 12, textAlign: 'center',
                position: 'relative',
              }}>
                <div className={`ava ${m.av}`} style={{
                  width: 36, height: 36, fontSize: 13,
                  margin: '0 auto 6px',
                  border: m.unread ? '2px solid var(--warm-coral)' : 'none',
                }}>{m.name[0]}</div>
                <div style={{ fontSize: 12, fontWeight: 700 }}>{m.name}</div>
                <div style={{ fontSize: 10, color: m.unread ? 'var(--warm-coral-deep)' : 'var(--warm-text-alt)', fontWeight: 600 }}>
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent context */}
        <div className="card-warm density-extra" style={{ marginBottom: 14, padding: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8, color: 'var(--warm-text-neutral)' }}>참고 — 최근 일주일에</div>
          <div style={{ display: 'flex', gap: 14, fontSize: 11 }}>
            <div><b style={{ fontSize: 14 }}>2</b>회 누락 (월·수)</div>
            <div><b style={{ fontSize: 14 }}>3</b>회 30분 이상 지연</div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="col" style={{ gap: 8 }}>
          <button style={{
            width: '100%', height: 56,
            background: '#FF4242', color: '#fff',
            border: 'none', borderRadius: 14,
            fontSize: 16, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            boxShadow: '0 8px 20px rgba(255,66,66,0.28)',
          }}>
            <Icon name="phone" size={20} />
            아빠께 전화 걸기
          </button>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="cta cta-ghost" style={{ flex: 1, height: 48, fontSize: 13 }}>
              <Icon name="send" size={16} />
              메모 보내기
            </button>
            <button className="cta cta-ghost" style={{ flex: 1, height: 48, fontSize: 13 }}>
              <Icon name="bell" size={16} />
              다시 알림
            </button>
          </div>
        </div>
      </div>
      <Tabbar active="home" />
    </Phone>
  );
}

// ────────────────────────────────────────────────────────────────
// SCREEN B5 — 응원 메모 작성
// ────────────────────────────────────────────────────────────────
function ScB5Memo({ density }) {
  return (
    <Phone density={density} time="오후 12:36">
      <div className="bar">
        <button className="back"><Icon name="arrow-left" size={22} /></button>
        <div className="ttl">아빠께 메모 보내기</div>
        <div className="spc" />
      </div>

      <div className="body-scroll" style={{ padding: '4px var(--d-padding) 90px' }}>
        {/* Recipient */}
        <div className="card-warm" style={{
          display: 'flex', alignItems: 'center', gap: 12,
          marginBottom: 14, padding: 14,
        }}>
          <div className="ava dad" style={{ width: 44, height: 44, fontSize: 18 }}>父</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700 }}>아빠께</div>
            <div style={{ fontSize: 11, color: 'var(--warm-text-alt)' }}>큰 글씨로 도착해요 · 24pt</div>
          </div>
          <div className="spc" />
          <Icon name="circle-info" size={18} style={{ color: 'var(--warm-text-assist)' }} />
        </div>

        {/* Composer */}
        <div style={{
          background: '#fff', borderRadius: 16,
          border: '1px solid var(--warm-border)',
          padding: 16, marginBottom: 14, minHeight: 140,
        }}>
          <div style={{
            fontSize: 17, lineHeight: 1.5, color: 'var(--warm-text)',
            padding: 2,
          }}>
            아빠 점심 약 잘 드셨네요!<br />
            오늘 저녁에 들를게요 🍚
            <span style={{
              display: 'inline-block',
              width: 1.5, height: 22,
              background: 'var(--family-blue)',
              marginLeft: 2, verticalAlign: 'middle',
            }} />
          </div>
        </div>

        {/* Templates */}
        <div style={{
          fontSize: 12, fontWeight: 700,
          color: 'var(--warm-text-neutral)', marginBottom: 8,
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <Icon name="sparkle" size={14} style={{ color: 'var(--warm-coral)' }} />
          자주 쓰는 응원
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
          {[
            '💪 잘 드셨어요!',
            '🍚 식사하셨나요?',
            '🙏 오늘도 고마워요',
            '☕ 따뜻하게 입으세요',
            '📞 통화하고 싶어요',
          ].map(t => (
            <div key={t} style={{
              padding: '8px 12px',
              background: '#fff',
              border: '1px solid var(--warm-border-strong)',
              borderRadius: 9999,
              fontSize: 13, fontWeight: 500,
            }}>{t}</div>
          ))}
        </div>

        {/* Preview — how it shows up */}
        <div className="density-extra" style={{
          padding: 14,
          background: '#1a0e08',
          borderRadius: 14,
          color: '#fff',
        }}>
          <div style={{ fontSize: 11, color: 'rgba(247,247,248,.5)', marginBottom: 8 }}>
            아빠 폰엔 이렇게 도착해요 ↓
          </div>
          <div className="notif" style={{ margin: 0 }}>
            <div className="ico pilbok">필</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="meta" style={{ fontWeight: 700 }}>필복 · 은영(딸)이로부터</div>
                <div className="meta">지금</div>
              </div>
              <div className="ttl" style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.4 }}>
                아빠 점심 약 잘 드셨네요!
              </div>
              <div className="body" style={{ fontSize: 16 }}>오늘 저녁에 들를게요 🍚</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 16, left: 'var(--d-padding)', right: 'var(--d-padding)',
        display: 'flex', gap: 8,
      }}>
        <button className="cta cta-ghost" style={{ width: 56, height: 52 }}>
          <Icon name="image" size={20} />
        </button>
        <button className="cta cta-coral" style={{ flex: 1 }}>
          <Icon name="send" size={18} />
          보내기
        </button>
      </div>
    </Phone>
  );
}

Object.assign(window, {
  ScA1Invite, ScA2Signup, ScA3SeniorPair,
  ScB1Lockscreen, ScB2Home, ScB3Detail, ScB4Miss, ScB5Memo,
});
