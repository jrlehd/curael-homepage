import FooterCompact from "../components/FooterCompact";
import { motion } from "framer-motion";

export default function About() {
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
  style={{
    backgroundImage: "url('/images/about-banner.jpg')",
  }}
>
  {/* 어두운 오버레이 */}
  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="text-center text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        큐라엘이 추구하는 가치
      </h1>
      <p className="text-lg md:text-xl">
        치유의 지름길, 변화를 위한 첫걸음
      </p>
    </div>
  </div>
</div>

      {/* 본문 섹션 */}
      <div className="max-w-6xl mx-auto px-16 py-20">
        {/* 과학 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <img
            src="/images/about-lab.png"
            alt="연구 이미지"
            className="w-full max-w-[500px] aspect-[4/3] object-cover rounded-xl shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">자연과 건강을 잇는 큐라엘</h2>
            <p className="text-gray-700 leading-relaxed">
              (주)큐라엘은 천연물 기반 항암 건강기능식품과 맞춤형 통합케어 솔루션을 제공하는 헬스케어 기업입니다.
              자연에서 얻은 건강 소재를 정밀하게 설계하고,
              1:1 상담과 식이·심리·생활 전반의 케어 서비스를 통해 암 환자의 삶의 질을 높이는 데 집중합니다.
              건강식품부터 상담, 출판, 미디어까지 연결된 토털 서비스로
              보다 체계적이고 과학적인 접근을 통해 암 케어의 기준을 만들어가고 있습니다.
            </p>
          </div>
        </div>

        {/* 자연 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-4">재료 그대로의 힘</h2>
            <p className="text-gray-700 leading-relaxed">
              큐라엘은 재료 그대로의 힘을 믿습니다.
              몸이 민감한 사람일수록 무엇을 먹는지가 중요하기에, 우리는 불필요한 첨가물이나 과한 가공을 배제하고 재료 본연의 성질을 최대한 살리는 방식을 선택합니다.
              좋은 재료를 정직한 방식으로 다루는 것, 그것이 가장 기본적이면서도 가장 과학적인 건강 솔루션이라는 믿음으로 제품을 만듭니다.
              그렇게 우리는, 일상 속에서 자연스럽게 스며드는 진짜 건강을 완성해 나갑니다.
            </p>
          </div>
          <img
            src="/images/about-nature.png"
            alt="자연 이미지"
            className="w-full max-w-[500px] aspect-[4/3] object-cover rounded-xl shadow"
          />
        </div>

        {/* 비전 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <img
            src="/images/about-vision.png"
            alt="비전 이미지"
            className="w-full max-w-[500px] aspect-[4/3] object-cover rounded-xl shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">천연물과 파이토케미컬 기반의 혁신</h2>
            <p className="text-gray-700 leading-relaxed">
              큐라엘은 자연에서 유래한 식물성 유효 성분을 과학적 근거에 기반해 정교하게 조합함으로써,
              암의 예방부터 치료, 회복에 이르기까지 전 과정을 통합 지원하는 글로벌 항암 헬스케어 기업을 지향합니다.
              우리는 자연과 과학, 그리고 환자 중심의 케어를 연결해
              암 치료의 패러다임을 보다 지속 가능하고 통합적인 방향으로 전환해 나가고자 합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 풋터 */}
      <FooterCompact />
    </motion.div>
  );
}
