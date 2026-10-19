// 온라인 신청서 정의. 공지(notices)나 사업(business) 데이터에 `apply: "<id>"`를 넣으면
// 상세 페이지에 "신청서 작성" 버튼이 생기고 /apply/<id> 로 연결된다.
export const applications = {
  "dance-festival-48": {
    id: "dance-festival-48",
    title: "제48회 전국무용예술제 참가 신청서",
    description:
      "참가자 정보, 부문·종목, 작품 정보와 사진을 4단계로 입력합니다. 입력 내용은 이 기기에 임시 저장됩니다.",
    backTo: "/notices",
    divisions: ["초등부", "중등부", "고등부", "신인부(대학)", "시니어부", "일반부", "명인부"],
    categories: [
      "한국전통",
      "한국창작",
      "발레클래식",
      "발레창작",
      "현대무용",
      "재즈댄스",
      "댄스스포츠",
      "에어로빅",
      "벨리댄스",
      "힙합댄스",
      "방송댄스",
      "라인댄스",
    ],
    photoRequired: true,
    maxFileMB: 10,
  },
};
