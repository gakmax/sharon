import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { CategoryBadge } from "./Badge";
import { NOTICE_CATEGORIES } from "../lib/status";

const PAGE_SIZE = 10;

export function NoticeRow({ notice, compact = false }) {
  return (
    <Link
      to={`/notices/${notice.id}`}
      className={`flex items-start gap-3 transition-colors hover:bg-surface-2/60 ${
        compact ? "py-3" : "px-1 py-4 sm:px-3"
      }`}
    >
      <CategoryBadge category={notice.category} className="mt-0.5 w-11 justify-center" />
      <div className="min-w-0 flex-1">
        <p className={`m-0 font-medium leading-snug text-ink ${compact ? "truncate" : ""}`}>
          {notice.title}
        </p>
        {!compact && notice.note && (
          <p className="m-0 mt-1 text-sm text-primary">{notice.note}</p>
        )}
      </div>
      <time
        dateTime={notice.notice_date}
        className="shrink-0 pt-0.5 text-sm text-ink-muted tabular-nums"
      >
        {compact ? notice.notice_date.slice(5).replace("-", ".") : notice.notice_date}
      </time>
    </Link>
  );
}

/** 분류 탭 + 검색 + 목록 + 페이지네이션. notices: 정적 데이터(백엔드 전환 시 props만 교체) */
export default function NoticeList({ notices }) {
  const [category, setCategory] = useState("전체");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const sorted = useMemo(
    () => [...notices].sort((a, b) => b.notice_date.localeCompare(a.notice_date)),
    [notices]
  );
  const tabs = useMemo(() => {
    const keys = ["전체", ...Object.keys(NOTICE_CATEGORIES)];
    return keys
      .map((k) => ({
        key: k,
        count: k === "전체" ? sorted.length : sorted.filter((n) => n.category === k).length,
      }))
      .filter((t) => t.count > 0);
  }, [sorted]);

  const q = query.trim().toLowerCase();
  const filtered = sorted.filter(
    (n) =>
      (category === "전체" || n.category === category) &&
      (!q || n.title.toLowerCase().includes(q))
  );
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const changeCategory = (k) => {
    setCategory(k);
    setPage(1);
  };

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 border-b border-line md:flex-row md:items-end md:justify-between">
        <nav className="-mb-px flex gap-1 overflow-x-auto" aria-label="공지 분류">
          {tabs.map((t) => {
            const on = t.key === category;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => changeCategory(t.key)}
                aria-pressed={on}
                className={`whitespace-nowrap border-b-2 px-3 py-2.5 text-sm transition-colors ${
                  on
                    ? "border-primary font-semibold text-primary"
                    : "border-transparent text-ink-muted hover:text-ink"
                }`}
              >
                {t.key}
                <span className="ml-1 tabular-nums opacity-70">{t.count}</span>
              </button>
            );
          })}
        </nav>
        <label className="relative mb-2 block md:w-64">
          <span className="sr-only">공지 검색</span>
          <SearchOutlined className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" />
          <input
            id="notice-search"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="제목으로 검색"
            className="h-10 w-full rounded border border-line bg-surface pl-9 pr-3 text-sm text-ink placeholder:text-ink-muted/70 focus:border-primary focus:outline-none"
          />
        </label>
      </div>

      {pageItems.length === 0 ? (
        <p className="py-16 text-center text-ink-muted">
          {q ? `"${query}"에 해당하는 공지가 없습니다.` : "등록된 공지가 없습니다."}
        </p>
      ) : (
        <ul className="divide-y divide-line border-b border-line">
          {pageItems.map((n) => (
            <li key={n.id}>
              <NoticeRow notice={n} />
            </li>
          ))}
        </ul>
      )}

      {filtered.length > PAGE_SIZE && (
        <div className="mt-6 flex justify-center">
          <Pagination
            current={page}
            pageSize={PAGE_SIZE}
            total={filtered.length}
            onChange={setPage}
            showSizeChanger={false}
            itemRender={(pageNo, type, original) => {
              if (type === "prev")
                return <button type="button" aria-label="이전 페이지" className="ant-pagination-item-link">‹</button>;
              if (type === "next")
                return <button type="button" aria-label="다음 페이지" className="ant-pagination-item-link">›</button>;
              if (type === "page") return <span aria-label={`${pageNo}페이지`}>{pageNo}</span>;
              return original;
            }}
          />
        </div>
      )}
    </div>
  );
}
