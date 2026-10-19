import React from "react";
import PageHeader from "../components/PageHeader";
import ProgramList from "../components/ProgramList";
import { business } from "../data/business";

export default function Business() {
  return (
    <>
      <PageHeader
        title="주요사업"
        description="전국무용예술제, 정기 춤판, 국제 교류 공연 등 연도별 주요 사업입니다."
        breadcrumb={[{ label: "주요사업" }]}
      />
      <div className="container-site py-10 md:py-14">
        <ProgramList items={business} basePath="/business" kind="공연·행사" />
      </div>
    </>
  );
}
