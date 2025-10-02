import React from "react";
import { Layout } from "antd";
import AboutLayout from "../../components/AboutLayout";
import profile from "../../assets/profile.png";

const { Content } = Layout;

export default function Greeting() {
  return (
    <AboutLayout>
      <Layout>
        <h2 className="text-2xl font-bold mb-6">인사말</h2>
        <Content className="bg-white p-6 rounded-lg shadow">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 사진 영역 */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={profile}
                  alt="이사장 김죽엽(김태연)"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </div>

            {/* 텍스트 영역 */}
            <div className="w-full lg:w-2/3 text-gray-800 space-y-4 leading-relaxed">
              <p>안녕하세요. 사단법인 무궁화 예술단 이사장 김태연입니다.</p>
              <p>
                무궁화 예술단은 1994년 창단 이래, 한국의 전통예술을 지키고
                계승하며, 동시에 시대와 함께 호흡하는 새로운 창작 활동을 꾸준히
                펼쳐왔습니다. 저희는 예술을 단순한 공연의 차원을 넘어, 사람과
                사람을 잇는 다리이자 세대와 문화를 이어주는 통로라고 믿습니다.
              </p>
              <p>
                오늘날 급변하는 사회 속에서도 우리의 전통은 여전히 큰 울림을
                지니고 있습니다. 무궁화 예술단은 이러한 전통의 가치를 지켜내는
                동시에, 현대적인 감각과 창의적 해석을 더해 미래세대가 공감할 수
                있는 예술로 확장시키고자 합니다. 이는 지역과 세계를 아우르는
                문화 교류와 융합의 장을 마련하고, 더 많은 시민들이 문화예술을
                향유할 수 있도록 하기 위한 노력의 일환입니다.
              </p>
              <p>
                앞으로도 저희 무궁화 예술단은 공연, 교육, 연구, 사회공헌 활동을
                통해 지역 사회와 함께 성장하며, 예술을 통해 모두가 행복을 나누는
                공동체를 만들어가겠습니다. 특히 청소년과 청년들이 전통문화예술을
                접하고 배우며, 미래의 예술 인재로 성장할 수 있도록 체계적인 교육
                프로그램과 인재 양성 사업을 더욱 강화해 나가겠습니다.
              </p>
              <p>
                무궁화 예술단이 걸어온 길은 혼자가 아닌, 많은 분들의 관심과
                후원이 있었기에 가능했습니다. 앞으로도 지역민과 예술인, 그리고
                함께하는 모든 분들의 든든한 동반자가 될 것을 약속드립니다.
              </p>
              <p>
                사단법인 무궁화 예술단이 만들어갈 새로운 내일에 따뜻한 응원과
                격려를 부탁드립니다.
              </p>
              <p className="text-center nanum-myeongjo-regular text-xl">
                – 사단법인 무궁화 예술단 이사장 김태연 –
              </p>
            </div>
          </div>
        </Content>
      </Layout>
    </AboutLayout>
  );
}
