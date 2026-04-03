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
];
