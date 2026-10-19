import React from "react";
import AboutLayout from "../../components/AboutLayout";
import organization from "../../assets/organization.webp";

const board = [
  { role: "이사장 / 대표이사", name: "김죽엽(김태연)" },
  ...["김세화", "김경옥", "박비송", "권기현", "김건태", "김혜숙"].map((name) => ({
    role: "이사",
    name,
  })),
  ...["박영주", "김종성"].map((name) => ({ role: "감사", name })),
];

const office = [
  { role: "이사장", name: "김죽엽(김태연)" },
  { role: "사무국장", name: "정다경" },
  { role: "사무간사", name: "주홍희" },
];

function PersonGrid({ people }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {people.map((p) => (
        <li key={p.role + p.name} className="rounded-card border border-line bg-surface p-4">
          <span className="block text-xs text-ink-muted">{p.role}</span>
          <span className="mt-1 block font-semibold text-ink">{p.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Organization() {
  return (
    <AboutLayout>
      <div className="space-y-12">
        <section>
          <p className="max-w-prose text-ink">
            사단법인 무궁화예술단은 법인의 운영과 주요 의사 결정을 담당하는 이사회와 감사로 구성된
            투명하고 전문적인 조직 체계를 갖추고 있습니다.
          </p>
          <img
            src={organization}
            alt="무궁화예술단 조직도: 이사회 아래 이사장, 사무국, 김죽엽무용단"
            className="mt-8 w-full max-w-3xl"
            loading="lazy"
          />
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold">이사회</h2>
          <PersonGrid people={board} />
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold">사무국</h2>
          <PersonGrid people={office} />
        </section>
      </div>
    </AboutLayout>
  );
}
