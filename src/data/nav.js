// 사이트 전역 상수: 메뉴, 법인 정보, 협력 기관. 헤더·푸터·소개 탭이 모두 이 파일을 읽는다.
import ntsLogo from "../assets/nts_big.png";
import mcstLogo from "../assets/mcst_big.webp";

export const ORG = {
  name: "사단법인 무궁화예술단",
  shortName: "무궁화예술단",
  representative: "김죽엽(김태연)",
  phone: "053-656-8966",
  address: "대구광역시 남구 명덕로34길 7, 2층 (대명동)",
  regNo: "621-82-11085",
  founded: 1993,
};

export const ABOUT_TABS = [
  { label: "인사말", to: "/about/greeting", description: "이사장 인사말" },
  {
    label: "예술단 소개",
    to: "/about/introduce",
    description: "설립 목적과 비전, 주요 사업 영역",
  },
  {
    label: "조직도",
    to: "/about/organization",
    description: "이사회와 사무국 구성",
  },
  {
    label: "연혁",
    to: "/about/history",
    description: "1993년 창립부터 오늘까지",
  },
  {
    label: "오시는 길",
    to: "/about/location",
    description: "법인 사무실 위치와 찾아오시는 방법",
  },
];

export const NAV = [
  { key: "/about", label: "소개", to: "/about/greeting", children: ABOUT_TABS },
  { key: "/business", label: "주요사업", to: "/business" },
  { key: "/projects", label: "교육프로그램", to: "/projects" },
  { key: "/notices", label: "공지사항", to: "/notices" },
  { key: "/resources", label: "자료실", to: "/resources" },
];

export const CONTACT_LINK = { label: "문의하기", to: "/contact" };

// 고객 요청: 두 기관 마크는 헤더 우측 상단에 항상 노출한다.
export const PARTNERS = [
  { name: "국세청", url: "https://www.nts.go.kr", logo: ntsLogo },
  { name: "문화체육관광부", url: "https://www.mcst.go.kr", logo: mcstLogo },
];

export function activeNavKey(pathname) {
  if (pathname === "/") return "/";
  return NAV.find((item) => pathname.startsWith(item.key))?.key ?? null;
}
