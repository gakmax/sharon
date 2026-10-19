import React, { useState } from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import kdmsImg from "../assets/notice/kdms-1.webp";

// 팝업 설정: endDate(포함) 이후에는 자동으로 노출되지 않음
const POPUP = {
  key: "kdms-2026",
  endDate: "2027-12-31",
  link: "/notices/13",
};

const HIDE_KEY = `popup-hide-${POPUP.key}`;

const today = () => {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
};

const shouldShow = () => {
  if (today() > POPUP.endDate) return false;
  try {
    return localStorage.getItem(HIDE_KEY) !== today();
  } catch {
    return true;
  }
};

export default function NoticePopup() {
  const [open, setOpen] = useState(shouldShow);
  const navigate = useNavigate();

  const hideToday = () => {
    try {
      localStorage.setItem(HIDE_KEY, today());
    } catch {}
    setOpen(false);
  };

  const goNotice = () => {
    setOpen(false);
    navigate(POPUP.link);
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      centered
      width={380}
      styles={{ content: { padding: 0, overflow: "hidden", borderRadius: 12 } }}
    >
      <div
        className="px-6 pt-8 pb-6 text-center bg-gradient-to-b from-primary-soft/70 to-surface cursor-pointer"
        onClick={goNotice}
      >
        <span className="inline-block px-3 py-1 text-xs font-semibold text-primary border border-primary/30 rounded-full bg-surface">
          민간자격 과정 수강생 모집
        </span>
        <h2 className="mt-4 font-serif text-2xl font-bold leading-snug text-ink">
          <span className="text-primary">한국춤 명상전문사</span>
          <br />
          (KDMS) 수강생 모집
        </h2>
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-primary opacity-60 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
          </span>
          상시 모집 중 · 언제든 신청 가능
        </p>
        <img
          src={kdmsImg}
          alt="한국춤 명상전문사 교육 가치"
          className="w-48 h-48 mx-auto my-4 object-contain"
        />
        <button
          type="button"
          className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-card bg-primary text-white text-base font-semibold shadow-float transition-all duration-200 hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
        >
          모집 공지 자세히 보기
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 transition-transform duration-200 group-hover:translate-x-1">
            <HiArrowRight className="w-4 h-4" />
          </span>
        </button>
      </div>
      <div className="flex text-sm text-ink-muted border-t border-line">
        <button
          type="button"
          onClick={hideToday}
          className="flex-1 py-3 hover:bg-surface-2"
        >
          오늘 하루 보지 않기
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="flex-1 py-3 border-l border-line hover:bg-surface-2"
        >
          닫기
        </button>
      </div>
    </Modal>
  );
}
