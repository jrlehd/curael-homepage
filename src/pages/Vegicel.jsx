import FooterCompact from "../components/FooterCompact";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function VegicelPage() {
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
        style={{ backgroundImage: "url('/images/vegicel-thumb.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">VEGICEL 브랜드 스토리</h1>
            <p className="text-lg md:text-xl">채소와 과일로 설계한 건강의 시작</p>
          </div>
        </div>
      </div>

      {/* 본문 섹션 */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/vegicel-story.png"
            alt="베지셀 스토리"
            className="w-full max-w-[500px] rounded-xl shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">채소와 과일로 설계한 건강의 시작</h2>
            <p className="text-gray-700 leading-relaxed">
              베지셀은 채소와 과일을 기반으로 설계된 식물성 건강 주스 브랜드입니다.
비건 포뮬러와 저칼로리 구성을 바탕으로 누구나 부담 없이 섭취할 수 있도록 기획되었으며,
일상 속에서 자연스럽게 실천할 수 있는 건강 루틴을 제안합니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">항산화와 pH 밸런스를 고려한 포뮬러</h2>
            <p className="text-gray-700 leading-relaxed">
              베지셀은 항산화 성분과 pH 밸런스를 고려한 원료 조합으로 구성됩니다.
신선한 채소와 과일을 원물 그대로 담아내어, 영양과 맛을 함께 만족시킬 수 있도록 설계되었습니다.


            </p>
          </div>
          <img
            src="/images/vegicel-formula.png"
            alt="베지셀 포뮬러"
            className="w-full max-w-[500px] rounded-xl shadow"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/vegicel-lifestyle.png"
            alt="베지셀 라이프스타일"
            className="w-full max-w-[500px] rounded-xl shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">일상 속 건강 루틴으로</h2>
            <p className="text-gray-700 leading-relaxed">
              간편하게 짜먹는 파우치 형태로, 아침 식사 대용이나 운동 전후, 바쁜 일상 속 간식으로 활용할 수 있습니다.
가볍고 상큼한 맛과 편리한 포장으로 현대인을 위한 스마트한 건강 솔루션을 제공합니다.
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