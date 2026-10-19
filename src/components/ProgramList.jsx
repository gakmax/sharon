import React, { useMemo, useState } from "react";
import ProgramCard from "./ProgramCard";
import { getStatusKey, sortForFeature } from "../lib/status";

const FILTERS = [
  { key: "all", label: "전체", match: () => true },
  { key: "active", label: "모집·진행중", match: (k) => k === "recruiting" || k === "ongoing" },
  { key: "upcoming", label: "예정", match: (k) => k === "upcoming" },
  { key: "ended", label: "지난", match: (k) => k === "ended" },
];

/** 상태 필터 + 카드 그리드. items: business 또는 projects 배열 */
export default function ProgramList({ items, basePath, kind }) {
  const [filter, setFilter] = useState("all");

  const withStatus = useMemo(
    () => sortForFeature(items).map((item) => ({ item, statusKey: getStatusKey(item) })),
    [items]
  );
  const counts = useMemo(
    () =>
      Object.fromEntries(
        FILTERS.map((f) => [f.key, withStatus.filter(({ statusKey }) => f.match(statusKey)).length])
      ),
    [withStatus]
  );
  const current = FILTERS.find((f) => f.key === filter);
  const visible = withStatus.filter(({ statusKey }) => current.match(statusKey));

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="상태 필터">
        {FILTERS.map((f) => {
          const on = f.key === filter;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={on}
              disabled={counts[f.key] === 0}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                on
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-surface text-ink hover:border-ink"
              }`}
            >
              {f.label}
              <span className={`ml-1.5 tabular-nums ${on ? "text-white/70" : "text-ink-muted"}`}>
                {counts[f.key]}
              </span>
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="py-16 text-center text-ink-muted">해당하는 항목이 없습니다.</p>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map(({ item }) => (
            <li key={item.id}>
              <ProgramCard item={item} to={`${basePath}/${item.id}`} kind={kind} headingLevel="h2" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
