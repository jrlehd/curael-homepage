import React from "react";
import SubPageBanner from "../../components/SubPageBanner";
import SubPageNav from "../../components/SubPageNav";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";

const AboutPage = () => {
  return (
    <div className="bg-white">
      <Seo 
        title="회사소개" 
        description="큐라엘의 미션과 가치, 통합 암치료 철학을 소개합니다." 
      />
      
      {/* 상단 배너 및 서브 네비게이션 */}
      <SubPageBanner page="company" />
      <SubPageNav page="company" />

      {/* 타이틀 섹션 */}
      <section className="text-center pt-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">회사소개</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-12" />
      </section>

      {/* 콘텐츠 이미지 섹션 + 카드 오버레이 */}
      <section className="relative mb-20 px-4 md:px-16">
        <div className="overflow-hidden rounded-xl shadow-lg relative">

          {/* 배경 이미지 */}
          <img
            src="/images/about.png"
            alt="회사 소개"
            className="w-full object-cover h-[800px] md:h-auto md:aspect-[16/6]"
          />

          {/* 반투명 오버레이 */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl" />

          {/* 텍스트 및 카드 */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <p className="text-sm md:text-base tracking-widest mb-3 font-light uppercase">
              COMPANY INTRODUCTION
            </p>
            <h1 className="text-2xl md:text-4xl font-Semibold mb-6 md:mb-10 leading-snug">
              자연에서 답을 찾다<br />
              <span>암 치유의 새로운 길</span>
            </h1>

            {/* 카드 3개 */}
            <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-5xl divide-y md:divide-y-0 md:divide-x divide-white">
              {/* 카드 1 */}
              <div className="flex flex-col items-center py-6 px-3 md:py-10 md:px-8 space-y-3 md:space-y-4">
                <img
                  src="/images/icon_company.png"
                  alt="설립"
                  className="w-10 h-10 mb-2 md:w-14 md:h-14"
                />
                <h3 className="text-[15px] md:text-xl font-semibold text-white text-center">
                  큐라엘은 2023년부터
                </h3>
                <p className="text-[13px] md:text-base leading-normal md:leading-relaxed opacity-90 text-white text-center">
                  천연물 기반 건강기능식품 개발과<br />
                  통합적 암환자 지원 솔루션을<br />
                  제공하는 기업입니다.
                </p>
              </div>

              {/* 카드 2 */}
              <div className="flex flex-col items-center py-6 px-3 md:py-10 md:px-8 space-y-3 md:space-y-4">
                <img
                  src="/images/icon_consult.png"
                  alt="자연성분"
                  className="w-10 h-10 mb-2 md:w-14 md:h-14"
                />
                <h3 className="text-[15px] md:text-xl font-semibold text-white text-center">
                  자연 유래 원료 기반
                </h3>
                <p className="text-[13px] md:text-base leading-normal md:leading-relaxed opacity-90 text-white text-center">
                  식물성 항산화물질과<br />
                  면역·항암 기능 중심 원료로<br />
                  제품을 개발하고 있습니다.
                </p>
              </div>

              {/* 카드 3 */}
              <div className="flex flex-col items-center py-6 px-3 md:py-10 md:px-8 space-y-3 md:space-y-4">
                <img
                  src="/images/icon_nature.png"
                  alt="사명"
                  className="w-10 h-10 mb-2 md:w-14 md:h-14"
                />
                <h3 className="text-[15px] md:text-xl font-semibold text-white text-center">
                  암환자를 위한 통합적 접근
                </h3>
                <p className="text-[13px] md:text-base leading-normal md:leading-relaxed opacity-90 text-white text-center">
                  예방부터 회복까지 연결되는<br />
                  통합적 관리와 맞춤 솔루션을<br />
                  지향합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 회사 정보 섹션 */}
      <section className="bg-white font-suit text-[13px] md:text-[16px] text-[#333] mb-[112px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px]">
            
            {/* 좌측 정보 */}
            <div className="w-full divide-y divide-[#e5e5e5]">
              {[
                { label: "회사명", value: "(주)큐라엘" },
                { label: "대표이사", value: "김훈하" },
                { label: "설립일자", value: "2023년 8월" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start py-4 sm:py-6 gap-2 pl-1">
                  <div className="min-w-[88px] md:w-[104px] text-[#2ba447] font-bold shrink-0">{item.label}</div>
                  <div className="flex-1">{item.value}</div>
                </div>
              ))}
            </div>

            {/* 우측 정보 */}
            <div className="w-full mt-0 md:mt-0">
              <div className="block md:hidden border-t border-[#e5e5e5] mx-4" />
              <div className="block md:hidden h-[0px]" />

              <div className="divide-y divide-[#e5e5e5]">
                {[
                  { label: "소재지", value: "서울특별시 강남구 논현로 132길 12" },
                  { label: "사업분야", value: "건강기능식품 연구개발 및 판매, 암환자 지원 솔루션 운영" },
                  { label: "주요제품", value: "내몸에 베지셀 메이킹 7.4, 베리베라진, 커큐진 등" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start py-4 sm:py-6 gap-2 pl-1">
                    <div className="min-w-[88px] md:w-[104px] text-[#2ba447] font-bold shrink-0">{item.label}</div>
                    <div className="flex-1">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default AboutPage;