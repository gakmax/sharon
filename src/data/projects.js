import edu2025 from "../assets/program/edu_2025.webp"
import edu2026 from "../assets/program/edu_2026.webp"
import certi2025 from "../assets/program/certi_2025.webp"
import certi2026 from "../assets/program/certi_2026.webp"

// startDate/endDate(YYYY-MM-DD)로 상태를 계산한다. 원문이 "예정"인 항목은 status를 명시.
export const projects = [
  {
    id: "2025_2",
    year: 2025,
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    title: "전통문화예술 교육프로그램 개발",
    image: edu2025,
    target: "청소년·청년",
    duration: "2025년도 프로그램 개발",
  },
  {
    id: "2025_1",
    year: 2025,
    startDate: "2025-10-01",
    endDate: "2026-09-30",
    title: "전통문화예술 교육 인재육성",
    image: certi2025,
    target: "청소년·청년",
    duration: "2025.10~2026.09",
  },
  {
    id: "2026_2",
    year: 2026,
    startDate: "2026-09-01",
    endDate: "2026-12-31",
    status: "예정",
    title: "전통문화예술 교육프로그램 개발 및 운영",
    image: edu2026,
    target: "청소년·청년",
    duration: "2026.09 예정",
  },
  {
    id: "2026_1",
    year: 2026,
    startDate: "2026-09-01",
    endDate: "2026-12-31",
    status: "예정",
    title: "전통문화예술·한국춤 명상댄스 지도사 자격증 과정",
    image: certi2026,
    target: "청소년·청년",
    duration: "2026.09 예정",
  },
];
