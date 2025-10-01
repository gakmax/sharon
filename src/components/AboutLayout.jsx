import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Sider, Content } = Layout;

export default function AboutLayout({ children }) {
  const location = useLocation();

  return (
    <Layout>
      <Sider
        width={200}
        className="hidden md:block mr-6"
        style={{ background: "#fff", borderRight: "1.5px solid #eee" }}
      >
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          style={{ borderRight: 0 }}
          items={[
            {
              key: "/about/greeting",
              label: <Link to="/about/greeting">인사말</Link>,
            },
            {
              key: "/about/introduce",
              label: <Link to="/about/introduce">예술단 소개</Link>,
            },
            {
              key: "/about/organization",
              label: <Link to="/about/organization">조직도</Link>,
            },
            {
              key: "/about/history",
              label: <Link to="/about/history">연혁</Link>,
            },
            {
              key: "/about/location",
              label: <Link to="/about/location">오시는길</Link>,
            },
          ]}
        />
      </Sider>
      <Content>{children}</Content>
    </Layout>
  );
}
