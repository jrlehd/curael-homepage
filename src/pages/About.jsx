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
        자연과 과학의 조화를 통한 건강 혁신
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
            <h2 className="text-3xl font-bold mb-4">과학으로 증명하는 건강</h2>
            <p className="text-gray-700 leading-relaxed">
              큐라엘은 의약품 및 건강기능식품 연구에 과학적 근거를 기반으로 접근합니다.
              최신 연구 장비와 정밀한 실험 설계를 통해, 제품의 안전성과 유효성을 입증합니다.
              끊임없는 실험과 데이터 분석을 통해 고객에게 신뢰받는 건강 솔루션을 제공합니다.
            </p>
          </div>
        </div>

        {/* 자연 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-4">자연을 담은 큐라엘</h2>
            <p className="text-gray-700 leading-relaxed">
              큐라엘의 제품은 자연 유래 원료에서 시작됩니다. 정직한 재배와 친환경적인 수확 방식을
              통해 얻은 원료는 최소한의 가공을 거쳐 제품에 담깁니다.
              우리는 자연과의 조화 속에서 진정한 건강을 추구합니다.
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
            <h2 className="text-3xl font-bold mb-4">CURAEL의 비전</h2>
            <p className="text-gray-700 leading-relaxed">
              큐라엘은 자연과 과학, 사람을 연결하는 건강한 미래를 지향합니다. 
              우리는 생명 존중의 가치를 바탕으로 건강기능식품의 새로운 기준을 제시하며 
              모두의 삶에 긍정적인 변화를 만들고자 합니다. 빛나는 아이디어와 자연의 생명력을 통해 
              더 밝은 내일을 만들어 갑니다.
            </p>
          </div>
        </div>
      </div>

      {/* 풋터 */}
      <FooterCompact />
    </motion.div>
  );
}
