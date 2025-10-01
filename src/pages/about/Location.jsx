import React, { useEffect } from "react";
import { Layout } from "antd";
import AboutLayout from "../../components/AboutLayout";

const { Content } = Layout;

export default function Location() {
  useEffect(() => {
    // 스크립트가 이미 로드되었는지 확인
    const loadScript = () => {
      if (!window.daum) {
        const script = document.createElement("script");
        script.src =
          "https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js";
        script.charset = "UTF-8";
        script.onload = renderMaps;
        document.body.appendChild(script);
      } else {
        renderMaps();
      }
    };

    const renderMaps = () => {
      // 첫 번째 지도
      // new window.daum.roughmap.Lander({
      //   timestamp: "1759299831881",
      //   key: "a3aoha7r6hq",
      //   mapWidth: "640",
      //   mapHeight: "360",
      // }).render();

      // 두 번째 지도
      new window.daum.roughmap.Lander({
        timestamp: "1759300557575",
        key: "x98ctpct45w",
        mapWidth: "100%",
        mapHeight: "100%",
      }).render();
    };

    loadScript();
  }, []);

  return (
    <AboutLayout>
      <Layout>
        <h2 className="text-2xl font-bold">오시는 길</h2>
        <Content className="bg-white">
          <div className="my-8">
            <h3 className="text-xl font-semibold mb-2">무궁화예술단 위치</h3>
            {/* <div
              id="daumRoughmapContainer1759299831881"
              className="root_daum_roughmap root_daum_roughmap_landing"
            ></div> */}
            <div
              id="daumRoughmapContainer1759300557575"
              className="root_daum_roughmap root_daum_roughmap_landing"
              style={{ width: "100%" }}
            ></div>
            <div className="flex gap-1 mt-4">
              <div className="text-gray-500">법인주사무실:</div>
              <div>경남 양산시 동면 금산리 763 훼밀리타운 상가 1호</div>
            </div>
          </div>
        </Content>
      </Layout>
    </AboutLayout>
  );
}
