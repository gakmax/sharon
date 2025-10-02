import React from "react";
import { Layout, Menu, Timeline } from "antd";
import AboutLayout from "../../components/AboutLayout";
import traditional from "../../assets/traditional.png";

const { Sider, Content } = Layout;

const historyData = [
  {
    year: "1993년 1월",
    content: "무궁화예술단 창립",
    color: "grey",
  },
  {
    year: "1994년 8월",
    content: "사단법인 무궁화예술단 설립 (문화체육관광부 허가)",
    color: "grey",
  },
  {
    year: "1994년 8월",
    content: "법인 제1대 이사장 조화자 취임",
    color: "grey",
  },
  {
    year: "2000년 4월",
    content: "법인 정관 변경 (문화체육관광부 허가)",
    color: "grey",
  },
  {
    year: "2001년 7월",
    content: "법인 정관 변경 (문화체육관광부 허가)",
    color: "grey",
  },
  {
    year: "2025년 7월",
    content: "법인 제2대 이사장 김태연 취임",
    color: "grey",
  },
];

export default function History() {
  return (
    <AboutLayout>
      <Layout>
        <h2 className="text-2xl font-bold">연혁</h2>
        <Content className="bg-white">
          <Timeline
            mode="left"
            items={historyData.map((item, index) => ({
              color: item.color,
              label: <div className=" text-gray-700">{item.year}</div>,
              children: <p className="text-gray-800">{item.content}</p>,
            }))}
            className="py-6"
          />

          <div className="relative p-6 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{ backgroundImage: `url(${traditional})` }}
            ></div>

            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative text-white">
              <h3 className="text-xl font-bold mb-3">
                30년이 넘는 역사와 전통
              </h3>
              <p className="leading-relaxed">
                무궁화예술단은 1993년 창립 이래 한국 전통 예술의 계승과 발전을
                위해 끊임없이 노력해왔습니다.
                <br />
                문화체육관광부의 허가를 받은 사단법인으로서, 우리 문화의
                우수성을 국내외에 알리는 데 앞장서고 있습니다.
              </p>
            </div>
          </div>
        </Content>
      </Layout>
    </AboutLayout>
  );
}
