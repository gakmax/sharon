import React, { useEffect, useState } from "react";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import AboutLayout from "../../components/AboutLayout";
import { ORG } from "../../data/nav";

const MAP = { timestamp: "1759299831881", key: "a3aoha7r6hq" };
const q = encodeURIComponent(ORG.address);
const DIRECTIONS = [
  { label: "카카오맵에서 길찾기", url: `https://map.kakao.com/link/search/${q}` },
  { label: "네이버 지도에서 길찾기", url: `https://map.naver.com/v5/search/${q}` },
];

export default function Location() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // 로더 스크립트는 index.html에서 동기 로드된다. Lander가 준비될 때까지 잠깐 기다렸다가 그린다.
    let tries = 0;
    const timer = setInterval(() => {
      const Lander = window.daum?.roughmap?.Lander;
      if (typeof Lander === "function") {
        clearInterval(timer);
        new Lander({ timestamp: MAP.timestamp, key: MAP.key, mapWidth: "640", mapHeight: "360" }).render();
      } else if (++tries > 50) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ORG.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.getSelection()?.selectAllChildren(document.getElementById("org-address"));
    }
  };

  return (
    <AboutLayout>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="overflow-x-auto rounded-card border border-line bg-surface p-2">
          <div
            id={`daumRoughmapContainer${MAP.timestamp}`}
            className="root_daum_roughmap root_daum_roughmap_landing mx-auto"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-bold">법인 주사무실</h2>
            <p id="org-address" className="mt-1 text-ink">
              {ORG.address}
            </p>
            <button type="button" onClick={copyAddress} className="btn-secondary mt-2 !px-3 !py-1.5 !text-xs">
              {copied ? <CheckOutlined /> : <CopyOutlined />}
              {copied ? "복사됨" : "주소 복사"}
            </button>
          </div>

          <div>
            <h2 className="text-lg font-bold">길찾기</h2>
            <ul className="mt-2 space-y-2">
              {DIRECTIONS.map((d) => (
                <li key={d.url}>
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-card border border-line bg-surface px-4 py-3 text-sm text-ink transition-colors hover:border-primary hover:text-primary"
                  >
                    {d.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold">전화</h2>
            <a
              href={`tel:${ORG.phone.replace(/-/g, "")}`}
              className="mt-1 inline-block font-sans text-lg font-semibold text-ink hover:text-primary"
            >
              {ORG.phone}
            </a>
          </div>
        </div>
      </div>
    </AboutLayout>
  );
}
