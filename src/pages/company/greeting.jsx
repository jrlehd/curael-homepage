import React from "react";
import SubPageBanner from "../../components/SubPageBanner";
import SubPageNav from "../../components/SubPageNav";
import Footer from "../../components/Footer";

const GreetingPage = () => {
  return (
    <div className="bg-white">
      {/* 상단 배너 및 네비게이션 */}
      <SubPageBanner page="company" />
      <SubPageNav page="company" />

      {/* 타이틀 섹션 */}
      <section className="text-center pt-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">인사말</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-14" />
      </section>

      {/* 본문 배치: PC 좌우(텍스트 왼쪽, 이미지 오른쪽) / 모바일 상하 */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 mb-24">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10 md:gap-56">
          
          {/* 이미지 (모바일에서 축소) */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/greeting.jpg"
              alt="대표 인사말"
              className="rounded-xl shadow-md w-full max-w-xs md:max-w-full h-auto object-cover mx-auto md:mx-0"
            />
          </div>

          {/* 텍스트 본문 (PC/모바일 크기 분리) */}
          <div className="w-full md:w-1/2 text-[#333] text-[13px] md:text-[16px] leading-relaxed text-left">
            <h3 className="text-sm md:text-xl font-semibold text-green-600 mb-2">CEO MESSAGE</h3>
            <h2 className="text-lg md:text-4xl font-bold mb-8">
              “자연에서 해답을 찾다<br />
              암 치유의 새로운 길<br /> 큐라엘”
            </h2>

            <p className="mb-4 md:mb-5">
              안녕하십니까.
            </p>

            <p className="mb-4 md:mb-5">
              <strong>(주)큐라엘 대표 김훈하 약사</strong>입니다.
            </p>


            <p className="mb-4 md:mb-5">
              큐라엘은 단순한 제품이나 기술이 아닌, 매일 암환자들과 마주하며 나눈 상담과
              수천 명의 간절한 이야기를 바탕으로 시작되었습니다.
            </p>

            <p className="mb-4 md:mb-5">
              약사로서 5,000명 이상의 암환자들과 상담하며 혈액검사, 생활습관,
              식이요법 등을 함께 고민해왔습니다.
              "어떻게 하면 더 빠르고 안전하게 암을 이길 수 있을까?"
            </p>

            <p className="mb-4 md:mb-5">
              <strong>저의 해답은 자연이었습니다.</strong>
            </p>

            <p className="mb-4 md:mb-5">
              큐라엘은 파이토케미컬 기반의 천연물 조합과
              과학적 데이터를 바탕으로 한 통합요법 시스템을 통해 암 치유의 새로운 방향을 제시합니다.
            </p>

            <p className="mb-4 md:mb-5">
              자연과 과학의 균형 속에서 암환자의 삶의 질을 높이고,
              회복과 희망의 여정을 함께하겠습니다.
            </p>

            <p className="text-[16px] md:text-[20px] font-bold">김훈하 약사 드림</p>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default GreetingPage;