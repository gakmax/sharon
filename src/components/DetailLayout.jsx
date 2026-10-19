import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";
import { ORG } from "../data/nav";

/**
 * 사업·교육·공지 상세 공용 레이아웃.
 * section: { label, to }  — 상위 목록
 * meta: [{ label, value }] — 요약 박스
 * cta: { label, to, note? } — 신청 버튼(데스크톱 사이드, 모바일 하단 고정)
 * prev/next: { title, to }, related: [{ label, to }]
 */
export default function DetailLayout({
  section,
  title,
  badges,
  meta = [],
  cta,
  prev,
  next,
  related = [],
  image,
  description,
  children,
}) {
  return (
    <>
      <PageHeader
        title={section.label}
        breadcrumb={[{ label: section.label, to: section.to }, { label: title }]}
        metaTitle={title}
        metaImage={image}
        metaDescription={description}
      />
      <div className={`container-site py-10 md:py-14 ${cta ? "pb-24 lg:pb-14" : ""}`}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
          <article className="min-w-0">
            <header className="border-b border-line pb-6">
              {badges && <div className="mb-3 flex flex-wrap items-center gap-2">{badges}</div>}
              <h2 className="text-2xl font-bold leading-snug md:text-3xl">{title}</h2>
              {meta.length > 0 && (
                <dl className="mt-5 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
                  {meta.map((m) => (
                    <div key={m.label} className="flex gap-3">
                      <dt className="w-14 shrink-0 text-ink-muted">{m.label}</dt>
                      <dd className="m-0 min-w-0 text-ink">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </header>

            <div className="prose-site py-8">{children}</div>

            {(prev || next) && (
              <nav className="divide-y divide-line border-y border-line" aria-label="이전·다음 글">
                {prev && (
                  <Link to={prev.to} className="flex gap-4 py-3 text-ink hover:text-primary">
                    <span className="w-14 shrink-0 pt-0.5 text-xs text-ink-muted">이전 글</span>
                    <span className="min-w-0">{prev.title}</span>
                  </Link>
                )}
                {next && (
                  <Link to={next.to} className="flex gap-4 py-3 text-ink hover:text-primary">
                    <span className="w-14 shrink-0 pt-0.5 text-xs text-ink-muted">다음 글</span>
                    <span className="min-w-0">{next.title}</span>
                  </Link>
                )}
              </nav>
            )}

            <div className="mt-6 flex justify-end">
              <Link to={section.to} className="btn-secondary">
                목록
              </Link>
            </div>
          </article>

          <aside className="space-y-4 lg:sticky lg:top-24">
            {cta && (
              <div className="hidden rounded-card border border-primary/30 bg-surface p-5 lg:block">
                {cta.note && <p className="m-0 mb-3 text-sm text-ink-muted">{cta.note}</p>}
                <Link to={cta.to} className="btn-primary w-full !py-3">
                  {cta.label}
                </Link>
              </div>
            )}
            {related.length > 0 && (
              <div className="rounded-card border border-line bg-surface p-5">
                <h3 className="m-0 font-sans text-sm font-bold text-ink">관련 글</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {related.map((r) => (
                    <li key={r.to}>
                      <Link to={r.to} className="text-ink hover:text-primary">
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="rounded-card bg-surface-2/70 p-5 text-sm">
              <p className="m-0 text-xs font-semibold tracking-widest text-ink-muted">문의</p>
              <a
                href={`tel:${ORG.phone.replace(/-/g, "")}`}
                className="mt-1 block font-sans text-lg font-semibold text-ink hover:text-primary"
              >
                {ORG.phone}
              </a>
              <p className="m-0 mt-1 text-ink-muted">{ORG.name} 사무국</p>
            </div>
          </aside>
        </div>
      </div>

      {cta && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 p-3 backdrop-blur lg:hidden">
          <div className="container-site !px-0">
            <Link to={cta.to} className="btn-primary w-full !py-3">
              {cta.label}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
