import FooterCompact from "../components/FooterCompact";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Jayeonha() {
  return (
    <motion.div
      className="bg-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* 배너 섹션 */}
      <div
        className="relative h-[420px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/jayeonha-thumb.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">자연하 브랜드 스토리</h1>
            <p className="text-lg md:text-xl">첨가물은 비우고, 천연 파이토케미컬로 항암 부작용을 다독이는 자연하</p>
          </div>
        </div>
      </div>

      {/* 본문 섹션 */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/jayeonha-story.png"
            alt="자연하 스토리"
            className="w-full max-w-[500px] rounded-xl shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">환자 경험에서 출발한 천연 조합, 자연하</h2>
            <p className="text-gray-700 leading-relaxed">
              자연하는 김훈하 약사가 20년간 천연물 연구를 이어오며,
              2,000명 이상의 암 환자 상담에서 얻은 실제 회복 데이터를 토대로 탄생한
              클린라벨 건강기능식품 브랜드입니다.
              항암 과정에서 체력, 면역, 조혈 회복이 중요하다는 현장의 목소리를
              식물성 유효 성분과 맞춤 배합으로 구현했습니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">첨가물 0%, 자연 유래 성분 100%</h2>
            <p className="text-gray-700 leading-relaxed">
              자연하는 모든 제품에 합성 부형제, 감미료, 착색료를 넣지 않습니다.
              몸이 민감한 암 환자도 안심하고 섭취할 수 있도록
              파이토케미컬과 단백질, 미네랄 등을 자연 유래 소재로만 채워 만듭니다.
              깨끗한 제조 철학은 자연하의 모든 제품에 일관되게 적용됩니다.
            </p>
          </div>
          <img
            src="/images/jayeonha-formula.png"
            alt="자연하 포뮬러"
            className="w-full max-w-[500px] rounded-xl shadow"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/jayeonha-lifestyle.png"
            alt="자연하 라이프스타일"
            className="w-full max-w-[500px] rounded-xl shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">회복을 위한 복합 설계, 부작용을 덜고 일상을 채우다</h2>
            <p className="text-gray-700 leading-relaxed">
              자항암 치료 중 흔한 피로, 식욕 저하, 빈혈, 면역 저하 등은 일상을 크게 흔듭니다.
              자연하의 베리베라진, 커큐진, 그린진은 항산화, 조혈, 소화·면역 지원을 목표로 설계되었습니다.
              실제 환자들은 항암과 병행하며 체력 회복과 활력 상승을 체감하고 있습니다.
              첨가물 없이 자연 유래 성분으로만 구성되어, 민감한 몸에도 안심할 수 있습니다.
              부작용은 덜고, 회복은 채우는 일상용 솔루션—그것이 자연하입니다.
            </p>
          </div>
        </div>

        {/* 버튼 섹션 */}
        <div className="text-center pt-12 space-x-4">
          <Link
            to="/brands"
            className="inline-block bg-gray-100 text-gray-800 text-lg font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition"
          >
            브랜드 보러가기
          </Link>
          <Link
            to="/products"
            className="inline-block bg-green-600 text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-green-700 transition"
          >
            제품 보러가기
          </Link>
        </div>
      </div>

      <FooterCompact />
    </motion.div>
  );
}
