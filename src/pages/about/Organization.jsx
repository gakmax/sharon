import React from "react";
import { Card, Layout, Menu, Table, Timeline } from "antd";
import AboutLayout from "../../components/AboutLayout";
import organization from "../../assets/organization.png";

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
        <section>
          <div className="bg-white space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-4 h-4 bg-blue-600 inline-block rounded-sm"></span>
                조 직
              </h3>
              <p className="text-gray-700 ml-6">
                사단법인 무궁화예술단은 법인의 운영과 주요 의사 결정을 담당하는
                이사회와 감사로 구성된 투명하고 전문적인 조직 체계를 갖추고
                있습니다.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-400 inline-block rounded-full"></span>
                조직도
              </h4>
              <img
                src={organization}
                alt="NTS"
                className="cursor-pointer sm:w-full md:w-10/12 lg:w-8/12 justify-self-center mb-12"
                loading="lazy"
              />

              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-400 inline-block rounded-full"></span>
                이사회
              </h4>
              <div className="ml-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg shadow  transition transform ">
                  <span className="block text-sm text-gray-500 mb-1">
                    이사장 / 대표이사
                  </span>
                  <span className="block font-semibold text-gray-800">
                    김태연
                  </span>
                </div>
                {[
                  "김세화",
                  "김경옥",
                  "박비송",
                  "권기현",
                  "김건태",
                  "김혜숙",
                ].map((name) => (
                  <div
                    key={name}
                    className="p-4 bg-blue-50 rounded-lg shadow  transition transform "
                  >
                    <span className="block text-sm text-gray-500 mb-1">
                      이사
                    </span>
                    <span className="block font-semibold text-gray-800">
                      {name}
                    </span>
                  </div>
                ))}
                {["박영주", "김종성"].map((name) => (
                  <div
                    key={name}
                    className="p-4 bg-blue-50 rounded-lg shadow  transition transform "
                  >
                    <span className="block text-sm text-gray-500 mb-1">
                      감사
                    </span>
                    <span className="block font-semibold text-gray-800">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-3 h-3 bg-green-400 inline-block rounded-full"></span>
                사무국
              </h4>
              <div className="ml-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {["이사장: 김태연", "사무국장: 홍길동", "사무간사: 김민수"].map(
                  (role) => (
                    <div
                      key={role}
                      className="p-4 bg-green-50 rounded-lg shadow  transition transform "
                    >
                      <span className="block text-sm text-gray-500 mb-1">
                        {role.split(":")[0]}
                      </span>
                      <span className="block font-semibold text-gray-800">
                        {role.split(":")[1]}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </AboutLayout>
  );
}
