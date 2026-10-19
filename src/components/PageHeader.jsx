import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import usePageMeta from "../lib/usePageMeta";

/**
 * 모든 서브페이지의 첫 화면.
 * breadcrumb: [{ label, to? }] — "홈"은 자동으로 앞에 붙는다. 마지막 항목은 보통 to 없이 현재 페이지.
 * tabs: [{ label, to }] — 하위 메뉴가 있는 섹션(소개)에서 사용.
 */
export default function PageHeader({
  title,
  description,
  breadcrumb = [],
  tabs,
  children,
  metaTitle,
  metaImage,
  metaDescription,
}) {
  const { pathname } = useLocation();
  usePageMeta({ title: metaTitle ?? title, description: metaDescription ?? description, image: metaImage });

  return (
    <div className="border-b border-line bg-surface-2/60">
      <div
        className={`container-site pt-8 md:pt-12 ${tabs ? "pb-4" : "pb-8 md:pb-10"}`}
      >
        <nav
          aria-label="현재 위치"
          className="mb-2 flex flex-wrap items-center gap-1.5 text-xs text-ink-muted"
        >
          <Link to="/" className="hover:text-primary">
            홈
          </Link>
          {breadcrumb.map((item, i) => (
            <Fragment key={i}>
              <span aria-hidden="true">›</span>
              {item.to ? (
                <Link to={item.to} className="hover:text-primary">
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink" aria-current="page">
                  {item.label}
                </span>
              )}
            </Fragment>
          ))}
        </nav>
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        {description && (
          <p className="mt-2 max-w-prose text-[15px] text-ink-muted md:text-base">
            {description}
          </p>
        )}
        {children}
      </div>

      {tabs && (
        <div className="container-site">
          <nav
            aria-label={`${title} 하위 메뉴`}
            className="-mb-px flex gap-1 overflow-x-auto"
          >
            {tabs.map((tab) => {
              const active = pathname === tab.to;
              return (
                <Link
                  key={tab.to}
                  to={tab.to}
                  aria-current={active ? "page" : undefined}
                  className={`whitespace-nowrap border-b-2 px-3 py-2.5 text-sm transition-colors ${
                    active
                      ? "border-primary font-semibold text-primary"
                      : "border-transparent text-ink-muted hover:text-ink"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
