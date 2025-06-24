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
            <p className="text-lg md:text-xl">김훈하 약사가 7년간 직접 체험한 항암 레시피, 베지셀로 항산화를 더하세요</p>
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
            <h2 className="text-3xl font-bold mb-4">진짜 경험에서 태어난 브랜드, 베지셀</h2>
            <p className="text-gray-700 leading-relaxed">
              베지셀은 약사이자 항암 치료 경험자인 김훈하 대표가
              직접 7년 넘게 섭취해온 야채 조합에서 출발한 브랜드입니다.
              개인의 회복 경험을 바탕으로, 실제 환자 2,000명 이상의 상담을 통해 검증된 건강 솔루션은
              이제 수십만 명이 선택하는 실천 가능한 항암 레시피가 되었습니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">첨가물 없이, 자연 그대로, 베지셀의 원칙</h2>
            <p className="text-gray-700 leading-relaxed">
              베지셀은 인공감미료·색소·보존료를 배제하고,
              자연에서 얻은 재료를 원물 그대로 정직하게 사용합니다.
              가정에서 직접 쪄서 마시던 방식 그대로, 고압살균(HPP)을 적용해
              영양과 신선함, 안전성을 모두 지켜낸 무첨가 헬스푸드 브랜드입니다.
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
            <h2 className="text-3xl font-bold mb-4">누구나 매일, 가족과 함께, 지속 가능한 건강 루틴</h2>
            <p className="text-gray-700 leading-relaxed">
              베지셀은 특정 대상이 아닌, 아이부터 부모 세대까지
              온 가족이 함께 마실 수 있도록 개발되었습니다.
              ‘맛있게 마실 수 있어야 습관이 된다’는 원칙 아래,
              항산화 데이터로 신뢰를 더하며 건강한 생활 습관의 출발점이 되고 있습니다.
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