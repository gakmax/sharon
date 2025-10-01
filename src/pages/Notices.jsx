import React from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { notices } from "../data/noticedata";
import group from "../assets/group.png";

export default function Notices() {
  const navigate = useNavigate();
  const reversedNotices = [...notices].reverse();

  const cols = [
    {
      title: "번호",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: (id, record, index) => reversedNotices.length - index,
    },
    {
      title: "제목",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "작성일",
      dataIndex: "notice_date",
      key: "notice_date",
      width: 120,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold">공지사항</h2>
      <Table
        dataSource={reversedNotices}
        columns={cols}
        rowKey="id"
        pagination={false}
        onRow={(record) => ({
          onClick: () => navigate(`/notices/${record.id}`),
          style: { cursor: "pointer" },
        })}
      />
    </div>
  );
}
