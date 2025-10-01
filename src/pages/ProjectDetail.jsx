import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "antd";
import { projects } from "../data/projects";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { projectsContent } from "../data/projects_content";

export default function ProjectDetail() {
  const { id } = useParams();
  const currentId = id;

  const p = projects.find((x) => x.id === currentId);
  const c = projectsContent.find((x) => x.id === currentId);
  if (!p || !c) return <div>프로젝트를 찾을 수 없습니다.</div>;

  // 정렬 (연도 + id 기준)
  const sorted = [...projects].sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return a.id.localeCompare(b.id);
  });
  const idx = sorted.findIndex((x) => x.id === currentId);

  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">교육 프로그램</h1>
      <Card className="p-4">
        <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
        <div className="space-y-0 text-gray-700 border-b-[1px] mb-4 pb-4">
          <p className="mb-0">
            <span className="font-semibold">대상:</span> {p.target}
          </p>
          <p>
            <span className="font-semibold">기간:</span> {p.duration}
          </p>
        </div>

        {/* 내용 */}

        {/* Prev/Next */}
        <div>{c.content}</div>
        <div className="border-t pt-4 space-y-3">
          {prev && (
            <Link
              to={`/projects/${prev.id}`}
              className="block text-gray-700 hover:text-blue-600"
            >
              <UpOutlined className="mr-2" />
              {prev.title}
            </Link>
          )}
          {next && (
            <Link
              to={`/projects/${next.id}`}
              className="block text-gray-700 hover:text-blue-600"
            >
              <DownOutlined className="mr-2" />
              {next.title}
            </Link>
          )}
        </div>
      </Card>

      {/* 목록 버튼 */}
      <div className="mt-4 float-right">
        <Button type="default">
          <Link to="/projects">목록</Link>
        </Button>
      </div>
    </div>
  );
}
