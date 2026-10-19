import React from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "./PageHeader";
import { ABOUT_TABS } from "../data/nav";

// 소개 섹션 공용 레이아웃: 페이지 헤더 + 하위 탭 + 본문 컨테이너
export default function AboutLayout({ children }) {
  const { pathname } = useLocation();
  const current = ABOUT_TABS.find((t) => t.to === pathname) ?? ABOUT_TABS[0];

  return (
    <>
      <PageHeader
        title={current.label}
        description={current.description}
        breadcrumb={[{ label: "소개", to: ABOUT_TABS[0].to }, { label: current.label }]}
        tabs={ABOUT_TABS}
      />
      <div className="container-site py-10 md:py-14">{children}</div>
    </>
  );
}
