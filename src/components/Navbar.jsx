import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { NAV, CONTACT_LINK, ORG, PARTNERS, activeNavKey } from "../data/nav";
import logo from "../assets/logo.png";

const linkBase =
  "rounded px-3 py-2 text-[15px] font-medium transition-colors hover:text-primary";

function DesktopItem({ item, active }) {
  const cls = `${linkBase} ${active ? "text-primary" : "text-ink"}`;
  if (!item.children) {
    return (
      <Link to={item.to} className={cls} aria-current={active ? "page" : undefined}>
        {item.label}
      </Link>
    );
  }
  return (
    <div className="group relative">
      <Link to={item.to} className={cls} aria-haspopup="true">
        {item.label}
      </Link>
      <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="min-w-[160px] rounded-card border border-line bg-surface py-1.5 shadow-float">
          {item.children.map((child) => (
            <li key={child.to}>
              <Link
                to={child.to}
                className="block px-4 py-2 text-sm text-ink hover:bg-surface-2 hover:text-primary"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const active = activeNavKey(pathname);

  // 페이지 이동 시 모바일 메뉴 닫기
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-site flex h-full items-center justify-between gap-3 md:gap-6">
        <Link to="/" className="flex shrink-0 items-center" aria-label={`${ORG.name} 홈`}>
          <img src={logo} alt={ORG.name} className="h-6 w-auto md:h-8" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="주 메뉴">
          {NAV.map((item) => (
            <DesktopItem key={item.key} item={item} active={active === item.key} />
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          {/* 고객 요청: 국세청·문체부 마크는 헤더 우측 상단 고정 */}
          <ul className="flex items-center gap-2 md:gap-3" aria-label="관련 기관">
            {PARTNERS.map((p) => (
              <li key={p.name} className="flex">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex">
                  <img src={p.logo} alt={p.name} className="h-5 w-auto md:h-7" />
                </a>
              </li>
            ))}
          </ul>
          <Link to={CONTACT_LINK.to} className="btn-primary hidden !py-2 lg:inline-flex">
            {CONTACT_LINK.label}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded text-ink hover:bg-surface-2 md:hidden"
            aria-label="메뉴 열기"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MenuOutlined style={{ fontSize: 20 }} />
          </button>
        </div>
      </div>

      <Drawer
        title={ORG.shortName}
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        width={300}
        styles={{ body: { padding: "8px 0 24px" } }}
      >
        <nav aria-label="모바일 메뉴">
          <ul>
            {NAV.map((item) => (
              <li key={item.key} className="border-b border-line-soft">
                <Link
                  to={item.to}
                  className={`block px-6 py-3.5 text-base font-semibold ${
                    active === item.key ? "text-primary" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="pb-2">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to}
                          aria-current={pathname === child.to ? "page" : undefined}
                          className={`block px-6 py-2 pl-10 text-[15px] ${
                            pathname === child.to
                              ? "font-semibold text-primary"
                              : "text-ink-muted"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="px-6 pt-6">
            <Link to={CONTACT_LINK.to} className="btn-primary w-full">
              {CONTACT_LINK.label}
            </Link>
            <p className="mt-3 text-center text-sm text-ink-muted">
              전화 {ORG.phone}
            </p>
          </div>
        </nav>
      </Drawer>
    </header>
  );
}
