import React, { useState } from "react";
import { Button, Card, Carousel, List } from "antd";
import { Link } from "react-router-dom";
import mainImg from "../assets/main.jpg";
import art_troupe from "../assets/art_troupe.png";
import business from "../assets/business.png";
import study from "../assets/study.png";
import Title from "antd/es/typography/Title";
import slider1 from "../assets/study.png";
import slider2 from "../assets/study.png";
import slider3 from "../assets/study.png";

export default function Home() {
  const [hovered, setHovered] = useState(null);
  const sliderImages = [slider1, slider2, slider3];

  const articles = [
    {
      id: 1,
      title: "2025 전통문화예술 교육 인재육성",
      date: "2025-10 ~ 2026.07",
      status: "진행중",
      link: "/projects/2025_1",
    },
    {
      id: 2,
      title: "김죽엽 25번째 전통춤판 '인연'",
      date: "2025-11-02",
      link: "/business/2025_1",
    },
    {
      id: 3,
      title: "제 48회 전국무용 '한맥' 예술제",
      date: "2026-03-29",
      link: "/business/2026_5",
    },
    {
      id: 4,
      title: "김죽엽 26번째 춤판 '한국춤과 명상무용'",
      date: "2026-09-28",
      link: "/business/2026_1",
    },
  ];

  const getDDay = (targetDate, status) => {
    if (status === "진행중") {
      return {
        text: "진행중",
        colorClass: "text-gray-500",
      };
    }
    const today = new Date();
    const end = new Date(targetDate);

    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let colorClass = "";
    if (diffDays < 0) colorClass = "text-green-500";
    else if (diffDays > 10) colorClass = "text-gray-500";
    else colorClass = "text-red-500";

    return {
      text: diffDays >= 0 ? `D-${diffDays}` : `D+${Math.abs(diffDays)}`,
      colorClass,
    };
  };

  const cards = [
    {
      title: "예술단 소개",
      content: "예술단 소개, 임원명단, 조직 정보를 확인하세요.",
      image: art_troupe,
      link: "/about/introduce",
    },
    {
      title: "주요사업",
      content: "2025 ~ 2026 주요사업 목록과 상세내용을 확인하세요.",
      image: business,
      link: "/business",
    },
    {
      title: "교육프로그램",
      content: "교육 프로그램 목록과 상세내용을 확인하세요.",
      image: study,
      link: "/projects",
    },
  ];

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <img
          src={mainImg}
          alt="메인 이미지"
          className="w-full h-[350px] md:h-[450px] object-cover brightness-90 max-w-[1400px] mx-auto"
          loading="lazy"
        />
        <div className="absolute inset-0 grid items-center justify-center">
          <Title
            level={2}
            style={{
              color: "white",
              padding: "30px",
              textAlign: "center",
              userSelect: "none",
            }}
            className="nanum-myeongjo-regular"
          >
            전통을 잇고, 미래를 여는 무궁화예술단
          </Title>
        </div>
      </div>

      <section className="my-16 max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 xl:w-2/5 mx-auto">
            <Carousel
              autoplay={{ dotDuration: true }}
              autoplaySpeed={5000}
              effect="scrollx"
              className="overflow-hidden rounded-sm"
              dots={true}
            >
              {sliderImages.map((img, idx) => (
                <div key={idx} className="h-64 md:h-80 lg:h-[340px]">
                  <img
                    src={img}
                    alt={`슬라이드 ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="flex-1 p-2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">최근 소식</h3>
            <List
              itemLayout="horizontal"
              dataSource={articles}
              renderItem={(item) => {
                const dDay = getDDay(item.date, item.status);
                return (
                  <List.Item
                    className="border-b border-gray-200 py-2 hover:bg-gray-50 transitio cursor-pointer"
                    onClick={() => (window.location.href = `${item.link}`)}
                  >
                    <List.Item.Meta
                      title={
                        <div className="flex justify-between items-center">
                          <Link
                            to={`/notices/${item.id}`}
                            className="text-gray-800 font-medium hover:text-blue-600"
                          >
                            {item.title}
                          </Link>
                          <span
                            className={`text-sm font-semibold ${dDay.colorClass}`}
                          >
                            {dDay.text}
                          </span>
                        </div>
                      }
                      description={
                        <span className="text-gray-500">{item.date}</span>
                      }
                    />
                  </List.Item>
                );
              }}
            />
          </div>
        </div>
      </section>

      <section className="mt-12 max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-0 overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            hoverable
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => {
              window.location.href = card.link;
            }}
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
