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
            <p className="text-lg md:text-xl">전통과 발효로 완성한 자연 기반 건강</p>
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
            <h2 className="text-3xl font-bold mb-4">일상의 자연을 담다</h2>
            <p className="text-gray-700 leading-relaxed">
              자연하는 바쁜 현대인도 간편하게 섭취할 수 있는 자연 유래 원료 기반 건강보조 제품 브랜드입니다.
채소, 과일, 약초 등 자연에서 온 재료를 바탕으로 분말과 액상 포장 형태로 설계되어,
소비자의 몸에 덜 부담되고, 흡수가 용이하며, 일상 루틴 속에서 자연스럽게 스며들 수 있도록 기획되었습니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">흡수와 기능을 모두 고려한 자연 포뮬러</h2>
            <p className="text-gray-700 leading-relaxed">
              자연하는 원료 본연의 기능과 흡수율을 고려해 설계된 건강 포뮬러를 지향합니다.
강황과 큐민, 녹색 채소, 항산화 성분 등 각 제품별 주요 소재를 과학적으로 조합하여,
불필요한 첨가물을 줄이고 자연 그대로의 건강 효과를 담았습니다.
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
            <h2 className="text-3xl font-bold mb-4">언제 어디서나, 일상 속 작은 건강 루틴</h2>
            <p className="text-gray-700 leading-relaxed">
              자연하의 제품은 모두 포 형태나 스틱 타입으로 제작되어,
아침 식사 전이나 운동 전후, 피로할 때 언제든지 간편하게 섭취할 수 있습니다.
물 없이도 즐길 수 있어 바쁜 일상 속에서도 작은 건강 습관으로 자리잡을 수 있습니다.
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
