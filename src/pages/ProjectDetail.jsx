import React from "react";
import { useParams } from "react-router-dom";
import DetailLayout from "../components/DetailLayout";
import PageHeader from "../components/PageHeader";
import { StatusBadge } from "../components/Badge";
import { projects } from "../data/projects";
import { projectsContent } from "../data/projects_content";
import { notices } from "../data/noticedata";
import { getStatusKey } from "../lib/status";

const SECTION = { label: "교육프로그램", to: "/projects" };

export default function ProjectDetail() {
  const { id } = useParams();
  const p = projects.find((x) => x.id === id);
  const c = projectsContent.find((x) => x.id === id);

  if (!p || !c) {
    return (
      <>
        <PageHeader title={SECTION.label} breadcrumb={[SECTION]} />
        <div className="container-site py-14 text-ink-muted">프로그램 정보를 찾을 수 없습니다.</div>
      </>
    );
  }

  const sorted = [...projects].sort((a, b) =>
    a.year !== b.year ? a.year - b.year : a.id.localeCompare(b.id)
  );
  const idx = sorted.findIndex((x) => x.id === id);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;
  const statusKey = getStatusKey(p);

  const related = (p.relatedNotices ?? [])
    .map((nid) => notices.find((n) => n.id === nid))
    .filter(Boolean)
    .map((n) => ({ label: n.title, to: `/notices/${n.id}` }));

  return (
    <DetailLayout
      section={SECTION}
      title={p.title}
      badges={
        <>
          <StatusBadge statusKey={statusKey} />
          <span className="text-sm text-ink-muted">{p.year}년 · 교육</span>
        </>
      }
      meta={[
        { label: "대상", value: p.target },
        { label: "기간", value: p.duration },
      ]}
      cta={
        p.apply && statusKey !== "ended"
          ? { label: "교육 신청서 작성", to: `/apply/${p.apply}` }
          : undefined
      }
      prev={prev && { title: prev.title, to: `/projects/${prev.id}` }}
      next={next && { title: next.title, to: `/projects/${next.id}` }}
      related={related}
      image={p.image}
      description={`${p.title} · 대상 ${p.target} · ${p.duration}`}
    >
      {c.content}
    </DetailLayout>
  );
}
