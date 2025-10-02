import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/about/History";
import Business from "./pages/Business";
import ProjectDetail from "./pages/ProjectDetail";
import BusinessDetail from "./pages/BusinessDetail";
import Resources from "./pages/Resources";
import Notices from "./pages/Notices";
import NoticeDetail from "./pages/NoticeDetail";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import TopImages from "./components/TopImages";
import Greeting from "./pages/about/Greeting";
import Location from "./pages/about/Location";
import ScrollToTop from "./components/ScrollToTop";
import Organization from "./pages/about/Organization";
import Introduce from "./pages/about/Introduce";
import Projects from "./pages/Projects";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

const { Content } = Layout;

export default function App() {
  return (
    <Layout className="min-h-screen bg-white">
      <Navbar />
      <Content style={{ paddingTop: 64 }}>
        <div className="">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />

            <Route
              path="/about"
              element={
                <TopImages>
                  <About />
                </TopImages>
              }
            />
            <Route
              path="/about/history"
              element={
                <TopImages>
                  <History />
                </TopImages>
              }
            />
            <Route
              path="/about/introduce"
              element={
                <TopImages>
                  <Introduce />
                </TopImages>
              }
            />
            <Route
              path="/about/greeting"
              element={
                <TopImages>
                  <Greeting />
                </TopImages>
              }
            />
            <Route
              path="/about/location"
              element={
                <TopImages>
                  <Location />
                </TopImages>
              }
            />
            <Route
              path="/about/organization"
              element={
                <TopImages>
                  <Organization />
                </TopImages>
              }
            />
            <Route
              path="/business"
              element={
                <TopImages>
                  <Business />
                </TopImages>
              }
            />
            <Route
              path="/business/:id"
              element={
                <TopImages>
                  <BusinessDetail />
                </TopImages>
              }
            />
            <Route
              path="/business"
              element={
                <TopImages>
                  <Business />
                </TopImages>
              }
            />
            <Route
              path="/projects/:id"
              element={
                <TopImages>
                  <ProjectDetail />
                </TopImages>
              }
            />
            <Route
              path="/projects"
              element={
                <TopImages>
                  <Projects />
                </TopImages>
              }
            />
            <Route
              path="/resources"
              element={
                <TopImages>
                  <Resources />
                </TopImages>
              }
            />
            <Route
              path="/notices"
              element={
                <TopImages>
                  <Notices />
                </TopImages>
              }
            />
            <Route
              path="/notices/:id"
              element={
                <TopImages>
                  <NoticeDetail />
                </TopImages>
              }
            />
            <Route
              path="/contact"
              element={
                <TopImages>
                  <Contact />
                </TopImages>
              }
            />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>© 사단법인 무궁화예술단</Footer>
    </Layout>
  );
}
