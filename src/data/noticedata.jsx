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
];
