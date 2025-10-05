import React from "react";
import { Link } from "react-router-dom";
import ntsbig from "../assets/nts_big.png";
import mcstbig from "../assets/mcst_big.webp";
import logodark from "../assets/logo_dark.png";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:place-items-start space-y-1 text-gray-300 sm:place-items-center place-items-center">
          <img
            src={logodark}
            alt="logo"
            style={{
              height: "50px",
              maxHeight: "10vh",
              width: "auto",
              marginBottom: "15px",
            }}
            className="cursor-pointer "
            onClick={() => (window.location.href = "/")}
            loading="lazy"
          />
          <img
            src={ntsbig}
            alt="NTS"
            className="cursor-pointer w-full max-w-[100px]  nts-logo-mobile hidden justify-self-center"
            onClick={() => window.open("https://www.nts.go.kr", "_blank")}
            loading="lazy"
          />
          <img
            src={mcstbig}
            alt="MCST"
            className="cursor-pointer w-full max-w-[200px]  nts-logo-mobile hidden justify-self-center"
            onClick={() => window.open("https://www.mcst.go.kr", "_blank")}
            loading="lazy"
          />
          <p className="flex items-center gap-2 mb-0 mt-6 flex-wrap">
            <span>대표: 김죽엽(김태연) |</span>
            <span>대표번호: 053-656-8966</span>
          </p>
          <p className="flex items-center gap-2"></p>
          {/* <p className="flex items-center gap-2">
            <span>소재지: 대구시 남구 명덕로34길 7, 2층</span>
          </p> */}
          <p className="flex items-center gap-2">
            <span>고유번호: 621-82-11085</span>
          </p>
        </div>
        <div className="text-center md:text-right text-sm space-y-1 md:mt-[40px]">
          <div className="flex justify-center md:justify-end gap-4 text-gray-400">
            <Link to="/terms" className="hover:text-gray-200">
              이용약관
            </Link>
            <Link to="/privacy" className="hover:text-gray-200">
              개인정보처리방침
            </Link>
          </div>
          <p>Copyright ⓒ 2025 사단법인 무궁화예술단 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
