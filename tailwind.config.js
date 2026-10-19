/** @type {import('tailwindcss').Config} */
// 디자인 토큰: 한지·먹 바탕에 무궁화 단심(primary)과 로고 금색(gold)만 강조색으로 사용한다.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F3EC",
        surface: { DEFAULT: "#FFFFFF", 2: "#EFEBE2" },
        ink: { DEFAULT: "#1E1B18", muted: "#6B645C" },
        primary: { DEFAULT: "#8E2A48", hover: "#75203B", soft: "#F3E3E8" },
        gold: { DEFAULT: "#B8902F", deep: "#7A5E14", soft: "#F4EBD3" },
        line: { DEFAULT: "#DCD5C9", soft: "#E8E2D8" },
      },
      fontFamily: {
        sans: [
          '"Pretendard Variable"',
          "Pretendard",
          '"Noto Sans KR"',
          '"Apple SD Gothic Neo"',
          '"Malgun Gothic"',
          "system-ui",
          "sans-serif",
        ],
        serif: ['"Noto Serif KR"', '"Nanum Myeongjo"', "Georgia", "serif"],
      },
      maxWidth: { site: "1120px", prose: "720px" },
      borderRadius: { card: "8px" },
      boxShadow: { float: "0 8px 24px rgba(30, 27, 24, 0.12)" },
    },
  },
  plugins: [],
};
