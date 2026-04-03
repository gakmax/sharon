import { apiUrl } from "./index";

export async function getNotices() {
  const res = await fetch(`${apiUrl}/notices`);
  if (!res.ok) throw new Error("공지사항 조회 실패");
  return res.json();
}
