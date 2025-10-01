import React from "react";
import { Card, Layout, Menu, Table, Timeline } from "antd";
import AboutLayout from "../../components/AboutLayout";

const { Sider, Content } = Layout;

export default function Organization() {
  const members = [
    { position: "이사장/대표이사", name: "김태연", rank: "이사장" },
    { position: "이사", name: "김세화", rank: "이사" },
    { position: "이사", name: "김경옥" },
    { position: "이사", name: "박비송" },
    { position: "이사", name: "권기현" },
    { position: "이사", name: "김건태" },
    { position: "이사", name: "김혜숙" },
    { position: "감사", name: "박영주", rank: "감사" },
    { position: "감사", name: "김종성" },
  ];
  return (
    <AboutLayout>
      <Layout>
        <h2 className="text-2xl font-bold">조직도</h2>
        <Content className="bg-white ">
          <div className="space-y-12">
            <div>
              사단법인 무궁화예술단은 법인의 운영과 주요 의사 결정을 담당하는
              이사회와 감사로 구성된 투명하고 전문적인 조직 체계를 갖추고
              있습니다.
            </div>
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                조직 구조
              </h2>
            </section>
            {/* 임원 명단 */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                임원 명단
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {members.map((member, idx) => (
                  <React.Fragment key={idx}>
                    {member.rank && (
                      <div className="col-span-full my-4 border-b-[1.5px] pb-2 border-gray-300 text-gray-500 font-semibold">
                        {member.rank}
                      </div>
                    )}

                    <div className="p-4 rounded-lg border border-gray-200 shadow hover:shadow-lg transition transform hover:scale-105">
                      <span className="block text-sm text-gray-500 mb-1">
                        {member.position}
                      </span>
                      <span className="block text-lg font-semibold text-gray-800">
                        {member.name}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </section>
          </div>
        </Content>
      </Layout>
    </AboutLayout>
  );
}
