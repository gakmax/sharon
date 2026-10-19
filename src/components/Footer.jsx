import React from "react";
import { Link } from "react-router-dom";
import { NAV, CONTACT_LINK, ORG, PARTNERS } from "../data/nav";
import logo from "../assets/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-line bg-surface-2/70 text-sm">
      <div className="container-site grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-block" aria-label={`${ORG.name} 홈`}>
            <img src={logo} alt={ORG.name} className="h-8 w-auto" loading="lazy" />
          </Link>
          <dl className="mt-5 space-y-1.5 text-ink-muted">
            <div className="flex gap-3">
              <dt className="w-14 shrink-0">대표</dt>
              <dd>{ORG.representative}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-14 shrink-0">고유번호</dt>
              <dd>{ORG.regNo}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-14 shrink-0">소재지</dt>
              <dd>{ORG.address}</dd>
            </div>
          </dl>
        </div>

        <nav aria-label="사이트맵">
          <h2 className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-ink-muted">
            메뉴
          </h2>
          <ul className="space-y-2">
            {NAV.map((item) => (
              <li key={item.key}>
                <Link to={item.to} className="text-ink hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to={CONTACT_LINK.to} className="text-ink hover:text-primary">
                {CONTACT_LINK.label}
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-ink-muted">
            연락처
          </h2>
          <a
            href={`tel:${ORG.phone.replace(/-/g, "")}`}
            className="font-sans text-xl font-semibold text-ink hover:text-primary"
          >
            {ORG.phone}
          </a>
          <p className="mt-1 text-ink-muted">공연 초청 · 교육 신청 · 후원 문의</p>
          <Link to="/about/location" className="mt-2 inline-block text-primary hover:underline">
            오시는 길 →
          </Link>
          <ul className="mt-6 flex items-center gap-5" aria-label="관련 기관">
            {PARTNERS.map((p) => (
              <li key={p.name}>
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-7 w-auto opacity-80 transition-opacity hover:opacity-100"
                    loading="lazy"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-2 py-4 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {ORG.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-ink">
              이용약관
            </Link>
            <Link to="/privacy" className="hover:text-ink">
              개인정보처리방침
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
