import React from "react";
import PageHeader from "../components/PageHeader";
import NoticeList from "../components/NoticeList";
import { notices } from "../data/noticedata";

// 공지 데이터는 당분간 정적 파일(noticedata.jsx)이 단일 소스. 백엔드 전환 시 notices만 서버 데이터로 교체.
export default function Notices() {
  return (
    <>
      <PageHeader
        title="공지사항"
        description="모집, 행사 안내, 경영 공시를 알려드립니다."
        breadcrumb={[{ label: "공지사항" }]}
      />
      <div className="container-site py-10 md:py-14">
        <NoticeList notices={notices} />
      </div>
    </>
  );
}
