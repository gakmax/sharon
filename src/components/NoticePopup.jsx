import React, { useState } from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import kdmsImg from "../assets/notice/kdms-1.png";

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

  const goToNotice = () => {
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
      styles={{
        content: { padding: 0, overflow: "hidden", borderRadius: 20 },
      }}
    >
      <div
        className="px-6 pt-8 pb-6 text-center bg-gradient-to-b from-blue-50 to-white cursor-pointer"
        onClick={goToNotice}
      >
        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-300 rounded-full bg-white">
          민간자격 과정 수강생 모집
        </span>
        <h2 className="mt-4 text-2xl font-bold leading-snug text-gray-900">
          <span className="text-blue-700">한국춤 명상전문사</span>
          <br />
          (KDMS) 수강생 모집
        </h2>
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gray-600">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-blue-400 opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-blue-600" />
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
          className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white text-base font-semibold shadow-lg shadow-blue-600/30 transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
        >
          모집 공지 자세히 보기
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 transition-transform duration-200 group-hover:translate-x-1">
            <HiArrowRight className="w-4 h-4" />
          </span>
        </button>
      </div>
      <div className="flex text-sm text-gray-500 border-t border-gray-200">
        <button
          type="button"
          onClick={hideToday}
          className="flex-1 py-3 hover:bg-gray-50"
        >
          오늘 하루 보지 않기
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="flex-1 py-3 border-l border-gray-200 hover:bg-gray-50"
        >
          닫기
        </button>
      </div>
    </Modal>
  );
}
