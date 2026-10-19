import React from "react";
import AboutLayout from "../../components/AboutLayout";
import { ORG } from "../../data/nav";

const visions = [
  { title: "문화예술 발전", desc: "국내외 예술문화 교류를 통한 문화예술 생태계 활성화" },
  { title: "인재 발굴", desc: "예술적 재능을 가진 신인 발굴 및 체계적인 지원" },
  { title: "후진 양성", desc: "전통문화예술 교육을 통한 차세대 예술가 육성" },
];

const businessAreas = [
  {
    title: "국내·외 예술문화 교류",
    desc: "글로벌 네트워크 구축을 통한 예술문화 교류 활성화 및 국제적 문화 협력 증진",
  },
  {
    title: "예술문화 선양 및 공익 기여",
    desc: "사회적 가치 실현을 위한 다양한 문화예술 프로그램 운영 및 지역사회 발전 기여",
  },
  {
    title: "신인 발굴 및 지원",
    desc: "재능있는 예술인을 조기에 발굴하고 체계적인 성장 기회와 다양한 지원 제공",
  },
  {
    title: "후진 양성 프로그램",
    desc: "체계적인 교육 커리큘럼을 통한 차세대 예술인 육성 및 멘토링 시스템 운영",
  },
  {
    title: "정기 연주회 및 발표회",
    desc: "정기적인 공연 기회 제공을 통한 실전 경험 축적 및 주관·후원 활동 전개",
  },
  {
    title: "전통문화예술 교육",
    desc: "전통문화예술 교육프로그램 개발 및 우리 문화유산 계승을 위한 인재 양성",
  },
];

const stats = [
  { value: new Date().getFullYear() - ORG.founded + 1, unit: "년", label: "1993년 창립" },
  { value: 48, unit: "회", label: "전국무용예술제" },
  { value: 26, unit: "회", label: "정기 춤판" },
];

export default function Introduce() {
  return (
    <AboutLayout>
      <div className="space-y-16">
        <section className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="text-2xl font-bold">설립 목적</h2>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink">
              본 법인은 <span className="font-semibold text-primary">예술문화의 발전과 선양</span>을
              위하여 노력하는 자질있는 인재를 발굴하고, 후진양성과 국내·외 예술문화 진흥을 위하여
              최선의 노력을 경주하여 활동함을 목적으로 합니다.
            </p>
          </div>
          <dl className="flex gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="font-serif text-4xl font-bold text-primary tabular-nums">
                  {s.value}
                  <span className="ml-0.5 font-sans text-base font-medium text-ink-muted">
                    {s.unit}
                  </span>
                </dd>
                <dt className="mt-1 text-xs text-ink-muted">{s.label}</dt>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2 className="text-2xl font-bold">우리의 비전</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {visions.map((v, i) => (
              <li key={v.title} className="rounded-card border border-line bg-surface p-6">
                <span className="font-serif text-sm font-bold text-gold">0{i + 1}</span>
                <h3 className="mt-2 font-sans text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{v.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold">주요 사업 영역</h2>
          <ul className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {businessAreas.map((b) => (
              <li key={b.title} className="border-l-2 border-primary pl-4">
                <h3 className="font-sans text-base font-bold">{b.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{b.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-card bg-ink px-8 py-12 text-center text-white md:px-12">
          <p className="font-serif text-xl leading-relaxed md:text-2xl">
            예술문화의 미래를 만들어가는
            <br />
            <span className="font-bold text-gold">든든한 동반자</span>가 되겠습니다.
          </p>
        </section>
      </div>
    </AboutLayout>
  );
}
