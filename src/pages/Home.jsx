import React, { useState } from 'react'
import { Button, Card } from 'antd'
import { Link } from 'react-router-dom'
import mainImg from '../assets/main.jpg';
import art_troupe from '../assets/art_troupe.png';
import business from '../assets/business.png';
import study from '../assets/study.png';
import Title from 'antd/es/typography/Title';

export default function Home() {
  const [hovered, setHovered] = useState(null);

  const cards = [
    {
      title: "예술단 소개",
      content: "법인 소개, 임원명단, 조직 정보를 확인하세요.",
      image: art_troupe
    },
    {
      title: "주요사업",
      content: "2025 ~ 2026 주요사업 목록과 상세내용을 확인하세요.",
      image: business
    },
    {
      title: "교육프로그램",
      content: "교육 프로그램과 자료를 다운로드하고 열람하세요.",
      image: study
    }
  ];

  return (
    <>
      {/* 메인 이미지 */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-[-30px]">
        <img
          src={mainImg}
          alt="메인 이미지"
          className="max-w-[1280px] w-full object-cover h-[350px] brightness-90 mx-auto"
        />
        {/* <div className="absolute inset-0 grid items-center justify-center">
          <Title level={1} style={{color:"white"}} className="nanum-myeongjo-regular">
            사단법인 무궁화예술단
          </Title>
        </div> */}
      </div>

      {/* 법인 목적 강조 섹션 */}
      <section className="bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Link to="/about">
            <Button type="primary" size="large" className="mt-6">
              더 알아보기
            </Button>
          </Link>
        </div>
      </section>

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
              ${hovered === index ? "md:flex-[1.2] flex-[1] scale-x-100 z-10" : "flex-[1] scale-95"}
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
                ${hovered === index ? "duration-1000 opacity-100" : "duration-0 opacity-0"}
              `}
            >
              <p className="text-sm md:text-base">{card.content}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
