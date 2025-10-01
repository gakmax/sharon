import React, { useState } from "react";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import mainImg from "../assets/main.jpg";
import art_troupe from "../assets/art_troupe.png";
import business from "../assets/business.png";
import study from "../assets/study.png";
import Title from "antd/es/typography/Title";

export default function Home() {
  const [hovered, setHovered] = useState(null);

  const cards = [
    {
      title: "예술단 소개",
      content: "예술단 소개, 임원명단, 조직 정보를 확인하세요.",
      image: art_troupe,
    },
    {
      title: "주요사업",
      content: "2025 ~ 2026 주요사업 목록과 상세내용을 확인하세요.",
      image: business,
    },
    {
      title: "교육프로그램",
      content: "교육 프로그램 목록과 상세내용을 확인하세요.",
      image: study,
    },
  ];

  return (
    <>
      {/* 메인 이미지 */}
      <div className="relative w-full overflow-hidden">
        <img
          src={mainImg}
          alt="메인 이미지"
          className="w-full h-[350px] md:h-[450px] object-cover brightness-90 max-w-[1400px] mx-auto"
        />
        <div className="absolute inset-0 grid items-center justify-center">
          <Title
            level={2}
            style={{ color: "white", padding: "30px", textAlign: "center" }}
            className="nanum-myeongjo-regular"
          >
            전통을 잇고, 미래를 여는 무궁화예술단
          </Title>
        </div>
      </div>

      {/* 카드 섹션 */}
      <section className="mt-12 max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-0 overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            hoverable
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`
              relative
              flex-1
              transition-all duration-300 ease-in-out
              ${
                hovered === index
                  ? "md:flex-[1.2] flex-[1] scale-x-100 z-10"
                  : "flex-[1] scale-95"
              }
              shadow-lg
              text-center
              cursor-pointer
              py-16
              w-full
              overflow-hidden
            `}
            bodyStyle={{ padding: 0 }}
          >
            {/* 배경 이미지 */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>

            <div className="relative z-10 p-4 bg-black bg-opacity-40">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {card.title}
              </h3>
            </div>

            <div
              className={`
                absolute inset-0 text-white flex items-center justify-center p-4 mt-28
                transition-opacity
                ${
                  hovered === index
                    ? "duration-1000 opacity-100"
                    : "duration-0 opacity-0"
                }
              `}
            >
              <p className="text-sm md:text-sm">{card.content}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
