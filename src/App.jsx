import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
const Greeting = lazy(() => import("./pages/about/Greeting"));
const Introduce = lazy(() => import("./pages/about/Introduce"));
const Organization = lazy(() => import("./pages/about/Organization"));
const History = lazy(() => import("./pages/about/History"));
const Location = lazy(() => import("./pages/about/Location"));
const Business = lazy(() => import("./pages/Business"));
const BusinessDetail = lazy(() => import("./pages/BusinessDetail"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Notices = lazy(() => import("./pages/Notices"));
const NoticeDetail = lazy(() => import("./pages/NoticeDetail"));
const Resources = lazy(() => import("./pages/Resources"));
const Contact = lazy(() => import("./pages/Contact"));
const ApplyPage = lazy(() => import("./pages/ApplyPage"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));

const { Content } = Layout;

export default function App() {
  return (
    <Layout className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        본문 바로가기
      </a>
      <Navbar />
      {/* 고정 헤더 높이(64px)만큼 본문을 내린다 */}
      <Content id="main" style={{ paddingTop: 64 }}>
        <ScrollToTop />
        <Suspense fallback={<div className="container-site py-24 text-center text-ink-muted">불러오는 중…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<Navigate to="/about/greeting" replace />} />
          <Route path="/about/greeting" element={<Greeting />} />
          <Route path="/about/introduce" element={<Introduce />} />
          <Route path="/about/organization" element={<Organization />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/location" element={<Location />} />

          <Route path="/business" element={<Business />} />
          <Route path="/business/:id" element={<BusinessDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/notices/:id" element={<NoticeDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply/:formId" element={<ApplyPage />} />

          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </Content>
      <Footer />
    </Layout>
  );
}
