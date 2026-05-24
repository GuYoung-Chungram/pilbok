// 가설 2 — 카톡 즉시성 가설
// "보호자는 앱 설치 없이 카톡 푸시만으로도 부모님 복용 여부를 즉각 인지한다"
// 6 screens: invitation → push → dashboard → detail → miss-alert → memo.

// ─── H2-1 · 카톡 초대 메시지 (가족 그룹방) ─────────────────────
function H2KakaoInvite() {
  return (
    <PhoneShell time="오후 8:14">
      <div className="caregiver kakao-bg" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Kakao chat header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, padding: '4px 12px 8px',
          background: '#ABC1D1',
        }}>
          <Icon name="arrow-left" size={22} style={{ color: '#181818' }} />
          <div style={{ fontSize: 16, fontWeight: 700, color: '#181818', flex: 1 }}>가족방 👨‍👩‍👧 4</div>
          <Icon name="search" size={20} style={{ color: '#181818' }} />
          <Icon name="menu" size={20} style={{ color: '#181818' }} />
        </div>

        <div style={{ flex: 1, padding: '12px 12px 0', overflowY: 'auto' }}>
          <div style={{ textAlign: 'center', fontSize: 11, color: 'rgba(0,0,0,.5)', margin: '8px 0 12px' }}>
            2026년 5월 18일 월요일
          </div>

          <KakaoBubble from="them" name="누나" text="아빠가 오늘도 점심약 안 드신 것 같아 ㅠㅠ" time="오후 1:20" avatarClass="" />
          <KakaoBubble from="me" text="아 내가 매번 확인 못해서 미안해" time="오후 1:21" />
          <KakaoBubble from="me" text="앱 하나 깔자고 했더니 휴대폰 어렵다고 안 하셔" time="오후 1:21" />

          <KakaoBubble from="them" name="누나" text="이거 누가 만든건데 설치 안해도 된대" time="오후 8:12" />

          {/* Pilbok link card */}
          <div className="kakao-row" style={{ marginBottom: 6 }}>
            <div className="kakao-avatar">누</div>
            <div style={{
              background: '#fff', borderRadius: '4px 16px 16px 16px',
              padding: 0, maxWidth: 260, overflow: 'hidden',
              border: '1px solid rgba(0,0,0,.06)'
            }}>
              <div style={{
                height: 100,
                background: 'linear-gradient(135deg, #005EEB, #00BDDE)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
                }}>
                  <div className="brand-mark" style={{ color: '#fff', fontSize: 40, lineHeight: 1 }}>필복</div>
                </div>
              </div>
              <div style={{ padding: '10px 12px' }}>
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>아빠 약 같이 챙겨요</div>
                <div style={{ fontSize: 12, color: 'rgba(0,0,0,.55)', lineHeight: 1.4, marginBottom: 6 }}>
                  설치 없이 바로 시작. 아빠 폰엔 큰 글씨로, 우리 폰엔 카톡처럼.
                </div>
                <div style={{ fontSize: 11, color: 'rgba(0,0,0,.4)', fontFamily: 'var(--font-family-mono)' }}>
                  pilbok.app/i/aBkX
                </div>
              </div>
            </div>
          </div>

          <KakaoBubble from="me" text="오 한번 들어가볼게" time="오후 8:14" />
        </div>

        {/* Kakao input bar */}
        <div style={{
          background: '#fff', padding: '10px 12px',
          borderTop: '1px solid rgba(0,0,0,.08)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <Icon name="plus" size={22} style={{ color: 'rgba(0,0,0,.5)' }} />
          <div style={{
            flex: 1, height: 36, background: '#F4F4F5',
            borderRadius: 18, padding: '0 14px',
            display: 'flex', alignItems: 'center',
            fontSize: 13, color: 'rgba(0,0,0,.4)'
          }}>메시지 입력</div>
        </div>
      </div>
    </PhoneShell>
  );
}

// ─── H2-2 · 푸시 알림 (잠금화면, FCM) ─────────────────────────
function H2PushNotif() {
  return (
    <div className="phone phone-dark">
      <div className="lockscreen-bg" />
      <StatusBar dark={true} time="오후 12:32" />
      <div className="lockscreen-time">
        <div className="time">12:32</div>
        <div className="date">11월 6일 목요일</div>
      </div>
      <div style={{ position: 'absolute', top: 280, left: 0, right: 0, zIndex: 2 }}>
        {/* Pilbok native push */}
        <div className="push-notif">
          <div className="app-icon pilbok">필</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="meta" style={{ fontWeight: 700 }}>필복</div>
              <div className="meta">지금</div>
            </div>
            <div className="title">✅ 아버지가 점심 약을 드셨어요</div>
            <div className="body">혈압약·당뇨약 · 12:32 (정시 +2분)</div>
          </div>
        </div>

        {/* Earlier today */}
        <div className="push-notif" style={{ opacity: 0.94 }}>
          <div className="app-icon pilbok">필</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="meta" style={{ fontWeight: 700 }}>필복</div>
              <div className="meta">4시간 전</div>
            </div>
            <div className="title">✅ 아버지가 아침 약을 드셨어요</div>
            <div className="body">혈압약·당뇨약·종합비타민 · 8:14</div>
          </div>
        </div>

        {/* Kakao push above (for context) */}
        <div className="push-notif" style={{ opacity: 0.7, transform: 'scale(.96)' }}>
          <div className="app-icon kakao">K</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="meta" style={{ fontWeight: 700 }}>카카오톡 · 가족방</div>
              <div className="meta">9분 전</div>
            </div>
            <div className="title" style={{ fontSize: 13 }}>누나</div>
            <div className="body" style={{ fontSize: 13 }}>아빠 약 잘 드셨대 다행이다</div>
          </div>
        </div>
      </div>
      <div className="home-indicator" />
    </div>
  );
}

// ─── H2-3 · 보호자 메인 대시보드 ─────────────────────────────
function H2CaregiverHome() {
  return (
    <PhoneShell time="오후 12:35">
      <div className="caregiver" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div className="app-bar" style={{ background: 'transparent', height: 64, alignItems: 'flex-end', paddingBottom: 10 }}>
          <PilbokBrand size="lg" />
          <div className="spacer" />
          <button style={{ background: 'transparent', border: 'none', color: 'var(--color-label-strong)' }}>
            <Icon name="bell" size={22} />
          </button>
          <button style={{ background: 'transparent', border: 'none', color: 'var(--color-label-strong)' }}>
            <Icon name="setting" size={22} />
          </button>
        </div>

        <div className="screen-body" style={{ background: 'var(--color-background-normal)', paddingTop: 8 }}>
          {/* Hero status card */}
          <div className="card" style={{
            background: 'linear-gradient(135deg, #005EEB, #1A75FF)',
            color: '#fff', border: 'none',
            padding: 20,
            marginBottom: 16,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 9999,
                background: 'rgba(255,255,255,.18)',
                display: 'grid', placeItems: 'center',
                fontSize: 22, fontWeight: 800,
                fontFamily: 'var(--font-family-brand)',
              }}>父</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, opacity: .82, letterSpacing: '0.04em' }}>아버지 · 만 72세</div>
                <div style={{ fontSize: 18, fontWeight: 700, marginTop: 2 }}>김복남 님</div>
              </div>
              <div style={{
                padding: '6px 12px',
                background: 'rgba(255,255,255,.2)',
                borderRadius: 9999,
                fontSize: 12, fontWeight: 700,
              }}>좋아요</div>
            </div>
            <div style={{
              marginTop: 16, padding: '14px 16px',
              background: 'rgba(255,255,255,0.12)',
              borderRadius: 12,
            }}>
              <div style={{ fontSize: 13, opacity: .85 }}>방금 전</div>
              <div style={{ fontSize: 17, fontWeight: 700, marginTop: 2 }}>
                ✅ 점심 약 복용 완료
              </div>
              <div style={{ fontSize: 13, opacity: .9, marginTop: 2 }}>혈압약 · 당뇨약 · 12:32</div>
            </div>
          </div>

          {/* Today summary */}
          <div className="card" style={{ marginBottom: 16, padding: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div style={{ fontSize: 15, fontWeight: 700 }}>오늘의 복용 11월 6일</div>
              <div className="chip positive">2/3 완료</div>
            </div>
            <div className="col gap-12">
              {[
                { t: '아침 8:00', meds: '혈압약·당뇨약·종합비타민', state: 'done', sub: '오전 8:14 드심 (+14분)' },
                { t: '점심 12:30', meds: '혈압약·당뇨약', state: 'done', sub: '오후 12:32 드심 (+2분)' },
                { t: '저녁 7:30', meds: '혈압약·소화제', state: 'pending', sub: '6시간 30분 후' },
              ].map((it, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div className={`big-check ${it.state === 'done' ? 'done' : ''}`} style={{ width: 36, height: 36, borderWidth: 2 }}>
                    {it.state === 'done' && <Icon name="check" size={20} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{it.t} · {it.meds}</div>
                    <div style={{ fontSize: 12, color: 'var(--color-label-alternative)', marginTop: 1 }}>{it.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <button style={{
              background: '#fff', border: '1px solid var(--color-line-normal)',
              borderRadius: 16, padding: '14px', display: 'flex', alignItems: 'center', gap: 10,
              fontSize: 14, fontWeight: 600, color: 'var(--color-label-strong)', textAlign: 'left',
            }}>
              <Icon name="send" size={20} style={{ color: 'var(--color-primary-normal)' }} />
              응원 메모
            </button>
            <button style={{
              background: '#fff', border: '1px solid var(--color-line-normal)',
              borderRadius: 16, padding: '14px', display: 'flex', alignItems: 'center', gap: 10,
              fontSize: 14, fontWeight: 600, color: 'var(--color-label-strong)', textAlign: 'left',
            }}>
              <Icon name="phone" size={20} style={{ color: 'var(--color-status-positive)' }} />
              전화 걸기
            </button>
          </div>
        </div>
        <TabBar active="home" />
      </div>
    </PhoneShell>
  );
}

// ─── H2-4 · 부모님 상세 (오늘 + 주간 미니) ────────────────────
function H2DetailScreen() {
  return (
    <PhoneShell time="오후 12:35">
      <div className="caregiver" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <AppBar title="아버지의 복용 기록" back={true} right={
          <button style={{ background: 'transparent', border: 'none' }}>
            <Icon name="more-vertical" size={22} />
          </button>
        } />
        <div className="screen-body" style={{ background: 'var(--color-background-normal)', paddingBottom: 100 }}>
          {/* Adherence stat */}
          <div className="card" style={{ padding: 18, marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: 'var(--color-label-alternative)', fontWeight: 600 }}>최근 7일 복용률</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
              <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em' }}>86<span style={{ fontSize: 18 }}>%</span></div>
              <div className="chip positive" style={{ marginLeft: 8 }}>+12% ↑</div>
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-label-alternative)', marginTop: 6 }}>
              21회 중 18회 정시 복용
            </div>
          </div>

          {/* Mini week */}
          <div className="card" style={{ padding: 16, marginBottom: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>이번 주</div>
            <div className="cal-week" style={{ gridTemplateColumns: '60px repeat(7, 1fr)' }}>
              <div></div>
              {['월', '화', '수', '목', '금', '토', '일'].map((d, i) => (
                <div key={d} className={`head ${i === 3 ? 'today' : ''}`}>
                  {d}
                  {i === 3 && <span style={{ marginLeft: 2 }}>·</span>}
                </div>
              ))}
              {[
                { label: '아침', cells: ['done', 'done', 'done', 'done', 'future', 'future', 'future'] },
                { label: '점심', cells: ['done', 'miss', 'done', 'done', 'future', 'future', 'future'] },
                { label: '저녁', cells: ['done', 'done', 'miss', 'now', 'future', 'future', 'future'] },
              ].map(row => (
                <React.Fragment key={row.label}>
                  <div className="row-label" style={{ fontSize: 11 }}>{row.label}</div>
                  {row.cells.map((s, i) => (
                    <div key={i} className={`cell ${s}`} style={{ height: 32, fontSize: 11 }}>
                      {s === 'done' ? <Icon name="check" size={14} /> :
                        s === 'miss' ? <Icon name="close" size={12} /> :
                          s === 'now' ? '?' : ''}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Today entries */}
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>오늘 기록 · 11월 6일</div>
            <div className="col gap-12">
              {[
                { time: '오전 8:14', label: '아침 약', meds: '혈압약·당뇨약·종합비타민', state: 'done' },
                { time: '오후 12:32', label: '점심 약', meds: '혈압약·당뇨약', state: 'done', highlight: true },
                { time: '오후 7:30', label: '저녁 약', meds: '혈압약·소화제', state: 'pending' },
              ].map((it, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 12, padding: 12,
                  background: it.highlight ? '#EAF2FE' : 'var(--color-background-normal)',
                  borderRadius: 12,
                  border: it.highlight ? '1px solid #C9DEFE' : 'none',
                }}>
                  <div className={`big-check ${it.state === 'done' ? 'done' : ''}`} style={{ width: 32, height: 32, borderWidth: 2 }}>
                    {it.state === 'done' && <Icon name="check" size={18} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, color: 'var(--color-label-alternative)', fontWeight: 600 }}>{it.time}</div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{it.label}</div>
                    <div style={{ fontSize: 12, color: 'var(--color-label-neutral)' }}>{it.meds}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <TabBar active="home" />
      </div>
    </PhoneShell>
  );
}

// ─── H2-5 · 미복용 경보 (붉은 알람 + 전화) ────────────────────
function H2MissAlert() {
  return (
    <PhoneShell time="오후 1:05">
      <div className="caregiver" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div className="app-bar" style={{ background: '#FFFAFA' }}>
          <button className="back-btn"><Icon name="arrow-left" size={22} /></button>
          <div className="title" style={{ color: '#B20C0C' }}>미복용 알림</div>
        </div>
        <div className="screen-body" style={{ background: '#FFFAFA', paddingBottom: 120 }}>
          {/* Big alert */}
          <div style={{
            background: '#fff',
            border: '1px solid #FED5D5',
            borderRadius: 20, padding: 20,
            marginBottom: 16,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 9999,
                background: '#FED5D5', color: '#B20C0C',
                display: 'grid', placeItems: 'center',
              }} className="urgent-pulse">
                <Icon name="triangle-exclamation" size={22} />
              </div>
              <div>
                <div style={{ fontSize: 13, color: '#B20C0C', fontWeight: 700 }}>35분 늦음</div>
                <div style={{ fontSize: 11, color: 'var(--color-label-alternative)' }}>점심 12:30 예정</div>
              </div>
            </div>
            <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-0.015em', lineHeight: 1.35, marginBottom: 6 }}>
              아버지가 점심 약을<br />아직 안 드셨어요
            </div>
            <div style={{ fontSize: 13, color: 'var(--color-label-neutral)', lineHeight: 1.5 }}>
              아버지 폰에서 알림은 3번 울렸어요. 화면에 큰 글씨로 약이 떠 있어요. 직접 한번 확인해보시는 게 좋겠어요.
            </div>
          </div>

          {/* Family who's been pinged */}
          <div className="card" style={{ padding: 16, marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10 }}>가족에게 알림 전송됨</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { name: '나', sub: '방금', color: 'linear-gradient(135deg, #005EEB, #4F95FF)' },
                { name: '누나', sub: '방금', color: 'linear-gradient(135deg, #FF9200, #FFC06E)' },
                { name: '엄마', sub: '읽음', color: 'linear-gradient(135deg, #6541F2, #CB59FF)' },
              ].map(m => (
                <div key={m.name} style={{ flex: 1, textAlign: 'center', padding: 10, background: 'var(--color-background-normal)', borderRadius: 12 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 9999,
                    background: m.color, color: '#fff',
                    display: 'grid', placeItems: 'center',
                    fontSize: 13, fontWeight: 800,
                    margin: '0 auto 6px',
                    fontFamily: 'var(--font-family-brand)',
                  }}>{m.name[0]}</div>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>{m.name}</div>
                  <div style={{ fontSize: 10, color: 'var(--color-label-alternative)' }}>{m.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="col gap-8">
            <button style={{
              width: '100%', height: 56,
              background: '#FF4242', color: '#fff',
              border: 'none', borderRadius: 14,
              fontSize: 16, fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
              <Icon name="phone" size={20} />
              아버지께 전화 걸기
            </button>
            <button style={{
              width: '100%', height: 48,
              background: '#fff', color: 'var(--color-label-strong)',
              border: '1px solid var(--color-line-strong)', borderRadius: 14,
              fontSize: 14, fontWeight: 600,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
              <Icon name="send" size={18} />
              "약 드세요" 메모 보내기
            </button>
          </div>
        </div>
        <TabBar active="home" />
      </div>
    </PhoneShell>
  );
}

// ─── H2-6 · 응원 메모 작성 ────────────────────────────────────
function H2SendMemo() {
  return (
    <PhoneShell time="오후 12:36">
      <div className="caregiver" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <AppBar title="아버지에게 메모 보내기" back={true} />
        <div className="screen-body" style={{ background: 'var(--color-background-normal)', paddingBottom: 120 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: 16,
            background: '#fff', borderRadius: 16, border: '1px solid var(--color-line-normal)',
            marginBottom: 16,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 9999,
              background: 'linear-gradient(135deg, #005EEB, #4F95FF)',
              color: '#fff', display: 'grid', placeItems: 'center',
              fontWeight: 800, fontFamily: 'var(--font-family-brand)',
            }}>父</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>아버지에게</div>
              <div style={{ fontSize: 12, color: 'var(--color-label-alternative)' }}>큰 글씨로 도착해요</div>
            </div>
          </div>

          {/* Composer */}
          <div style={{
            background: '#fff', borderRadius: 16,
            border: '1px solid var(--color-line-normal)',
            padding: 16, marginBottom: 14,
          }}>
            <div style={{
              fontSize: 18, lineHeight: 1.5, color: 'var(--color-label-strong)',
              minHeight: 120, padding: 4,
            }}>
              아빠 점심 약 잘 드셨네요!<br />
              오늘 저녁에 들를게요 🍚
              <span style={{ display: 'inline-block', width: 1.5, height: 22, background: 'var(--color-primary-normal)', marginLeft: 2, verticalAlign: 'middle' }} />
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              paddingTop: 10, borderTop: '1px solid var(--color-line-alternative)',
              marginTop: 8,
            }}>
              <div style={{ fontSize: 11, color: 'var(--color-label-alternative)' }}>23 / 200자</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{ background: 'transparent', border: 'none' }}>
                  <Icon name="image" size={20} style={{ color: 'var(--color-label-alternative)' }} />
                </button>
                <button style={{ background: 'transparent', border: 'none' }}>
                  <Icon name="sparkle" size={20} style={{ color: 'var(--color-primary-normal)' }} />
                </button>
              </div>
            </div>
          </div>

          {/* Quick templates */}
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-label-neutral)', marginBottom: 8 }}>
            자주 쓰는 응원
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['💪 잘 드셨어요!', '⏰ 약 드실 시간이에요', '🙏 오늘도 고마워요', '🍚 식사하셨나요?'].map(t => (
              <div key={t} style={{
                padding: '8px 14px',
                background: '#fff',
                border: '1px solid var(--color-line-normal)',
                borderRadius: 9999,
                fontSize: 13, fontWeight: 500,
              }}>{t}</div>
            ))}
          </div>

          {/* Big preview */}
          <div style={{
            marginTop: 18,
            padding: 14, background: '#0A0A0B',
            borderRadius: 14, color: '#fff',
          }}>
            <div style={{ fontSize: 11, color: 'rgba(247,247,248,.5)', marginBottom: 6 }}>아버지 폰에는 이렇게 보여요 ↓</div>
            <div style={{
              background: 'rgba(245, 245, 248, 0.96)',
              borderRadius: 14, padding: '12px 14px',
              display: 'flex', gap: 10, color: '#0A0A0B',
            }}>
              <div className="app-icon pilbok" style={{ width: 36, height: 36, fontSize: 16 }}>필</div>
              <div>
                <div style={{ fontSize: 12, opacity: .6 }}>필복 · 은영이로부터</div>
                <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.35, marginTop: 1 }}>
                  아빠 점심 약 잘 드셨네요!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute', bottom: 20, left: 16, right: 16,
        }}>
          <button style={{
            width: '100%', height: 52,
            background: 'var(--color-primary-normal)',
            color: '#fff', border: 'none', borderRadius: 14,
            fontSize: 16, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            <Icon name="send" size={20} />
            보내기
          </button>
        </div>
      </div>
    </PhoneShell>
  );
}

Object.assign(window, {
  H2KakaoInvite, H2PushNotif, H2CaregiverHome, H2DetailScreen, H2MissAlert, H2SendMemo
});
