import React from "react";
import SubPageBanner from "../../components/SubPageBanner";
import SubPageNav from "../../components/SubPageNav";
import Footer from "../../components/Footer";

export default function Vision() {
  return (
    <div>
      <SubPageBanner page="company" />
      <SubPageNav page="company" />

      {/* 타이틀 섹션 */}
      <section className="text-center pt-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">비전</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-14" />
      </section>

      {/* 부제목: MISSION & VISION */}
      <section className="text-center mb-24">
        <p className="text-sm text-gray-400 tracking-widest font-semibold uppercase">
          MISSION & VISION
        </p>
        <p className="text-3xl sm:text-5xl font-bold text-gray-900 mt-1">미션 & 비전</p>
      </section>

      {/* 미션/비전 원 */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-28 mb-24 relative">

          {/* 로고 */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img
              src="/images/SymbolMark.png"
              alt="CURAEL Logo"
              className="w-32 md:w-60 mx-auto"
            />
            {/* ↓ 유니코드 아이콘으로 대체 (모바일 전용) */}
            <div className="mt-4 md:hidden text-center text-gray-500 text-xl">▼</div>
          </div>

          {/* 연결선 (데스크탑 전용) */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-16 h-16 border-t-2 border-r-2 border-gray-400 transform rotate-45 -ml-6 mr-6"></div>
          </div>

          {/* 비전 & 미션 원 */}
          <div className="relative flex flex-col md:flex-row md:justify-center md:items-center gap-0 md:gap-0">
            {/* VISION */}
            <div className="bg-green-800/80 text-white rounded-full w-64 h-64 md:w-80 md:h-80 flex flex-col justify-center items-center shadow-2xl z-0 md:absolute md:right-[4rem] mt-[10px] md:mt-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">VISION</h3>
              <div className="w-12 h-px bg-white mb-2" />
              <p className="text-center text-sm md:text-lg leading-relaxed text-white">
                천연물과 파이토케미컬 <br />
                기반의 통합 암 케어로<br />
                글로벌 선도기업이 되다
              </p>
            </div>

            {/* MISSION */}
            <div className="bg-green-600/90 text-white rounded-full w-64 h-64 md:w-80 md:h-80 flex flex-col justify-center items-center shadow-2xl relative z-10 md:left-[14rem] mb-[-20px] md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">MISSION</h3>
              <div className="w-12 h-px bg-white mb-2" />
              <p className="text-center text-sm md:text-lg leading-relaxed text-white">
                암환자 중심의 통합치료로<br />
                근거 기반 솔루션을 제공해<br />
                건강한 삶을 지원합니다
              </p>
            </div>
          </div>
        </div>

        {/* 핵심가치 섹션 */}
        <section className="text-center mt-32 mb-12">
          <p className="text-sm text-gray-400 tracking-widest font-semibold uppercase">
            CORE VALUES
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mt-1">핵심가치</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            치유를 향한 첫걸음<br />
            과학적 근거와 자연의 힘으로 시작합니다.
          </p>
        </section>

        {/* 핵심가치 (CORE VALUES) 인포그래픽 섹션 */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 mb-16 md:mb-32">
          <div className="flex flex-col md:flex-row justify-center items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-300">
            {[
              {
                key: "C",
                title: "Cure",
                icon: "icon-cure.png",
                desc: "암 치유 접근",
              },
              {
                key: "U",
                title: "Understanding",
                icon: "icon-understanding.png",
                desc: "이해와 교육",
              },
              {
                key: "R",
                title: "Research",
                icon: "icon-research.png",
                desc: "지속 연구",
              },
              {
                key: "A",
                title: "Advance",
                icon: "icon-advance.png",
                desc: "첨단 기술",
              },
              {
                key: "E",
                title: "Education",
                icon: "icon-education.png",
                desc: "지식 제공",
              },
              {
                key: "L",
                title: "Leap",
                icon: "icon-leap.png",
                desc: "치료 혁신",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center text-center px-4 py-6 md:px-6 md:py-10"
              >
                <img
                  src={`/images/${item.icon}`}
                  alt={item.title}
                  className="w-12 h-12 mb-4"
                />
                <h4 className="text-[15px] font-bold mb-1">
                  <span className="text-green-600 text-2xl">{item.key}</span>
                  <span className="ml-1">{item.title.slice(1)}</span>
                </h4>
                <p className="text-base md:text-lg text-gray-500 leading-tight font-semibold">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </section>

      <Footer />
    </div>
  );
}
