import React from "react";
import { Link } from "react-router-dom";

export default function Section3() {
  return (
    <section className="relative w-full h-[100svh] md:min-h-screen overflow-hidden font-sans">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/consult-banner.png')" }}
      />
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* 콘텐츠 */}
      <div className="relative z-20 w-full pt-24 md:pt-[260px] pb-16 px-4 md:px-12 text-white flex flex-col justify-center">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs md:text-base tracking-widest mb-2" style={{ fontWeight: 400 }}>
            HEALING CONSULT
          </p>
          <h2 className="text-[24px] md:text-[44px] font-bold mb-6">열방상담소</h2>
          <p className="text-sm md:text-xl font-light mb-10 leading-relaxed">
            병원 치료와 병행할 수 있는 <span className="font-semibold text-green-300">통합 암치료 가이드</span><br />
            <strong className="text-green-300">전문 약사</strong>가 혈액검사, 생활, 식이 습관을 분석해<br />
            <strong className="text-green-300">개인별 맞춤형 보완전략</strong>을 제시해 드립니다.
          </p>

          {/* 3단 핵심 요약 */}
          {/* ✅ PC용 (기존 그대로 유지) */}
          <div className="hidden md:grid grid-cols-3 gap-8 mt-6 text-center text-base text-white max-w-5xl mx-auto">
            <div>
              <h4 className="font-semibold text-green-200 mb-2">💬 상담 방식</h4>
              <p>
                사전 문답지와 건강자료 제출 후<br />
                <strong className="text-green-300">카카오톡 채널</strong>을 통해 예약 진행
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-200 mb-2">👨‍⚕️ 상담 전문가</h4>
              <p>
                <strong className="text-green-300">김훈하 · 전정미 약사</strong>가 직접 진행<br />
                암 치료에 특화된 전략 제공
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-200 mb-2">📄 준비사항</h4>
              <p>
                혈액검사, CT, 문답지 등 필수<br />
                <strong className="text-green-300">상세 정보는 페이지 하단 참고</strong>
              </p>
            </div>
          </div>

          {/* ✅ 모바일용 (간략 + 박스 형태) */}
          <div className="flex md:hidden flex-row justify-between mt-6 px-2 gap-2 text-[11px] text-white">
            <div className="flex-1 bg-white/10 backdrop-blur-sm p-3 rounded text-center">
              <div className="text-green-200 font-semibold mb-1">💬 방식</div>
              <div className="text-green-300 font-medium">카톡 채널 예약</div>
            </div>
            <div className="flex-1 bg-white/10 backdrop-blur-sm p-3 rounded text-center">
              <div className="text-green-200 font-semibold mb-1">👨‍⚕️ 전문가</div>
              <div className="text-green-300 font-medium">암 치료 전략 제공</div>
            </div>
            <div className="flex-1 bg-white/10 backdrop-blur-sm p-3 rounded text-center">
              <div className="text-green-200 font-semibold mb-1">📄 준비</div>
              <div className="text-green-300 font-medium">검사자료 필요</div>
            </div>
          </div>

          {/* CTA 버튼들 */}
          <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
            <Link
              to="/consult"
              className="bg-white text-green-800 px-6 py-3 rounded font-semibold shadow hover:bg-green-100 transition duration-300 text-xs md:text-base"
            >
              자세히 보러 가기 →
            </Link>
            <a
              href="https://pf.kakao.com/_Apnys"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 text-white px-6 py-3 rounded font-semibold hover:bg-green-800 transition duration-300 text-xs md:text-base"
            >
              카카오톡 채널로 상담 신청 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
