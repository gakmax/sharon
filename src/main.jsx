import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import koKR from "antd/locale/ko_KR";
import App from "./App";
import "antd/dist/reset.css";
import "./index.css";

// Tailwind 토큰(tailwind.config.js)과 같은 값을 antd에도 주입한다.
const theme = {
  token: {
    colorPrimary: "#8E2A48",
    colorLink: "#8E2A48",
    colorLinkHover: "#75203B",
    colorText: "#1E1B18",
    colorTextSecondary: "#6B645C",
    colorBorder: "#DCD5C9",
    colorBorderSecondary: "#E8E2D8",
    colorBgLayout: "#F6F3EC",
    borderRadius: 4,
    fontFamily:
      '"Pretendard Variable", Pretendard, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif',
  },
  components: {
    Button: { fontWeight: 600 },
    Card: { borderRadiusLG: 8 },
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider theme={theme} locale={koKR}>
    <Router>
      <App />
    </Router>
  </ConfigProvider>
);
