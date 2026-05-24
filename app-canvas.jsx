// 필복 — 가설 2 앱 디자인 · canvas root with tweaks
// 8 screens organized into 2 groups: 페어링 · 일상 사용

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "density": "regular"
}/*EDITMODE-END*/;

function AppH2() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  return (
    <>
      <DesignCanvas>
        <DCSection
          id="intro"
          title="가설 2 — 보호자 PWA + 시니어 페어링"
          subtitle="따뜻한 가족 톤 · 양쪽 페어링 + 일상 사용 전체 플로우"
        >
          <DCArtboard id="intro" label="가설 2 · 앱 디자인" width={760} height={520}>
            <IntroWarmCard />
          </DCArtboard>
        </DCSection>

        <DCSection
          id="pair"
          title="A · 페어링 플로우"
          subtitle="카톡 초대 → 보호자 가입 → 시니어 폰 인증 — 설치 없이 6자리 숫자로"
        >
          <DCArtboard id="a1" label="A1. 카톡 초대 · 가족방" width={375} height={812}>
            <ScA1Invite density={t.density} />
          </DCArtboard>
          <DCArtboard id="a2" label="A2. 보호자 가입 · PWA" width={375} height={812}>
            <ScA2Signup density={t.density} />
          </DCArtboard>
          <DCArtboard id="a3" label="A3. 시니어 폰 · 인증번호" width={375} height={812}>
            <ScA3SeniorPair density={t.density} />
          </DCArtboard>
        </DCSection>

        <DCSection
          id="daily"
          title="B · 일상 사용 플로우"
          subtitle="잠금화면 푸시 · 메인 대시보드 · 진료 정보 · 미복용 경보 · 응원 메모"
        >
          <DCArtboard id="b1" label="B1. 잠금화면 푸시" width={375} height={812}>
            <ScB1Lockscreen density={t.density} />
          </DCArtboard>
          <DCArtboard id="b2" label="B2. 메인 대시보드" width={375} height={812}>
            <ScB2Home density={t.density} />
          </DCArtboard>
          <DCArtboard id="b3" label="B3. 복용 상세 + 다음 진료" width={375} height={812}>
            <ScB3Detail density={t.density} />
          </DCArtboard>
          <DCArtboard id="b4" label="B4. 미복용 경보" width={375} height={812}>
            <ScB4Miss density={t.density} />
          </DCArtboard>
          <DCArtboard id="b5" label="B5. 응원 메모" width={375} height={812}>
            <ScB5Memo density={t.density} />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="정보 밀도" />
        <TweakRadio
          label="화면 밀도"
          value={t.density}
          options={[
            { value: 'compact', label: '간결' },
            { value: 'regular', label: '표준' },
            { value: 'rich', label: '풍부' },
          ]}
          onChange={(v) => setTweak('density', v)}
        />
        <div style={{
          fontSize: 11, color: 'rgba(60,50,40,0.65)',
          padding: '6px 10px', lineHeight: 1.5,
        }}>
          간결: 12-13pt 글씨, 최소 정보<br />
          표준: 14-15pt, 균형 잡힌 정보<br />
          풍부: 16pt+, 추가 컨텍스트 표시
        </div>
      </TweaksPanel>
    </>
  );
}

function IntroWarmCard() {
  return (
    <div className="intro-w" style={{ width: '100%', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 6 }}>
        <div style={{
          width: 64, height: 64, borderRadius: 18,
          background: 'linear-gradient(135deg, #FF7B5B, #FFB088)',
          color: '#fff', display: 'grid', placeItems: 'center',
          fontFamily: 'var(--font-family-brand)', fontWeight: 800,
          fontSize: 28, letterSpacing: '-0.04em',
          boxShadow: '0 8px 24px rgba(255,123,91,0.28)',
        }}>필</div>
        <div>
          <div style={{
            fontSize: 11, color: 'var(--warm-coral-deep)',
            fontFamily: 'var(--font-family-mono)', letterSpacing: '0.06em',
            fontWeight: 700, textTransform: 'uppercase',
          }}>
            Hypothesis 2 · App Design v1
          </div>
          <h1>가족이 함께 챙겨요</h1>
          <div style={{ fontSize: 14, color: 'var(--warm-text-neutral)' }}>
            보호자 PWA + 시니어 페어링 · 따뜻한 가족 톤
          </div>
        </div>
      </div>

      <div className="quote">
        "아빠가 오늘도 점심약 안 드신 것 같아 ㅠㅠ"<br />
        — 가족방의 어느 평일 오후. 우리 모두 한 번쯤 본 메시지.
      </div>

      <div style={{ fontSize: 14, color: 'var(--warm-text-neutral)', lineHeight: 1.6 }}>
        가설 2를 8개 화면으로 풀었습니다. 보호자가 카톡 링크 하나로 페어링을 시작하면, 부모님 폰엔 큰 글씨로 인증번호 한 번만 누르고 끝. 이후엔 약을 드실 때마다 가족 모두에게 따뜻한 알림이 카톡처럼 도착합니다.
      </div>

      <div className="grid">
        <div className="card">
          <div className="num">Group A · 3 screens</div>
          <h3>페어링 (Onboarding)</h3>
          <p>카톡 초대 → 보호자 가입 → <b>시니어 폰 6자리 인증</b>. 설치는 절대 강요하지 않습니다.</p>
        </div>
        <div className="card">
          <div className="num">Group B · 5 screens</div>
          <h3>일상 사용</h3>
          <p>잠금화면 푸시 · <b>warm 대시보드</b> · 다음 진료 카드 · 미복용 경보 · 응원 메모.</p>
        </div>
        <div className="card">
          <div className="num">Tweaks</div>
          <h3>정보 밀도 조절</h3>
          <p>오른쪽 하단 <b>Tweaks</b> 패널에서 간결 / 표준 / 풍부 모드를 비교해보세요.</p>
        </div>
      </div>

      <div style={{
        marginTop: 18, padding: '10px 14px',
        background: 'rgba(0, 94, 235, 0.06)',
        borderRadius: 12,
        fontSize: 12, color: 'var(--warm-text-neutral)',
        display: 'flex', gap: 16, flexWrap: 'wrap',
      }}>
        <div><b>검증 포인트</b></div>
        <div>· 페어링 6자리만으로 충분한가</div>
        <div>· 따뜻한 톤 vs 의료 신뢰감</div>
        <div>· 다음 진료 카드의 위치/빈도</div>
      </div>
    </div>
  );
}

const root2 = ReactDOM.createRoot(document.getElementById('app'));
root2.render(<AppH2 />);
