import React from "react";
import { Link } from "react-router-dom";
import { StatusBadge } from "./Badge";
import { getStatusKey } from "../lib/status";

/** 사업·교육 공용 카드. 이미지 위, 텍스트 아래. kind: "공연·행사" | "교육" */
export default function ProgramCard({ item, to, kind, headingLevel = "h3" }) {
  const statusKey = getStatusKey(item);
  const Heading = headingLevel;
  return (
    <Link
      to={to}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-primary"
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface-2">
        <img
          src={item.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <StatusBadge statusKey={statusKey} />
          {kind && <span>{kind}</span>}
          <span className="ml-auto tabular-nums">{item.year}</span>
        </div>
        <Heading className="font-sans text-base font-bold leading-snug text-ink group-hover:text-primary">
          {item.title}
        </Heading>
        <dl className="mt-auto space-y-0.5 pt-1 text-sm text-ink-muted">
          <div className="flex gap-2">
            <dt className="shrink-0">대상</dt>
            <dd className="m-0">{item.target}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0">기간</dt>
            <dd className="m-0 tabular-nums">{item.duration}</dd>
          </div>
        </dl>
      </div>
    </Link>
  );
}
