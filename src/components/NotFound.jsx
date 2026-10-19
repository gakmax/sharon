import React from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../lib/usePageMeta";

export default function NotFound() {
  usePageMeta({ title: "페이지를 찾을 수 없습니다" });
  return (
    <div className="container-site py-24 text-center md:py-32">
      <p className="font-sans text-xs font-semibold tracking-[0.3em] text-ink-muted">404</p>
      <h1 className="mt-3 text-3xl font-bold md:text-4xl">찾으시는 페이지가 없습니다</h1>
      <p className="mt-3 text-ink-muted">주소가 바뀌었거나 삭제된 페이지일 수 있습니다.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn-primary">
          홈으로
        </Link>
        <Link to="/notices" className="btn-secondary">
          공지사항
        </Link>
        <Link to="/contact" className="btn-secondary">
          문의하기
        </Link>
      </div>
    </div>
  );
}
