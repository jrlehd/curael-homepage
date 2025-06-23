import { Link } from "react-router-dom";
import FooterCompact from "../components/FooterCompact";
import { motion } from "framer-motion";

export default function Brands() {
  return (
    <motion.div
      className="bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* 배너 섹션 */}
      <div
        className="relative h-[420px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/brands-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">브랜드 & 제품</h1>
            <p className="text-lg md:text-xl">큐라엘이 선보이는 건강의 시작</p>
          </div>
        </div>
      </div>

      {/* 브랜드 카드 섹션 */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vegicel */}
          <Link
            to="/brands/vegicel"
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100"
          >
            <div
              className="h-60 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vegicel-thumb.png')" }}
            ></div>
            <div className="p-6 bg-white">
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition">Vegicel</h2>
              <p className="text-sm text-gray-600 mt-2">
                식물성 원료 기반의 저칼로리 포뮬러. 채소와 과일로 설계한 건강의 시작
              </p>
            </div>
          </Link>

          {/* Jayeonha */}
          <Link
            to="/brands/jayeonha"
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100"
          >
            <div
              className="h-60 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/jayeonha-thumb.png')" }}
            ></div>
            <div className="p-6 bg-white">
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition">자연하</h2>
              <p className="text-sm text-gray-600 mt-2">
                분말과 액상스틱으로 건강함을 전하는 기능성 포뮬러 브랜드
              </p>
            </div>
          </Link>
        </div>
      </div>

      <FooterCompact />
    </motion.div>
  );
}