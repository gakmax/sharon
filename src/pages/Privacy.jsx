import React from "react";

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-2xl font-bold mb-6">
        개인정보처리방침 (Privacy Policy)
      </h1>

      <section className="space-y-4">
        <p>
          <strong>사단법인 무궁화예술단</strong>은 「개인정보보호법」 제30조에
          따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고
          원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을
          수립·공개합니다.
        </p>

        <h2 className="font-semibold">
          제1조 (개인정보의 처리 목적 및 수집 항목)
        </h2>
        <p>
          본 웹사이트는 회원가입, 게시판 운영, 문의하기 기능, 쿠키를 통한 정보
          수집을 일절 하지 않습니다.
        </p>
        <p>
          다만, 웹사이트 접속 시 다음과 같은 정보가 자동적으로 생성 및 수집되어
          서비스 이용 통계 및 보안 목적으로만 이용될 수 있습니다.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>수집 항목: 접속 IP 주소, 방문 일시, 서비스 이용 기록 등</li>
          <li>
            이용 목적: 웹사이트 서비스 개선 및 통계 분석, 비정상적인 접근 방지
            등 보안 목적
          </li>
        </ul>

        <h2 className="font-semibold">제2조 (개인정보의 보유 및 이용 기간)</h2>
        <p>
          수집된 접속 기록 등은 법령에서 정하는 기간 또는 이용 목적이 달성된 후
          지체 없이 파기됩니다.
        </p>

        <h2 className="font-semibold">제3조 (개인정보의 제3자 제공 및 위탁)</h2>
        <p>
          본 웹사이트는 원칙적으로 이용자의 개인정보를 제3자에게 제공하거나
          외부에 위탁하지 않습니다.
        </p>

        <h2 className="font-semibold">제4조 (개인정보 보호책임자)</h2>
        <p>
          개인정보 처리에 관한 업무를 총괄하고 관련 고충 처리를 위하여 아래와
          같이 개인정보 보호책임자를 지정합니다.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>성명: 김태연</li>
          <li>소속/직책: 대표</li>
          <li>연락처: kiyart1019@naver.com</li>
        </ul>
      </section>
    </div>
  );
}
