import React from "react";
import { Layout, Menu, Timeline } from "antd";
import AboutLayout from "../../components/AboutLayout";

const { Sider, Content } = Layout;

export default function Greeting() {
  return (
    <AboutLayout>
      <Layout>
        <h2 className="text-2xl font-bold">인사말</h2>
        <Content className="bg-white">인사말</Content>
      </Layout>
    </AboutLayout>
  );
}
