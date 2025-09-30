import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left space-y-1">
          <p>📞 사무국 : 이사장, 사무국장, 사무간사 (010-3877-4351)</p>
          <p>📍 소재지 : 대구시 남구 명덕로34길 7, 2층</p>
        </div>

        {/* 우측 저작권 */}
        <div className="text-center md:text-right text-sm space-y-1">
          <p>Copyright ⓒ 2025 사단법인 무궁화예술단 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
