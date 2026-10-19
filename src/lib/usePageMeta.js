import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ORG } from "../data/nav";

const SITE_URL = "https://mugunghwa-art.com";
const DEFAULT_DESC =
  "사단법인 무궁화예술단 공식 홈페이지. 전통 예술 공연, 전국무용예술제, 교육 프로그램과 공지사항 안내.";

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith("link") ? "link" : "meta");
    const [, k, v] = selector.match(/\[(\w+(?::\w+)?)="([^"]+)"\]/);
    el.setAttribute(k, v);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/**
 * 라우트별 <title>, description, Open Graph, canonical을 갱신한다.
 * image는 import한 에셋 경로(상대/절대) 또는 외부 URL.
 */
export default function usePageMeta({ title, description, image } = {}) {
  const { pathname } = useLocation();
  useEffect(() => {
    const fullTitle = title ? `${title} | ${ORG.name}` : ORG.name;
    const desc = description || DEFAULT_DESC;
    const url = SITE_URL + pathname;
    const img = image ? new URL(image, window.location.origin).href : `${SITE_URL}/og-default.jpg`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', "content", desc);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", img);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('link[rel="canonical"]', "href", url);
  }, [title, description, image, pathname]);
}
