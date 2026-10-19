import React from "react";
import { Timeline } from "antd";
import AboutLayout from "../../components/AboutLayout";
import traditional from "../../assets/traditional.webp";

const historyData = [
  { year: "1993년 1월", content: "무궁화예술단 창립" },
  { year: "1994년 8월", content: "사단법인 무궁화예술단 설립 (문화체육관광부 허가)" },
  { year: "1994년 8월", content: "법인 제1대 이사장 조화자 취임" },
  { year: "2000년 4월", content: "법인 정관 변경 (문화체육관광부 허가)" },
  { year: "2001년 7월", content: "법인 정관 변경 (문화체육관광부 허가)" },
  { year: "2025년 7월", content: "법인 제2대 이사장 김죽엽(김태연) 취임" },
];

export default function History() {
  return (
    <AboutLayout>
      <Timeline
        mode="left"
        className="py-4"
        items={historyData.map((item) => ({
          color: "#8E2A48",
          label: <span className="font-sans tabular-nums text-ink-muted">{item.year}</span>,
          children: <p className="text-ink">{item.content}</p>,
        }))}
      />

      <div className="relative mt-6 overflow-hidden rounded-card">
        <img
          src={traditional}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative p-8 text-white md:p-10">
          <h2 className="mb-3 text-2xl font-bold text-white">30년이 넘는 역사와 전통</h2>
          <p className="max-w-prose leading-relaxed text-white/90">
            무궁화예술단은 1993년 창립 이래 한국 전통 예술의 계승과 발전을 위해 끊임없이
            노력해왔습니다. 문화체육관광부의 허가를 받은 사단법인으로서, 우리 문화의 우수성을
            국내외에 알리는 데 앞장서고 있습니다.
          </p>
        </div>
      </div>
    </AboutLayout>
  );
}
