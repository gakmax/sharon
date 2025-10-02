import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-gray-800">
      <h1 className="text-9xl font-extrabold text-red-500 ">404</h1>
      <p className="text-2xl md:text-3xl mt-4">페이지를 찾을 수 없습니다</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow transition-colors duration-300"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
