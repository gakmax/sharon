import React from "react";
import PageHeader from "../components/PageHeader";
import ProgramList from "../components/ProgramList";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      <PageHeader
        title="교육프로그램"
        description="청소년·청년 대상 전통문화예술 교육과 한국춤 지도자 자격 과정입니다."
        breadcrumb={[{ label: "교육프로그램" }]}
      />
      <div className="container-site py-10 md:py-14">
        <ProgramList items={projects} basePath="/projects" kind="교육" />
      </div>
    </>
  );
}
