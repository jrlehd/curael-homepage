import React from "react";
import SubPageBanner from "../../components/SubPageBanner";
import SubPageNav from "../../components/SubPageNav";
import Footer from "../../components/Footer";
import { FlaskConical, Leaf, BarChart3, Layers3, PackageCheck, Users2 } from "lucide-react";
import Seo from "../../components/Seo";

const RNDPage = () => {
  const strategyItems = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "천연물 선별",
      description: "의학학 논문 기반으로 항암 가능성이 높은 천연 물질을 선별"
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "성분 분석 및 작용기전 검토",
      description: "분자생물학 & ECM 환경 연구를 통한 작용 기전 및 생리적 효능 확인"
    },
    {
      icon: <Layers3 className="w-8 h-8" />,
      title: "복합 조합 최적화",
      description: "상호작용 시너지를 고려한 복합 보합 설계 및 최적화"
    },
    {
      icon: <PackageCheck className="w-8 h-8" />,
      title: "기능성 제품 개발",
      description: "기능성 음료 및 건강기능식품 형태로 제품화"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "임상 데이터 확보",
      description: "의료기관 협업을 통한 데이터 분석 및 환자 중심의 피드백과 임상 반응 분석 반영"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "통합 솔루션 확장",
      description: "정서적, 신체적 회복을 아우르는 환자 맞춤형 통합 전략"
    }
  ];

  return (
    <div className="bg-white">
      <Seo title="연구/개발" description="자연물 기반 항암 연구와 제품 개발 스토리." />

      {/* 상단 배너 및 서브 네비게이션 */}
      <SubPageBanner page="rnd" />
      <SubPageNav page="rnd" />

      {/* 타이틀 섹션 */}
      <section className="text-center pt-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">연구/개발</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-20" />
      </section>

      {/* 식품 및 약 섹션 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 space-y-24">
        {/* 식품 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 order-1 md:order-1">
            <img
              src="/images/food-research.png"
              alt="건강기능식품 연구"
              className="rounded shadow w-full max-w-[440px] h-auto"
              onError={(e) => (e.target.style.display = 'none')}
            />
          </div>
          <div className="w-full md:w-1/2 order-2 md:order-2">
            <h3 className="text-xl md:text-2xl font-bold mb-2">건강기능식품 개발</h3>
            <p className="text-gray-700 mb-4">
              큐라엘은 건강기능식품 개발을 통해 면역, 해독, 피로 개선 등 다양한 기능성 영역을 과학적으로 접근하고 있습니다.
              파이토케미컬 조합을 기반으로 실증적 효과를 추구합니다.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-gray-800">
              {["항산화", "면역증진", "항염", "해독", "피로개선", "간기능", "스트레스", "장 건강"].map((item, i) => (
                <span key={i} className="px-3 py-1 bg-green-50 border border-green-200 rounded-full">{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 약 */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24">
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img
              src="/images/drug-research.png"
              alt="치료제 연구"
              className="rounded shadow w-full max-w-[440px] h-auto"
              onError={(e) => (e.target.style.display = 'none')}
            />
          </div>
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-xl md:text-2xl font-bold mb-2">천연물 기반 항암 치료제</h3>
            <p className="text-gray-700 mb-4">
              천연물 조합을 활용하여 항암제의 부작용을 완화하고 면역을 회복시키는 치료제를 연구합니다.
              전통의학과 최신 의학 논문을 접목한 AI 기반의 조합 설계로 차별화된 암 통합 솔루션을 지향합니다.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-gray-800">
              {["분자생물학", "ECM 환경", "AI 조합설계", "시너지 연구", "면역보조", "항암보완"].map((item, i) => (
                <span key={i} className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* R&D 전략 인포그래픽 */}
      <section className="mt-32 mb-24 px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400 tracking-widest font-semibold uppercase">R&D STRATEGY</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mt-1">R&D 전략</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-xl mx-auto">
          {strategyItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-start gap-3 p-6 bg-white border border-gray-200 rounded-lg shadow-sm h-full">
              <div className="text-gray-700">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RNDPage;
