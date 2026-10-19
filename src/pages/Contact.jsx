import React from "react";
import { Link } from "react-router-dom";
import { PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";
import PageHeader from "../components/PageHeader";
import { ORG } from "../data/nav";

// 온라인 문의 폼은 백엔드 연결 후 추가한다. 지금은 전화 문의와 안내 링크만 제공.
export default function Contact() {
  const topics = [
    { label: "공연 초청·협연", to: "/business", hint: "주요사업에서 지난 공연을 확인하세요." },
    { label: "교육·자격 과정 신청", to: "/projects", hint: "교육프로그램 안내를 먼저 확인하세요." },
    { label: "전국무용예술제 참가", to: "/notices", hint: "모집 공지에서 신청서를 제출합니다." },
  ];

  return (
    <>
      <PageHeader
        title="문의하기"
        description="공연 초청, 교육 신청, 후원 문의는 전화로 받고 있습니다."
        breadcrumb={[{ label: "문의하기" }]}
      />
      <div className="container-site grid gap-6 py-10 md:grid-cols-2 md:py-14">
        <div className="rounded-card border border-line bg-surface p-6 md:p-8">
          <p className="flex items-center gap-2 text-sm text-ink-muted">
            <PhoneOutlined /> 대표 전화
          </p>
          <a
            href={`tel:${ORG.phone.replace(/-/g, "")}`}
            className="mt-2 block font-sans text-3xl font-bold text-ink hover:text-primary"
          >
            {ORG.phone}
          </a>
          <p className="mt-3 text-sm text-ink-muted">사무국 · {ORG.name}</p>
        </div>

        <div className="rounded-card border border-line bg-surface p-6 md:p-8">
          <p className="flex items-center gap-2 text-sm text-ink-muted">
            <EnvironmentOutlined /> 찾아오시는 곳
          </p>
          <p className="mt-2 text-lg font-semibold text-ink">{ORG.address}</p>
          <Link to="/about/location" className="mt-3 inline-block text-primary hover:underline">
            지도와 오시는 길 →
          </Link>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-xl font-bold">문의 전에 확인하세요</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {topics.map((t) => (
              <li key={t.to}>
                <Link
                  to={t.to}
                  className="block h-full rounded-card border border-line bg-surface p-5 transition-colors hover:border-primary"
                >
                  <span className="block font-semibold text-ink">{t.label}</span>
                  <span className="mt-1 block text-sm text-ink-muted">{t.hint}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
