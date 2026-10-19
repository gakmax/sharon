import React from "react";
import { Link } from "react-router-dom";
import { PhoneOutlined } from "@ant-design/icons";
import NoticePopup from "../components/NoticePopup";
import ProgramCard from "../components/ProgramCard";
import { NoticeRow } from "../components/NoticeList";
import { business } from "../data/business";
import { projects } from "../data/projects";
import { notices } from "../data/noticedata";
import { ORG, CONTACT_LINK } from "../data/nav";
import { sortForFeature } from "../lib/status";
import usePageMeta from "../lib/usePageMeta";
import mainImg from "../assets/mainhome.webp";
import photo1 from "../assets/carousel1.webp";
import photo2 from "../assets/carousel2.webp";
import photo3 from "../assets/carousel3.webp";

const stats = [
  { value: new Date().getFullYear() - ORG.founded, unit: "년", label: "1993년 창립" },
  { value: 48, unit: "회", label: "전국무용예술제" },
  { value: 26, unit: "회", label: "정기 춤판" },
];

export default function Home() {
  usePageMeta({ image: mainImg });
  // 사업 + 교육을 상태 우선순위(모집중 → 진행중 → 예정 → 종료)로 섞어 3개 추천
  const featured = sortForFeature([
    ...business.map((item) => ({ item, to: `/business/${item.id}`, kind: "공연·행사" })),
    ...projects.map((item) => ({ item, to: `/projects/${item.id}`, kind: "교육" })),
  ].map((x) => ({ ...x, ...x.item }))).slice(0, 3);

  const latestNotices = [...notices]
    .sort((a, b) => b.notice_date.localeCompare(a.notice_date))
    .slice(0, 5);

  return (
    <>
      <NoticePopup />

      {/* 히어로 */}
      <section className="relative overflow-hidden bg-ink text-white">
        <img
          src={mainImg}
          alt="무궁화예술단 단원들의 공연 모습"
          className="absolute inset-0 h-full w-full object-cover object-top"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-ink/15" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/60 to-transparent" />
        <div className="container-site relative flex min-h-[440px] flex-col justify-center py-16 md:min-h-[560px]">
          <p className="font-sans text-xs font-semibold tracking-[0.18em] text-gold md:text-sm">
            1993년 창단 · 문화체육관광부 허가 사단법인
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[56px]">
            전통을 잇고,
            <br />
            미래를 여는 무궁화예술단
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            대구를 거점으로 한국춤 공연, 전국무용예술제, 전통문화예술 교육을 이어갑니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/business" className="btn-primary !px-6 !py-3 !text-base">
              공연·행사 보기
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded border border-white/60 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              교육 신청
            </Link>
          </div>
        </div>
      </section>

      {/* 소개 + 숫자 */}
      <section className="border-b border-line bg-surface-2/60">
        <div className="container-site grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-center md:py-12">
          <p className="m-0 max-w-prose text-base leading-relaxed text-ink md:text-lg">
            무궁화예술단은 전국무용예술제를 48회째 주최하고, 청소년·청년을 위한 전통문화예술
            교육과 한국춤 명상 지도자 과정을 운영하는 비영리 예술단체입니다.
          </p>
          <dl className="flex gap-8 md:gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="m-0 font-serif text-4xl font-bold leading-none text-primary tabular-nums">
                  {s.value}
                  <span className="ml-0.5 font-sans text-base font-medium text-ink-muted">
                    {s.unit}
                  </span>
                </dd>
                <dt className="mt-2 text-xs text-ink-muted">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 다가오는 공연과 교육 */}
      <section className="container-site pt-16 md:pt-20">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-bold md:text-3xl">다가오는 공연과 교육</h2>
          <div className="flex gap-4 text-sm">
            <Link to="/business" className="text-primary hover:underline">
              주요사업 전체 →
            </Link>
            <Link to="/projects" className="text-primary hover:underline">
              교육프로그램 전체 →
            </Link>
          </div>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((f) => (
            <li key={f.to}>
              <ProgramCard item={f.item} to={f.to} kind={f.kind} />
            </li>
          ))}
        </ul>
      </section>

      {/* 공지 + 문의 */}
      <section className="container-site grid gap-8 pt-16 md:grid-cols-[1.4fr_1fr] md:pt-20">
        <div>
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-2xl font-bold">공지사항</h2>
            <Link to="/notices" className="text-sm text-primary hover:underline">
              더 보기 →
            </Link>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {latestNotices.map((n) => (
              <li key={n.id}>
                <NoticeRow notice={n} compact />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between rounded-card bg-ink p-7 text-white md:p-8">
          <div>
            <p className="m-0 font-sans text-xs font-semibold tracking-[0.18em] text-gold">
              문의
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">공연 초청·교육 문의</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              공연 초청, 협연, 교육 프로그램과 자격 과정 신청, 후원에 관한 문의를 받습니다.
            </p>
          </div>
          <div className="mt-8">
            <a
              href={`tel:${ORG.phone.replace(/-/g, "")}`}
              className="flex items-center gap-2 font-sans text-2xl font-bold text-white hover:text-gold"
            >
              <PhoneOutlined className="text-lg" />
              {ORG.phone}
            </a>
            <Link
              to={CONTACT_LINK.to}
              className="mt-5 inline-flex items-center justify-center rounded bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-[#d4a93a]"
            >
              {CONTACT_LINK.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 공연 현장 */}
      <section className="container-site pt-16 md:pt-20">
        <h2 className="mb-6 text-2xl font-bold">공연 현장</h2>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {[photo1, photo2, photo3].map((src, i) => (
            <li
              key={src}
              className={`overflow-hidden rounded-card bg-surface-2 ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <img
                src={src}
                alt={`무궁화예술단 공연 사진 ${i + 1}`}
                className="aspect-[4/3] h-full w-full object-cover"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
