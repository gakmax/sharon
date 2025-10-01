import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "antd";
import { notices } from "../data/noticedata";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

export default function NoticeDetail() {
  const { id } = useParams();
  const currentId = parseInt(id, 10);

  const n = notices.find((x) => parseInt(x.id, 10) === currentId);
  if (!n) return <div>공지사항을 찾을 수 없습니다.</div>;

  const sorted = [...notices].sort(
    (a, b) => parseInt(a.id, 10) - parseInt(b.id, 10)
  );
  const idx = sorted.findIndex((x) => parseInt(x.id, 10) === currentId);

  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">공지사항</h1>
      <Card className="p-2">
        <h2 className="text-2xl font-bold mb-2">{n.title}</h2>
        <p className="text-sm text-gray-500 mb-4">{n.date}</p>
        <div className="mb-6">{n.content}</div>

        <div className="border-t pt-4 space-y-3">
          {prev && (
            <Link
              to={`/notices/${prev.id}`}
              className="block text-gray-700 hover:text-blue-600"
            >
              <UpOutlined className="mr-2" />
              {prev.title}
            </Link>
          )}
          {next && (
            <Link
              to={`/notices/${next.id}`}
              className="block text-gray-700 hover:text-blue-600"
            >
              <DownOutlined className="mr-2" />
              {next.title}
            </Link>
          )}
        </div>
      </Card>
      <div className="mt-4 float-right">
        <Button type="default">
          <Link to="/notices">목록</Link>
        </Button>
      </div>
    </div>
  );
}
