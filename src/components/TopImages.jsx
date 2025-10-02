import React from "react";
import group from "../assets/group.png";

export default function TopImages({ children }) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* 튀어나오는 배경 이미지 */}
      <div>
        <img
          src={group}
          alt="메인 이미지"
          loading="lazy"
          className="w-full h-[350px] md:h-[450px] object-cover brightness-90 max-w-[1400px] mx-auto object-[50%_30%]"
        />
      </div>

      {/* children 콘텐츠 */}
      <div className="relative z-10 mx-auto max-w-[1280px] mt-8 p-4">
        {children}
      </div>
    </div>
  );
}
