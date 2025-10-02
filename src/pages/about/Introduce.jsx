import React from "react";
import { Layout } from "antd";
import AboutLayout from "../../components/AboutLayout";

import taegeukgi from "../../assets/taegeukgi.png";
import purpose from "../../assets/purpose.png";

const { Content } = Layout;

export default function Introduce() {
  return (
    <AboutLayout>
      <h2 className="text-2xl font-bold">예술단 소개</h2>
      <Layout className="min-h-screen bg-gray-50">
        <Content className="mx-auto space-y-16">
          <section className="relative rounded-lg p-10 shadow-lg transform overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-100"
              style={{ backgroundImage: `url(${purpose})` }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-r from-white to-indigo-50/70"></div>

            <div className="relative">
              <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-1 h-7 bg-blue-600 mr-4 rounded"></span>
                설립 목적
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                본 법인은{" "}
                <span className="font-semibold text-blue-700">
                  예술문화의 발전과 선양
                </span>
                을 위하여 노력하는 자질있는 인재를 발굴하고, 후진양성과 국내·외
                예술문화 진흥을 위하여 최선의 노력을 경주하여 활동함을 목적으로
                합니다.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-10 shadow-lg">
            <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="w-1 h-7 bg-blue-600 mr-4 rounded"></span>
              우리의 비전
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎭",
                  title: "문화예술 발전",
                  desc: "국내외 예술문화 교류를 통한 문화예술 생태계 활성화",
                },
                {
                  icon: "🌟",
                  title: "인재 발굴",
                  desc: "예술적 재능을 가진 신인 발굴 및 체계적인 지원",
                },
                {
                  icon: "📚",
                  title: "후진 양성",
                  desc: "전통문화예술 교육을 통한 차세대 예술가 육성",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-md hover:scale-105 transform transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-10 shadow-lg">
            <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="w-1 h-7 bg-purple-600 mr-4 rounded"></span>
              주요 사업
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🌏",
                  title: "국내·외 예술문화 교류",
                  desc: "글로벌 네트워크 구축을 통한 예술문화 교류 활성화 및 국제적 문화 협력 증진",
                },
                {
                  icon: "💝",
                  title: "예술문화 선양 및 공익 기여",
                  desc: "사회적 가치 실현을 위한 다양한 문화예술 프로그램 운영 및 지역사회 발전 기여",
                },
                {
                  icon: "⭐",
                  title: "신인 발굴 및 지원",
                  desc: "재능있는 예술인을 조기에 발굴하고 체계적인 성장 기회와 다양한 지원 제공",
                },
                {
                  icon: "🎓",
                  title: "후진 양성 프로그램",
                  desc: "체계적인 교육 커리큘럼을 통한 차세대 예술인 육성 및 멘토링 시스템 운영",
                },
                {
                  icon: "🎵",
                  title: "정기 연주회 및 발표회",
                  desc: "정기적인 공연 기회 제공을 통한 실전 경험 축적 및 주관·후원 활동 전개",
                },
                {
                  icon: "🏛️",
                  title: "전통문화예술 교육",
                  desc: "전통문화예술 교육프로그램 개발 및 우리 문화유산 계승을 위한 인재 양성",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
                >
                  <div className="text-4xl mb-4 text-center">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2 text-center text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative mt-12 bg-gradient-to-r from-blue-600 to-red-300 rounded-xl p-10 text-white text-center overflow-hidden">
            <div
              className="absolute inset-0 opacity-20 bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: `url(${taegeukgi})` }}
            ></div>

            <p className="relative text-xl md:text-xl font-semibold leading-relaxed">
              예술문화의 미래를 만들어가는
              <br />
              <span className="font-extrabold text-xl md:text-2xl mt-4">
                든든한 동반자
              </span>
              가 되겠습니다.
            </p>
          </section>
        </Content>
      </Layout>
    </AboutLayout>
  );
}
