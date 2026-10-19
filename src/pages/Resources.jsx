import React from "react";
import { Table, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { resources } from "../data/resources";

export default function Resources() {
  const cols = [
    {
      title: "자료명",
      dataIndex: "name",
      key: "name",
      render: (name, r) => (
        <div>
          <div className="font-medium text-ink">{name}</div>
          {r.notice && (
            <Link to={r.notice} className="text-xs text-ink-muted hover:text-primary">
              관련 안내 보기 →
            </Link>
          )}
        </div>
      ),
    },
    { title: "형식", dataIndex: "type", key: "type", width: 80 },
    {
      title: "게시일",
      dataIndex: "date",
      key: "date",
      width: 120,
      className: "whitespace-nowrap text-ink-muted",
    },
    {
      title: "다운로드",
      key: "download",
      width: 130,
      render: (_, r) => (
        <Button
          href={"/" + encodeURI(r.file)}
          download={r.file}
          icon={<DownloadOutlined />}
        >
          내려받기
        </Button>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        title="자료실"
        description="참가 신청서, 결산·예산서 등 공개 자료를 내려받을 수 있습니다."
        breadcrumb={[{ label: "자료실" }]}
      />
      <div className="container-site py-10 md:py-14">
        {/* 모바일: 카드 목록 / 데스크톱: 표 */}
        <ul className="space-y-3 md:hidden">
          {resources.map((r) => (
            <li key={r.id} className="rounded-card border border-line bg-surface p-4">
              <div className="flex items-center gap-2 text-xs text-ink-muted">
                <span className="rounded border border-line px-1.5 py-0.5 font-semibold">{r.type}</span>
                <span className="tabular-nums">{r.date}</span>
              </div>
              <p className="mt-2 mb-0 font-medium text-ink">{r.name}</p>
              <div className="mt-3 flex items-center justify-between gap-3">
                {r.notice ? (
                  <Link to={r.notice} className="text-xs text-ink-muted hover:text-primary">
                    관련 안내 보기 →
                  </Link>
                ) : (
                  <span />
                )}
                <Button
                  href={"/" + encodeURI(r.file)}
                  download={r.file}
                  icon={<DownloadOutlined />}
                  size="small"
                >
                  내려받기
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Table dataSource={resources} columns={cols} rowKey="id" pagination={false} />
        </div>
        <p className="mt-4 text-sm text-ink-muted">
          ※ HWP 파일은 한글 프로그램 또는 한컴오피스 뷰어로 열 수 있습니다.
        </p>
      </div>
    </>
  );
}
