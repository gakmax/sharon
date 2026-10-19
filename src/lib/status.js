// 사업·교육·공지의 상태와 분류를 한 곳에서 정의한다. 배지 색과 문구는 여기만 바꾸면 된다.

export const STATUS = {
  recruiting: { label: "모집중", tone: "primary", order: 0 },
  ongoing: { label: "진행중", tone: "gold", order: 1 },
  upcoming: { label: "예정", tone: "gold", order: 2 },
  ended: { label: "종료", tone: "muted", order: 3 },
};

const LABEL_TO_KEY = Object.fromEntries(
  Object.entries(STATUS).map(([key, v]) => [v.label, key])
);

export const NOTICE_CATEGORIES = {
  모집: { tone: "primary" },
  행사: { tone: "gold" },
  소식: { tone: "gold" },
  공시: { tone: "outline" },
  안내: { tone: "outline" },
};

export function todayISO(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** item.status(문구)가 있으면 우선, 없으면 startDate/endDate로 계산 */
export function getStatusKey(item, today = todayISO()) {
  if (item.status && LABEL_TO_KEY[item.status]) return LABEL_TO_KEY[item.status];
  const start = item.startDate;
  const end = item.endDate ?? item.startDate;
  if (!start) return "ended";
  if (today < start) return "upcoming";
  if (today > end) return "ended";
  return "ongoing";
}

export function daysUntil(dateISO, today = todayISO()) {
  const a = new Date(`${dateISO}T00:00:00`);
  const b = new Date(`${today}T00:00:00`);
  return Math.round((a - b) / 86400000);
}

/** 홈 추천용 정렬: 모집중 → 진행중 → 예정(가까운 순) → 종료(최근 순) */
export function sortForFeature(items, today = todayISO()) {
  return [...items].sort((a, b) => {
    const ka = getStatusKey(a, today);
    const kb = getStatusKey(b, today);
    if (STATUS[ka].order !== STATUS[kb].order) return STATUS[ka].order - STATUS[kb].order;
    const da = a.startDate ?? "";
    const db = b.startDate ?? "";
    return ka === "ended" ? db.localeCompare(da) : da.localeCompare(db);
  });
}
