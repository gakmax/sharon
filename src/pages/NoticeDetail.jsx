import React from "react";
import { useParams } from "react-router-dom";
import DetailLayout from "../components/DetailLayout";
import PageHeader from "../components/PageHeader";
import { CategoryBadge, Badge } from "../components/Badge";
import { notices } from "../data/noticedata";
import { business } from "../data/business";
import { ORG } from "../data/nav";

const SECTION = { label: "공지사항", to: "/notices" };

export default function NoticeDetail() {
  const { id } = useParams();
  const currentId = parseInt(id, 10);
  const n = notices.find((x) => parseInt(x.id, 10) === currentId);

  if (!n) {
    return (
      <>
        <PageHeader title={SECTION.label} breadcrumb={[SECTION]} />
        <div className="container-site py-14 text-ink-muted">공지사항을 찾을 수 없습니다.</div>
      </>
    );
  }

  const sorted = [...notices].sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));
  const idx = sorted.findIndex((x) => parseInt(x.id, 10) === currentId);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  const related = [];
  if (n.relatedProgram) {
    const bid = n.relatedProgram.split("/").pop();
    const b = business.find((x) => x.id === bid);
    if (b) related.push({ label: b.title, to: n.relatedProgram });
  }

  const meta = [{ label: "작성일", value: n.notice_date }];
  if (n.note) meta.push({ label: "접수", value: n.note });

  return (
    <DetailLayout
      section={SECTION}
      title={n.title}
      badges={
        <>
          <CategoryBadge category={n.category} />
          {n.status && <Badge tone="primary">{n.status}</Badge>}
        </>
      }
      meta={meta}
      cta={n.apply ? { label: "참가 신청서 작성", to: `/apply/${n.apply}` } : undefined}
      prev={prev && { title: prev.title, to: `/notices/${prev.id}` }}
      next={next && { title: next.title, to: `/notices/${next.id}` }}
      related={related}
      image={undefined}
      description={`${n.title} · ${n.notice_date} · ${ORG.name} 공지사항`}
    >
      {n.content}
    </DetailLayout>
  );
}
