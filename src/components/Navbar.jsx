import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, Drawer, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

import nts from "../assets/nts.png";
import mcst from "../assets/mcst.png";
import logo from "../assets/logo.png";

const { Header } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;

export default function Navbar() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const getSelectedKey = () => {
    const path = location.pathname;
    if (path.startsWith("/about")) return "/about";
    if (path.startsWith("/business")) return "/business";
    if (path.startsWith("/projects")) return "/projects";
    if (path.startsWith("/notices")) return "/notices";
    return "/";
  };

  const menuItems = [
    { key: "/", label: <Link className="text-[16px]" to="/">홈</Link> },
    {
      key: "/about",
      label: <Link className="text-[16px]" to="/about/greeting" >예술단 소개</Link>,
      children: [
        {
          key: "/about/greeting",
          label: <Link className="text-[16px]" to="/about/greeting">인사말</Link>,
        },
        {
          key: "/about/introduce",
          label: <Link className="text-[16px]" to="/about/introduce">예술단 소개</Link>,
        },
        {
          key: "/about/organization",
          label: <Link className="text-[16px]" to="/about/organization">조직도</Link>,
        },
        { key: "/about/history", label: <Link className="text-[16px]" to="/about/history">연혁</Link> },
        {
          key: "/about/location",
          label: <Link className="text-[16px]" to="/about/location">오시는길</Link>,
        },
      ],
    },
    { key: "/business", label: <Link className="text-[16px]" to="/business">주요사업</Link> },
    { key: "/projects", label: <Link className="text-[16px]" to="/projects">교육프로그램</Link> },
    // { key: "/resources", label: <Link className="text-[16px]" to="/resources">자료실</Link> },
    { key: "/notices", label: <Link className="text-[16px]" to="/notices">공지사항</Link> },
    // { key: "/contact", label: <Link className="text-[16px]" to="/contact">문의하기</Link> },
  ];

  return (
    <Header
      className="header-shadow fixed top-0 left-0 right-0 z-50"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        background: "white",
        color: "black",
        boxShadow: "rgb(113 113 113) 0px 0px 4px 1px",
      }}
    >
<div className="flex items-center mr-4 shrink-0">
  <img
    src={logo}
    alt="logo"
    className="
      cursor-pointer
      h-8 md:h-10 lg:h-12   /* 화면 크기에 따라 높이 변경 */
      w-auto
      max-h-[10vh]         /* 세로 길이가 화면 높이의 10% 넘지 않게 */
    "
    onClick={() => (window.location.href = "/")}
    loading="lazy"
  />
</div>


      <div style={{ flex: 1 }}>
        {!isMobile && (
          <Menu
            mode="horizontal"
            selectedKeys={[getSelectedKey()]}
            style={{
              background: "transparent",
              borderBottom: "none",
              justifyContent: "center",
            }}
          >
            {menuItems.map((item) => {
              if (item.children) {
                return (
                  <SubMenu key={item.key} title={item.label}>
                    {item.children.map((sub) => (
                      <Menu.Item key={sub.key}>{sub.label}</Menu.Item>
                    ))}
                  </SubMenu>
                );
              }
              return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
            })}
          </Menu>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={nts}
          alt="NTS"
          className="cursor-pointer w-full max-w-[70px] aspect-square nts-logo"
          onClick={() => window.open("https://www.nts.go.kr", "_blank")}
          loading="lazy"
        />
        <img
          src={mcst}
          alt="MCST"
          className="cursor-pointer w-full max-w-[90px] aspect-square nts-logo"
          onClick={() => window.open("https://www.mcst.go.kr", "_blank")}
          loading="lazy"
        />
        {isMobile && (
          <>
            <Button
              type="text"
              icon={<MenuOutlined style={{ color: "black", fontSize: 20 }} />}
              onClick={() => setVisible(true)}
            />
            <Drawer
              title="메뉴"
              placement="right"
              onClose={() => setVisible(false)}
              open={visible}
            >
              <Menu
                mode="inline"
                selectedKeys={[location.pathname]}
                style={{ borderInlineEnd: "none" }}
                onClick={() => setVisible(false)}
              >
                {menuItems.map((item) => {
                  if (item.children) {
                    return (
                      <Menu.SubMenu
                        key={item.key}
                        title={item.label}
                        triggerSubMenuAction="click"
                      >
                        {item.children.map((sub) => (
                          <Menu.Item key={sub.key}>{sub.label}</Menu.Item>
                        ))}
                      </Menu.SubMenu>
                    );
                  }
                  return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
                })}
              </Menu>
            </Drawer>
          </>
        )}
      </div>
    </Header>
  );
}
