---
id: template
title: 템플릿 및 컴포넌트 가이드
sidebar_position: 99
nav_label: 템플릿
theme: public-blue
---

:::hero
badge: 📋 TEMPLATE GUIDE
title: 브로슈어 작성 가이드
description: 이 페이지에서 모든 블록의 사용법을 확인하고 복사해서 사용하세요. JSX 코드 없이 ::: 문법만으로 모든 레이아웃을 만들 수 있습니다.
:::

---

## 핵심 규칙

- 모든 블록은 `:::블록이름` 으로 시작하고 `:::` 으로 끝납니다
- 속성은 `key: 값` 형태로 적습니다
- 목록 항목은 `-` 로 시작합니다
- 항목 내 여러 값은 `|` 파이프로 구분합니다
- 큰따옴표(`"`), 꺾쇠(`<>`)는 속성값에 넣지 마세요
- 숫자 특수기호(①②③)는 반드시 따옴표로 감쌉니다: `"①"`

---

## ① hero — 상단 히어로 배너

페이지 가장 위에 반드시 배치합니다.

```
:::hero
badge: CHAPTER 01 · 사업소개
title: 진정한 AI·SW 가치확산을 실현하는 부산대학교 SW중심대학
description: 대학교육을 SW중심으로 혁신함으로써 학생·기업·사회의 Software 경쟁력을 강화합니다.
:::
```

:::hero
badge: CHAPTER 01 · 사업소개
title: 진정한 AI·SW 가치확산을 실현하는 부산대학교 SW중심대학
description: 대학교육을 SW중심으로 혁신함으로써 학생·기업·사회의 Software 경쟁력을 강화합니다.
:::

---

## ② kpi — 핵심 지표 가로 나열

숫자·통계를 가로로 나란히 보여줍니다.

```
:::kpi
subtitle: Key Figures
title: 핵심 현황

- label: SW학과 정원
  value: 192명
  sub: 2019년 대비 43% 순증

- label: 전공 특화 트랙
  value: 8개
  sub: 클라우드·보안·IoT 등

- label: 동남권 AI·SW
  value: 거점 1위
  sub: 국립대학 최초 SW중심대학 선정
:::
```

:::kpi
subtitle: Key Figures
title: 핵심 현황

- label: SW학과 정원
  value: 192명
  sub: 2019년 대비 43% 순증

- label: 전공 특화 트랙
  value: 8개
  sub: 클라우드·보안·IoT 등

- label: 동남권 AI·SW
  value: 거점 1위
  sub: 국립대학 최초 SW중심대학 선정
:::

---

## ③ cards — 카드 그리드

아이콘+제목+설명 카드를 그리드로 배치합니다.

```
:::cards
title: 5대 핵심 교육 미션
subtitle: CORE EDUCATION MISSION
columns: 3
variant: elevated

- title: AI·SW 전문인력 양성
  description: 이론과 실무를 겸비한 AI·SW 전문 교육으로 실무형 인재 양성
  icon: 🎯

- title: 실효성 있는 산학협력
  description: 산학협력 프로젝트, 채용연계형 인턴십을 통한 실무 역량 교육
  icon: 🤝

- title: AI·SW 가치확산
  description: 공교육 내 AI·SW 교육 강화, 맞춤형 프로그램 운영
  icon: 🌏
:::
```

:::cards
title: 5대 핵심 교육 미션
subtitle: CORE EDUCATION MISSION
columns: 3
variant: elevated

- title: AI·SW 전문인력 양성
  description: 이론과 실무를 겸비한 AI·SW 전문 교육으로 실무형 인재 양성
  icon: 🎯

- title: 실효성 있는 산학협력
  description: 산학협력 프로젝트, 채용연계형 인턴십을 통한 실무 역량 교육
  icon: 🤝

- title: AI·SW 가치확산
  description: 공교육 내 AI·SW 교육 강화, 맞춤형 프로그램 운영
  icon: 🌏
:::

---

## ④ panel — 아이콘+제목+목록 패널

파란 헤더바 아래 그리드로 나열합니다.

**목록형** (`items`에 `|` 파이프로 구분):

```
:::panel
header: AI융합교육원 사업추진체계
headersub: Organization
columns: 3

- icon: 📚
  title: 기초교육부
  items: AI기본교육 전략수립 | AI기초교육과정 운영 | 교육콘텐츠 공동개발

- icon: 🎓
  title: 전공교육부
  items: AI대학 연계 및 인프라 구축 | 전공특화트랙 운영

- icon: 🔗
  title: 융합교육부
  items: AI융합연계전공 운영 | 개방형 온라인과정 운영
:::
```

:::panel
header: AI융합교육원 사업추진체계
headersub: Organization
columns: 3

- icon: 📚
  title: 기초교육부
  items: AI기본교육 전략수립 | AI기초교육과정 운영 | 교육콘텐츠 공동개발

- icon: 🎓
  title: 전공교육부
  items: AI대학 연계 및 인프라 구축 | 전공특화트랙 운영

- icon: 🔗
  title: 융합교육부
  items: AI융합연계전공 운영 | 개방형 온라인과정 운영
:::

**설명형** (`desc`로 한 줄 설명):

```
:::panel
header: 8개 AI·SW 전공 특화 트랙
headersub: SPECIALIZED CURRICULUM TRACKS
columns: 4

- icon: ☁️
  title: 클라우드
  desc: 클라우드 시장 연 18% 성장. 2030년 약 80만 명 신규 일자리 창출 전망

- icon: 🔒
  title: 융합보안
  desc: 차세대 보안 세계시장 연평균 15.33% 성장

- icon: 🤖
  title: 생성AI
  desc: 글로벌 시장 연평균 20% 이상 성장

- icon: 🧠
  title: 인공지능응용
  desc: 글로벌 시장 2030년까지 연평균 30% 이상 성장 전망
:::
```

:::panel
header: 8개 AI·SW 전공 특화 트랙
headersub: SPECIALIZED CURRICULUM TRACKS
columns: 4

- icon: ☁️
  title: 클라우드
  desc: 클라우드 시장 연 18% 성장. 2030년 약 80만 명 신규 일자리 창출 전망

- icon: 🔒
  title: 융합보안
  desc: 차세대 보안 세계시장 연평균 15.33% 성장

- icon: 🤖
  title: 생성AI
  desc: 글로벌 시장 연평균 20% 이상 성장

- icon: 🧠
  title: 인공지능응용
  desc: 글로벌 시장 2030년까지 연평균 30% 이상 성장 전망
:::

---

## ⑤ stepper — 단계별 프로세스

단계를 가로로 나란히 보여주는 로드맵 블록입니다.

```
:::stepper
header: 3단계 추진 로드맵 · 2023–2028
headersub: THREE-PHASE ROADMAP

- phase: 1단계
  period: 2023–2024
  title: AI·SW 교육체계 재정비
  items: 8개 전공트랙 신설 | 인공지능 공동학과 신설 | PNU DevCloud 구축

- phase: 2단계
  period: 2025–2026
  title: 맞춤형 교육 내실화
  items: SMART-PNU 교육혁신모델 내실화 | 산학협력 선순환 체계 구축

- phase: 3단계
  period: 2027–2028
  title: 성과 분석 및 공유확산
  items: PNU-ICEx 성과 관리 | 취업연계 인턴십 성과 확산
:::
```

:::stepper
header: 3단계 추진 로드맵 · 2023–2028
headersub: THREE-PHASE ROADMAP

- phase: 1단계
  period: 2023–2024
  title: AI·SW 교육체계 재정비
  items: 8개 전공트랙 신설 | 인공지능 공동학과 신설 | PNU DevCloud 구축

- phase: 2단계
  period: 2025–2026
  title: 맞춤형 교육 내실화
  items: SMART-PNU 교육혁신모델 내실화 | 산학협력 선순환 체계 구축

- phase: 3단계
  period: 2027–2028
  title: 성과 분석 및 공유확산
  items: PNU-ICEx 성과 관리 | 취업연계 인턴십 성과 확산
:::

---

## ⑥ strategy — 전략 카드

어두운 그라데이션 배경에 전략 카드를 배치합니다.

```
:::strategy
title: 4C 추진전략
subtitle: STRATEGIC FRAMEWORK

- letter: C
  title: Customized Education
  desc: 신기술 반영 교육과정 기반 맞춤형 교육혁신

- letter: C
  title: Convergence Research
  desc: 미래지향적 융합 연구 및 성과 창출

- letter: C
  title: Cooperative Industry-Univ.
  desc: 소통·관계 중심 산학협력 네트워크 강화

- letter: C
  title: Connected Regional Community
  desc: SW가치확산 지역거점 AI·SW 허브 구축
:::
```

:::strategy
title: 4C 추진전략
subtitle: STRATEGIC FRAMEWORK

- letter: C
  title: Customized Education
  desc: 신기술 반영 교육과정 기반 맞춤형 교육혁신

- letter: C
  title: Convergence Research
  desc: 미래지향적 융합 연구 및 성과 창출

- letter: C
  title: Cooperative Industry-Univ.
  desc: 소통·관계 중심 산학협력 네트워크 강화

- letter: C
  title: Connected Regional Community
  desc: SW가치확산 지역거점 AI·SW 허브 구축
:::

---

## ⑦ alphagrid — 알파벳 뱃지 그리드

알파벳 뱃지+설명을 그리드로 나열합니다.

```
:::alphagrid
title: SMARTPNU — 8가지 인재상
subtitle: TALENT MODEL
columns: 4

- letter: S
  label: 문제해결형 혁신인재
  sub: Software

- letter: M
  label: 미래지향적 혁신인재
  sub: Medoid

- letter: A
  label: 자기주도형 혁신인재
  sub: AIMCSD

- letter: R
  label: 지역 혁신인재
  sub: Region
:::
```

:::alphagrid
title: SMARTPNU — 8가지 인재상
subtitle: TALENT MODEL
columns: 4

- letter: S
  label: 문제해결형 혁신인재
  sub: Software

- letter: M
  label: 미래지향적 혁신인재
  sub: Medoid

- letter: A
  label: 자기주도형 혁신인재
  sub: AIMCSD

- letter: R
  label: 지역 혁신인재
  sub: Region
:::

---

## ⑧ split — 좌우 분할 패널

왼쪽(통계·다크)과 오른쪽(목록·라이트)을 나란히 배치합니다.

```
:::split
left-header: 부산대–경북대 인공지능 공동학과
left-sub: Joint AI Department · 전국 최초
left-dark: true
right-header: 융합교육 혁신 4방향
right-sub: Convergence Strategy

left:
- label: 부산대학교
  value: 68명
  desc: AI Software 특화 교과목 주관

- label: 경북대학교
  value: 60명
  desc: AI Hardware 특화 교과목 주관

- label: 총 정원
  value: 128명
  desc: 전국 최초 인공지능 공동학과

right:
- num: "①"
  title: 융합교육체계 다변화
  desc: AI·SW융합트랙(14개) 추가. 수요별 다양한 융합 교육 과정

- num: "②"
  title: 융합 범위 확장
  desc: 이공계 중심에서 인문·사회 포함 전 분야로 확장
:::
```

:::split
left-header: 부산대–경북대 인공지능 공동학과
left-sub: Joint AI Department · 전국 최초
left-dark: true
right-header: 융합교육 혁신 4방향
right-sub: Convergence Strategy

left:
- label: 부산대학교
  value: 68명
  desc: AI Software 특화 교과목 주관

- label: 경북대학교
  value: 60명
  desc: AI Hardware 특화 교과목 주관

- label: 총 정원
  value: 128명
  desc: 전국 최초 인공지능 공동학과

right:
- num: "①"
  title: 융합교육체계 다변화
  desc: AI·SW융합트랙(14개) 추가. 수요별 다양한 융합 교육 과정

- num: "②"
  title: 융합 범위 확장
  desc: 이공계 중심에서 인문·사회 포함 전 분야로 확장
:::

---

## 기타 컴포넌트 (JSX)

아래 컴포넌트는 JSX 문법을 사용합니다. 특수한 상황에서만 쓰세요.

### Callout — 알림 박스

<Callout type="info" title="안내드립니다">
  본 교육 과정은 부산대학교 학생이라면 누구나 신청 가능합니다.
</Callout>

<Callout type="success" title="접수 완료">
  서류 접수가 정상적으로 처리되었습니다.
</Callout>

<Callout type="warning" title="주의사항">
  신청 기간 이후에는 수정이 불가능합니다.
</Callout>

<Callout type="danger" title="긴급 공지">
  시스템 점검으로 인해 서비스가 일시 중단됩니다.
</Callout>

```jsx
<Callout type="info" title="안내">내용</Callout>
// type: info | success | warning | danger
```

### StepList — 단계 절차

<StepList>
  <StepItem step="1" title="온라인 신청 접수">
    홈페이지를 통해 신청서를 작성하고 증빙 서류를 업로드합니다.
  </StepItem>
  <StepItem step="2" title="서류 심사 및 면접">
    제출된 서류를 바탕으로 1차 선발 후 면접을 진행합니다.
  </StepItem>
  <StepItem step="3" title="최종 합격자 발표">
    최종 선발된 인원에게 개별 연락 및 오리엔테이션을 실시합니다.
  </StepItem>
</StepList>

### Details — FAQ 접기/펼치기

<Details summary="Q. 수강료는 얼마인가요?">
  본 교육원은 전액 국비 지원으로 운영되므로 별도의 수강료가 발생하지 않습니다.
</Details>

<Details summary="Q. 비전공자도 신청 가능한가요?">
  네, 전공에 상관없이 AI에 관심 있는 학생이라면 누구나 기초 과정부터 수강할 수 있습니다.
</Details>

---

## AI에게 새 챕터 작성 요청할 때 프롬프트

```
아래 텍스트 자료를 바탕으로 Docusaurus md 파일을 작성해줘.

규칙:
1. 반드시 ::: 디렉티브 문법만 사용 (99-template.md 참고)
2. JSX, HTML 코드는 절대 쓰지 말 것
3. 파일 맨 위에 frontmatter(id, title, sidebar_position, theme: public-blue) 넣을 것
4. hero 블록을 가장 먼저, 그 다음 kpi → panel/cards/stepper 순으로 배치
5. 빈 공간 없이 내용을 꽉 채울 것

사용 가능한 블록: hero, kpi, cards, panel, stepper, strategy, alphagrid, split

[여기에 텍스트 자료 붙여넣기]
```
