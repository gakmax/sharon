import React from "react";

import image401 from "../assets/notice/40-1.jpg";
import image402 from "../assets/notice/40-2.jpg";
import image403 from "../assets/notice/40-3.jpg";

import image411 from "../assets/notice/41-1.jpg";
import image412 from "../assets/notice/41-2.jpg";

import image421 from "../assets/notice/42-1.jpg";
import image422 from "../assets/notice/42-2.jpg";
import image423 from "../assets/notice/42-3.jpg";
import image424 from "../assets/notice/42-4.jpg";

import image431 from "../assets/notice/43-1.jpg";
import image432 from "../assets/notice/43-2.jpg";

import image441 from "../assets/notice/44-1.jpg";
import image442 from "../assets/notice/44-2.jpg";

import image451 from "../assets/notice/45-1.png";
import image452 from "../assets/notice/45-2.png";
import image453 from "../assets/notice/45-3.png";

import image461 from "../assets/notice/46-1.jpg";
import image462 from "../assets/notice/46-2.jpg";

import image471 from "../assets/notice/47-1.jpg";
import image472 from "../assets/notice/47-2.jpg";

import image481 from "../assets/notice/48-1.jpg";
import image482 from "../assets/notice/48-2.jpg";
import image483 from "../assets/notice/48-3.jpg";

import image111 from "../assets/notice/대상수상/1.jpg";
import image112 from "../assets/notice/대상수상/2.jpg";
import image113 from "../assets/notice/대상수상/3.jpg";
import image114 from "../assets/notice/대상수상/4.jpg";

import imageKdms1 from "../assets/notice/kdms-1.png";

import { BsFile } from "react-icons/bs";

export const notices = [
  {
    id: "1",
    title: "제40회 전국무용예술제 안내",
    notice_date: "2018-01-28",
    date: (
      <div className="flex border-b-[1px] mb-4 pb-4">
        <div className="text-gray-400 mr-1">관리자 | </div>
        <div className="text-gray-400">2018-01-28</div>
      </div>
    ),
    content: (
      <>
        <img src={image403} className="mx-auto" loading="lazy" />
        <img src={image401} className="mx-auto" loading="lazy" />
        <img src={image402} className="mx-auto" loading="lazy" />
      </>
    ),
  },
  {
    id: "2",
    title: "제41회 전국무용예술제 안내",
    notice_date: "2019-01-31",
    date: (
      <div className="flex border-b-[1px] mb-4 pb-4">
        <div className="text-gray-400 mr-1">관리자 | </div>
        <div className="text-gray-400">2019-01-31</div>
      </div>
    ),
    content: (
      <>
        <img src={image411} className="mx-auto" loading="lazy" />
        <img src={image412} className="mx-auto" loading="lazy" />
      </>
    ),
  },
  {
    id: "3",
    title: "제42회 전국무용예술제 안내",
    notice_date: "2020-02-05",
    date: (
      <div className="flex border-b-[1px] mb-4 pb-4">
        <div className="text-gray-400 mr-1">관리자 | </div>
        <div className="text-gray-400">2020-02-05</div>
      </div>
    ),
    content: (
      <>
        <img src={image421} className="mx-auto" loading="lazy" />
        <img src={image422} className="mx-auto" loading="lazy" />
        <img src={image423} className="mx-auto" loading="lazy" />
        <img src={image424} className="mx-auto" loading="lazy" />
      </>
    ),
  },
  {
    id: "4",
    title: "제43회 전국무용예술제 안내",
    notice_date: "2021-03-25",
    date: (
      <div className="flex border-b-[1px] mb-4 pb-4">
        <div className="text-gray-400 mr-1">관리자 | </div>
        <div className="text-gray-400">2021-03-25</div>
      </div>
    ),
    content: (
      <>
        <img src={image431} className="mx-auto" loading="lazy" />
        <img src={image432} className="mx-auto" loading="lazy" />
      </>
    ),
  },
  {
    id: "5",
    title: "제44회 전국무용예술제 안내",
    notice_date: "2022-02-18",
    date: (
      <div className="flex border-b-[1px] mb-4 pb-4">
        <div className="text-gray-400 mr-1">관리자 | </div>
        <div className="text-gray-400">2022-02-18</div>
      </div>
    ),
    content: (
      <>
        <img src={image441} className="mx-auto" loading="lazy" />
        <img src={image442} className="mx-auto" loading="lazy" />
      </>
    ),
  },
  {
    id: "6",
    title: "제45회 전국무용예술제 안내",
    notice_date: "2023-02-09",
    date: (
      <div className="flex border-b-[1px] mb-4 pb-4">
        <div className="text-gray-400 mr-1">관리자 | </div>
        <div className="text-gray-400">2023-02-09</div>
      </div>
    ),
    content: (
      <>
        <img src={image451} className="mx-auto" loading="lazy" />
        <img src={image452} className="mx-auto" loading="lazy" />
        <img src={image453} className="mx-auto" loading="lazy" />
      </>
    ),
  },
  {
    id: "7",
    title: "제46회 전국무용예술제 안내",
    notice_date: "2024-02-31",
    date: (
      <div className="flex border-b-[1px] mb-4 pb-4">
        <div className="text-gray-400 mr-1">관리자 | </div>
        <div className="text-gray-400">2024-02-31</div>
      </div>
    ),
    content: (
      <>
        <img src={image461} className="mx-auto" loading="lazy" />
        <img src={image462} className="mx-auto" loading="lazy" />
      </>
    ),
  },
  {
    id: "8",
    title: "제47회 전국무용예술제 안내",
    notice_date: "2025-03-03",
    date: (
      <div className="flex border-b-[1px] mb-4 pb-4">
        <div className="text-gray-400 mr-1">관리자 | </div>
        <div className="text-gray-400">2025-03-03</div>
      </div>
    ),
    content: (
      <>
        <img src={image471} className="mx-auto" loading="lazy" />
        <img src={image472} className="mx-auto" loading="lazy" />
      </>
    ),
  },
  {
    id: "9",
    title: "2024결산서, 2025예산서 및 기부금모금실적공개",
    notice_date: "2025-10-10",
    date: (
      <div className="flex border-b-[1px] mb-4 pb-4">
        <div className="text-gray-400 mr-1">관리자 | </div>
        <div className="text-gray-400">2025-10-10</div>
      </div>
    ),
    content: (
      <>
        <p className="mb-4">
          「상속세 및 증여세법 시행령」 제39조 제5항 및 「기부금품의 모집 및
          사용에 관한 법률」 제14조에 따라 2024년도 결산서, 2025년도 예산서 및
          기부금 모금실적을 다음과 같이 공개합니다.
        </p>

        <p className="mb-4">
          본 자료는 투명한 재정 운영과 책임 있는 기부금 집행을 위해
          작성되었으며, 세부 내용은 첨부파일을 통해 확인하실 수 있습니다.
        </p>

        <a
          href="/2024결산서, 2025예산서및 기부금모금실적공개계획(홈페이지 게시용).hwp"
          download
          className="text-blue-500 underline"
        >
          2024결산서, 2025예산서 및 기부금모금실적공개계획(홈페이지 게시용).hwp
        </a>

        <p className="mt-6 text-gray-500 text-sm">
          ※ 첨부파일은 한글(.hwp) 문서 형식으로 제공됩니다.
        </p>
      </>
    ),
  },
  {
    id: "11",
    title:
      "[수상 소식] 대한민국 예술인상 대상 (예술공헌부문) 수상의 영예를 안았습니다.",
    notice_date: "2026-03-18",
    date: (
      <div className="flex border-b-[1px] mb-4 pb-4">
        <div className="text-gray-400 mr-1">관리자 | </div>
        <div className="text-gray-400">2026-03-18</div>
      </div>
    ),
    content: (
      <>
        <img src={image111} className="mx-auto" loading="lazy" />
        <img src={image114} className="mx-auto" loading="lazy" />
        <img src={image112} className="mx-auto" loading="lazy" />
        <img src={image113} className="mx-auto" loading="lazy" />

        <p>안녕하세요. 무궁화예술단입니다.</p>

        <p>오늘은 저희에게 너무나 뜻깊고 기쁜 소식을 전해드리고자 합니다.</p>

        <p>
          도전한국인운동협회가 주최하는 대한민국 예술인상은 매년 창조적인 예술
          활동으로 문화예술 발전에 크게 기여한 예술가에게 수여하는 권위 있는
          상입니다. 특히 무궁화예술단이 받은 ‘예술공헌부문’은 평생을 예술에
          헌신하며 뚜렷한 족적을 남긴 예술인에게 주어지는 상이라 그 의미가 더욱
          남다릅니다.
        </p>

        <p>
          이 모든 것은 그동안 저희의 행보를 묵묵히 응원해 주시고 사랑해 주신
          여러분 덕분입니다. 여러분의 성원이 없었다면 불가능했을 일입니다.
          진심으로 고개 숙여 감사드립니다.
        </p>

        <p>
          이번 수상을 계기 삼아, 앞으로도 초심을 잃지 않고 대한민국 문화예술의
          발전과 깊이를 위해 더욱 정진하는 무궁화예술단이 되겠습니다.
        </p>

        <p>감사합니다.</p>
      </>
    ),
  },
  {
    id: "12",
    title: "제 48회 전국무용예술제 수상내역",
    notice_date: "2026-04-01",
    date: (
      <div className="flex border-b-[1px] mb-4 pb-4">
        <div className="text-gray-400 mr-1">관리자 | </div>
        <div className="text-gray-400">2026-04-01</div>
      </div>
    ),
    content: (
      <>
        <h2>제48회 전국무용예술제 결과 공고</h2>

        <p>
          사단법인 무궁화예술단이 주최·주관한{" "}
          <strong>제48회 전국무용예술제</strong>가 여러분의 참여와 응원으로
          성황리에 마무리되었습니다. 본 대회는 신진 예술인 발굴과 인재 육성을
          목표로 진행되었으며, 다양한 부문에서 우수한 인재들이 열띤 경연을
          펼쳤습니다.
        </p>

        <blockquote
          style={{
            borderLeft: "5px solid #ccc",
            paddingLeft: "15px",
            color: "#555",
          }}
        >
          새로운 이사장님의 취임 후 시간적 여유가 없어 급하게 진행되었음에도
          많은 격려와 응원을 보내주심에 감사드립니다. 참가자 전원의 노력과
          성장을 격려하기 위해 <strong>전원 수상 방식</strong>으로 운영되었으며,
          이를 통해 무용/예술계의 미래를 응원합니다.
        </blockquote>

        <p>
          ※ 본 공지에는 특상 수상자까지 표기되며, 전체 수상 여부는 첨부파일을
          확인해 주시기 바랍니다.
        </p>

        <hr />

        <h3>■ 제48회 전국무용예술제 시상 내역</h3>

        <h4>[대상] 한국전통/창작무용</h4>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
            border: "1px solid #ddd",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>부문</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>훈격</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                수상자
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                명인부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                국회의장상
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                장요한
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                일반부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                경남도지사상
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                주홍희
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                신인부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                대구시의회의장상
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                김가령, 김소미, 김하영, 이시온
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                시니어부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                국회의원상
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                이옥자, 김영애, 정령화, 윤희숙, 강심리
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                학생부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                대구시장상
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                이혁준
              </td>
            </tr>
          </tbody>
        </table>

        <br />

        <h4>[특상]</h4>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
            border: "1px solid #ddd",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>종목</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>부문</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>훈격</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                수상자
              </th>
            </tr>
          </thead>
          <tbody>
            {/* --- 대상 --- */}
            <tr>
              <td
                rowSpan={5}
                style={{ border: "1px solid #ddd", padding: "8px" }}
              >
                대상
                <br />
                (한국전통/창작무용)
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                명인부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                국회의장상
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                장요한
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                일반부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                경남도지사상
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                주홍희
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                신인부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                대구시의회의장상
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                김가령, 김소미, 김하영, 이시온
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                시니어부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                국회의원상
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                이옥자, 김영애, 정령화, 윤희숙, 강심리
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                학생부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                대구시장상
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                이혁준
              </td>
            </tr>

            {/* --- 특상: 한국무용 --- */}
            <tr>
              <td
                rowSpan={7}
                style={{ border: "1px solid #ddd", padding: "8px" }}
              >
                한국무용
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                명인부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                국회의원상
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                문미애, 강순명, 황영미, 남경화, 김경란, 김차미
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                일반부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                대구시의회의장상
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                추미경
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                신인부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>-</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                권지은
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                시니어부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>-</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                박연희, 최외자, 김명례, 김도연, 한영미, 김진옥
              </td>
            </tr>
            <tr>
              <td
                rowSpan={3}
                style={{ border: "1px solid #ddd", padding: "8px" }}
              >
                학생부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                서울예술총연합회 회장상
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                김규호
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                국회의원상
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                박시원, 오연서
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>-</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                박채연, 최재은, 박정현, 김소율
              </td>
            </tr>

            {/* --- 특상: 실용무용 --- */}
            <tr>
              <td
                rowSpan={2}
                style={{ border: "1px solid #ddd", padding: "8px" }}
              >
                실용무용
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                일반부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>-</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                박경현
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                학생부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>-</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                진서연, 신소윤, 우서현, 김태은, 김유희
              </td>
            </tr>

            {/* --- 특상: 현대무용 --- */}
            <tr>
              <td
                rowSpan={2}
                style={{ border: "1px solid #ddd", padding: "8px" }}
              >
                현대무용
              </td>
              <td
                rowSpan={2}
                style={{ border: "1px solid #ddd", padding: "8px" }}
              >
                학생부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                서울예술총연합회 회장상
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                하연주
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>-</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                황라온, 정체윤, 김서우, 박은율
              </td>
            </tr>

            {/* --- 특상: 발레클래식 --- */}
            <tr>
              <td
                rowSpan={2}
                style={{ border: "1px solid #ddd", padding: "8px" }}
              >
                발레클래식
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                일반부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>-</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                이하은
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                학생부
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>-</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                정다경
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: "20px", textAlign: "center" }}>
          <strong>
            수상하신 모든 참가자분들께 진심으로 축하의 말씀을 올립니다.
            <br />
            멋진 기량으로 대회를 빛내주셔서 다시 한번 감사드립니다.
          </strong>
        </p>

        <a
          href="/2026년 제48회 전국무용예술제 수상내역.pdf"
          download
          className="text-blue-500 underline"
        >
          2026년 제48회 전국무용예술제 수상내역.pdf
        </a>
      </>
    ),
  },
  {
    id: "13",
    title: "[모집] 한국춤 명상전문사(KDMS) 자격 과정 수강생 모집",
    notice_date: "2026-10-13",
    date: (
      <div className="flex border-b-[1px] mb-4 pb-4">
        <div className="text-gray-400 mr-1">관리자 | </div>
        <div className="text-gray-400">2026-10-13</div>
      </div>
    ),
    content: (
      <div className="space-y-8 leading-relaxed">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">한국춤 명상전문사</h2>
          <p className="text-gray-500">K-Dance Meditation Specialist (KDMS)</p>
          <p className="text-gray-500">
            민간자격 등록번호 제 2026-005504 호
          </p>
          <p className="mt-4">
            내 몸을 움직이고 호흡하면서 마음을 쉬게 하는 시간
          </p>
          <p className="text-xl font-bold">자격 과정 수강생 모집</p>
          <p className="mt-4 text-lg">
            춤으로 몸을 깨우고
            <br />
            호흡으로 마음을 바라보다
          </p>
          <p className="text-gray-600">
            한국 춤의 명상무를 기반으로 한
            <br />
            한국춤명상전문사 민간자격 교육과정
          </p>
        </div>

        <section>
          <h3 className="text-lg font-bold mb-2">● 자격정보</h3>
          <table className="w-full border-collapse text-sm">
            <tbody>
              <tr>
                <th className="border p-2 bg-gray-50 w-1/3">자격명</th>
                <td className="border p-2">한국춤 명상 전문사</td>
              </tr>
              <tr>
                <th className="border p-2 bg-gray-50">자격구분(민간자격)</th>
                <td className="border p-2">한국직업능력연구원 등록 민간자격</td>
              </tr>
              <tr>
                <th className="border p-2 bg-gray-50">등록번호</th>
                <td className="border p-2">2026-005504</td>
              </tr>
              <tr>
                <th className="border p-2 bg-gray-50">자격관리기관</th>
                <td className="border p-2">
                  사단법인 무궁화예술단
                  <br />
                  한국춤 명상 총연합회
                  <br />
                  주무관청: 문화체육관광부
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">● 문의</h3>
          <p>한국춤 명상 총연합회 010-2523-0002</p>
          <p>대표 김태연 010-3877-4351</p>
          <p>홈페이지(사단법인 무궁화예술단)</p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-bold mb-2">
            ● 한국춤 명상 전문사(KDMS)란?
          </h3>
          <p className="font-semibold">춤과 명상이 만나는 새로운 전통예술교육</p>
          <p className="text-gray-500">
            A mindful movement practice rooted in Korean traditional dance
          </p>
          <p>한국춤을 기반으로 한 마음챙김 움직임 수련</p>
          <p>K-댄스와 한국전통과 명상이 만나는 깊은 울림</p>
          <p>
            한국춤 명상 전문사는 한국춤의 靜中動(정중동) · 動中靜(동중정)
            움직임과 호흡, 리듬과 여백, 그리고 정중동(靜中動)의 미학을 바탕으로
            한국정신 문화와 한국춤, 명상을 함께 탐구, 지도하는 전문역량을
            함양하는 교육과정.
          </p>
          <p>
            춤을 통해 몸을 인식하고, (Move the Body)
            <br />
            호흡을 통해 마음을 가다듬으며 (Breathe the Mind)
            <br />
            움직임을 통해 본연의 자아를 느껴보는 시간 (Connect the Spirit)
          </p>
          <p>
            한국춤 명상 전문사는 한국정신 문화와 한국춤의 아름다움과 명상의
            가치를 현대적으로 연결.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-bold mb-2">● 한국춤과 명상무</h3>
          <p>
            한국춤을 보여주는 것에서 → 한국춤으로 몸과 마음을 변화시키는
            방법으로 세계에 전하는 것
          </p>
          <p>
            힐링, 스트레스 완화, 마음의 안정(마음챙김), 자기돌봄, 집중, 몸의
            감각
          </p>
          <p>
            한국춤이 지닌 호흡과 여백, 곡선의 움직임, 장단의 흐름, 신체 중심의
            이동과 정중동의 미학을 바탕으로 한국 정신문화와 음양의 조화로
            명상적 움직임을 경험하고 미학적 탐구.
          </p>
          <p>
            단순히 춤을 추는 것을 넘어, 몸의 감각을 깨우고 호흡과 움직임을
            연결하며 자신의 내면에 집중하고 몸과 마음의 조화를 탐구하는 자연과
            인간의 균형적 조화의 시간을 추구하는 한국춤 기반의 움직임·명상 교육.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-bold mb-2">● 교육의 가치</h3>
          <p className="font-semibold">한국춤 × 명상 × 한국전통문화</p>
          <p>
            한국춤의 기본을 기반으로 한 명상무 교육을 통해 전통예술의 새로운
            활용 가능성을 모색.
          </p>
          <img
            src={imageKdms1}
            alt="한국춤 명상의 다섯 가지 순환 가치"
            className="mx-auto max-w-md w-full"
            loading="lazy"
          />
          <ul className="space-y-1">
            <li>
              <strong>TRADITION(전통)</strong> - 한국전통문화와 한국춤의 정신과
              움직임을 이해하고 계승합니다.
            </li>
            <li>
              <strong>BREATH(호흡)</strong> - 움직임과 호흡의 연결을
              경험합니다.
            </li>
            <li>
              <strong>MEDITATION(명상)</strong> - 움직임을 통한 마음의 집중으로
              자신을 바라보고, 자연과 음양의 조화(balance), 나와 타인, 자연과
              인간의 연결(connection)로 균형적 조화의 시간을 갖습니다.
            </li>
            <li>
              <strong>EDUCATION(교육)</strong> - 전문적인 이론과 실기를 통해
              교육역량을 키웁니다.
            </li>
            <li>
              <strong>EXPANSION(확장)</strong> - 전통예술의 새로운 가능성을
              만들어갑니다.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-bold mb-2">● 교육과정</h3>
          <p className="font-semibold">이론교육 + 실기집중교육</p>
          <div>
            <p className="font-semibold">STEP 01. 이론교육</p>
            <p>
              온라인 교육으로 한국춤 명상 전문사의 이론적 기반을 학습합니다.
            </p>
            <p>
              한국춤의 이해, 명상의 이해, 한국춤 명상 프로그램론, 지도자 윤리 및
              상담 등 과목 수강
            </p>
            <p>교육 형태: 온라인 영상 이론교육</p>
          </div>
          <div>
            <p className="font-semibold">STEP 02. 실기 집중연수</p>
            <p>
              한국춤의 움직임과 호흡, 명상무의 실제 표현과 실기교육을 집중적으로
              학습합니다.
            </p>
            <p>
              교육생 간 실기 교류와 집중교육을 통해 한국춤 명상전문사로서 필요한
              기본적인 실기역량을 함양합니다.
            </p>
          </div>
          <div>
            <p className="font-semibold">STEP 03. 자격시험</p>
            <p>
              교육과정을 이수한 응시자를 대상으로 정해진 절차에 따라 자격시험을
              실시합니다.
            </p>
            <p>
              필기 및 실기 평가의 세부 사항은 최종 교육과정 및 운영 규정에 따라
              안내합니다.
            </p>
          </div>
          <div>
            <p className="font-semibold">
              STEP 04. 실기시험 불합격 또는 실기 전 보충 수업 원할 시
            </p>
            <p>
              해당 강의자에게 개인 교습 및 별도 교육 신청 가능 (비용 별도 발생,
              선택사항)
            </p>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-bold mb-2">● 교육 커리큘럼</h3>
          <p className="font-semibold">이론교육</p>
          <ol className="list-decimal pl-6">
            <li>한국춤의 이해</li>
            <li>명상의 이해</li>
            <li>한국춤명상 프로그램론</li>
            <li>지도자 윤리 및 상담</li>
          </ol>
          <p className="font-semibold">실기교육</p>
          <ol className="list-decimal pl-6">
            <li>한국춤명상무 기본 실기 (한국춤 기본기 포함)</li>
            <li>명상 지도 능력</li>
            <li>
              프로그램 구성 (약 40~50분)
              <br />
              고요무(묵언명상, 태아 명상) - 깨움무(향 명상, 음악 명상) -
              정화무(비움털기) - 쉼무(한국춤 명상무용) - 여운무 - 회귀무
            </li>
            <li>지도 태도</li>
          </ol>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-bold mb-2">● 응시자격</h3>
          <ol className="list-decimal pl-6">
            <li>고등학교 졸업 이상</li>
            <li>20세 이상</li>
            <li>
              사단법인 무궁화예술단에서 정한 한국춤 명상전문사 교육과정 이수자
            </li>
          </ol>
          <p className="text-gray-500 text-sm">
            (한국춤을 전공하지 않았더라도 교육과정의 취지와 요건에 부합하는
            분들이 참여할 수 있도록 운영합니다.)
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-bold mb-2">● 자격 취득 절차</h3>
          <p>
            교육 신청 (전화 신청) → 실기 집중연수 (8회, 10시~4시) → 온라인
            교육과정 이수 (이론) → 이론 자격시험 응시 → 실기 평가 → 합격 →
            전문사 자격증 취득
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-bold mb-2">● 교육비 및 장소</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border p-2 bg-gray-50">구분</th>
                <th className="border p-2 bg-gray-50">금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">교육비</td>
                <td className="border p-2 text-right">6,000,000원</td>
              </tr>
              <tr>
                <td className="border p-2">응시료</td>
                <td className="border p-2 text-right">50,000원</td>
              </tr>
              <tr>
                <td className="border p-2">자격증 발급비</td>
                <td className="border p-2 text-right">100,000원</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">합계</td>
                <td className="border p-2 text-right font-semibold">
                  6,150,000원
                </td>
              </tr>
            </tbody>
          </table>
          <ul className="list-disc pl-6">
            <li>교재비 무료(자료 제공), 소정의 수강 선물 제공</li>
            <li>국내 단체(10인 이상) 교육비 할인</li>
            <li>해외 단체(10인 이상) 혜택 및 관광 제공</li>
          </ul>
          <p className="font-semibold mt-4">교육장소</p>
          <ul className="list-disc pl-6">
            <li>온라인 영상 이론교육 (홈페이지에서 교육 진행)</li>
            <li>실기교육 - 서울, 대구 교육장 지정</li>
            <li>2일(토요일, 일요일) 4회 예정 (총 8회 수업)</li>
            <li>
              타지역 수강생 숙박 지원 / 해외 단체 수강생 숙식 제공 및 일정 지원
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-bold mb-2">● 이런 분께 권합니다</h3>
          <p>
            한국춤명상전문사 과정은 다음과 같은 분들에게 새로운 배움의 기회가 될
            수 있습니다.
          </p>
          <ul className="list-disc pl-6">
            <li>한국춤을 배우고 있는 분 (일반인)</li>
            <li>무용 및 전통예술 관련 종사자 (전문인)</li>
            <li>예술교육에 관심 있는 분</li>
            <li>명상과 움직임에 관심 있는 분</li>
            <li>전통문화교육 프로그램에 관심 있는 분</li>
            <li>자신의 예술적 영역을 확장하고 싶은 분</li>
            <li>춤과 명상을 접목한 교육을 연구하고 싶은 분</li>
            <li>한국전통문화의 새로운 가능성을 탐구하고 싶은 분</li>
          </ul>
          <p className="text-sm">
            * 본 자격증은 유효기간이 3년입니다. 3년마다 보수 교육(12시간 이상)
            수료 후 갱신이 가능합니다.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-bold mb-2">● 한국춤 명상 전문사의 미래</h3>
          <ul className="list-disc pl-6">
            <li>한국 춤의 미래지향적 사업의 일환</li>
            <li>공연예술의 영역을 넘어 다양한 분야로 확장</li>
            <li>전통의 가치를 현대와 연결하여 새로운 문화교육의 가능성 모색</li>
            <li>
              향후 교육과정의 발전으로 활동 가능성 확대
              <ul className="list-[circle] pl-6">
                <li>문화예술 교육기관</li>
                <li>평생교육원</li>
                <li>문화센터</li>
                <li>복지관</li>
                <li>각종 문화프로그램 (노인, 장애인, 청소년 등)</li>
                <li>지역 문화예술 정서적 치유 프로그램</li>
                <li>명상, 움직임 기반 힐링 프로그램 운영</li>
              </ul>
            </li>
          </ul>
          <div className="text-sm text-gray-500 space-y-1">
            <p>
              ※ 구체적인 자격 활용 범위 및 활동 분야는 자격관리기관의 운영
              규정에 따라 결정됩니다.
            </p>
            <p>
              ※ 본 자격은 의료 행위, 심리상담, 임상 치료를 대체하거나 수행하지
              않으며, 해당 행위와 관련된 법적 책임이나 권한을 부여하지 않습니다.
            </p>
            <p>
              ※ 자격증을 획득한 회원들은 차후 한국에서의 국제공연 및 여러 가지
              행사에 참여할 기회를 제공하며, 한국춤 명상 수업을 할 수 있는
              특강의 기회를 제공합니다. (상담 후 결정)
            </p>
          </div>
        </section>

        <p className="text-center font-semibold">
          사단법인 무궁화예술단
          <br />
          한국춤 명상 총연합회
        </p>

        <div>
          <a
            href="/한국춤 명상전문사  공지.hwp"
            download
            className="text-blue-500 underline"
          >
            한국춤 명상전문사 공지.hwp
          </a>
          <p className="mt-2 text-gray-500 text-sm">
            ※ 첨부파일은 한글(.hwp) 문서 형식으로 제공됩니다.
          </p>
        </div>
      </div>
    ),
  },
];
