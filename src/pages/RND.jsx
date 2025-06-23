import { motion } from "framer-motion";
import FooterCompact from "../components/FooterCompact";

export default function RNDPage() {
  const sections = [
    {
      title: "신약 연구",
      image: "/images/rnd1.png",
      desc:
        "큐라엘은 천연물 기반 항암 소재 탐색에 집중하고 있으며, 특히 암 줄기세포(CSC), KRAS 변이 암 등에 효과적인 성분의 분리 및 조합을 연구합니다. 자연 기반 신약 후보물질의 기전 확인 및 병원 기반의 임상 협력을 통해 신약화 가능성을 모색합니다.",
      tags: ["항암소재", "CSC 억제", "KRAS 변이", "기전 분석", "전임상"]
    },
    {
      title: "건강기능식품 연구",
      image: "/images/rnd2.png",
      desc:
        "그린진, 커큐진, 베지셀 등 기능성 제품은 체내 흡수율, 생체이용률, 복합추출 포뮬레이션을 고려하여 설계됩니다. 천연 항산화물질, 항염 성분, 면역조절 기능을 바탕으로 한 포뮬러 개발과 더불어 환자 경험 기반의 연구도 병행합니다.",
      tags: ["흡수율 개선", "복합 배합", "항산화", "면역 조절", "기능성 임상"]
    }
  ];

  const strategy = [
    {
      title: "질환 집중 전략",
      sub: "Disease-Focus",
      desc: "암 중심 기능소재 및 약물 개발"
    },
    {
      title: "개방형 협력",
      sub: "Open Innovation",
      desc: "연구기관 및 병원과 공동개발"
    },
    {
      title: "성장성 확대",
      sub: "Global Synergy",
      desc: "수출 및 고시형 제품 확대"
    },
    {
      title: "기술 플랫폼 확보",
      sub: "Tech Advancement",
      desc: "복합추출/흡수 기술 고도화"
    }
  ];

  return (
    <motion.div
  className="bg-white"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
      <div
        className="relative w-full h-[420px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/rnd-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">큐라엘 R&D</h1>
          <p className="text-lg max-w-2xl px-4">
            자연과 기술이 만나는 과학, 큐라엘의 연구는 건강한 내일을 만듭니다.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-16 py-36">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">R&D 소개</h1>
        <p className="text-gray-600 leading-relaxed mb-16">
          큐라엘은 자연유래 항암 성분과 기능성 건강소재를 바탕으로 한 근거 기반 연구개발을 통해,
          <br className="hidden md:block" />
          환자 중심의 건강 솔루션을 제시하고 있습니다.
        </p>

        {sections.map((s, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center mb-24 gap-10 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="md:w-1/2">
              <img
                src={s.image}
                alt={s.title}
                className="rounded-xl shadow w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4 whitespace-pre-line">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm border border-green-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

         <div className="bg-gray-50 rounded-xl pt-6 pb-6 px-8 mt-28">
          <h2 className="text-4xl font-bold text-left text-gray-800 mb-20 px-12">R&D 전략</h2>
          <div className="relative max-w-6xl mx-auto h-[700px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white border-4 border-green-300 rounded-full flex items-center justify-center text-center shadow text-green-700 font-bold text-2xl z-10">
              R&D 전략
            </div>
            <div className="absolute w-full h-full top-0 left-0">
              {strategy.map((s, i) => {
                const angle = (Math.PI / 2) * i - Math.PI / 4;
                const radius = 280;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                return (
                  <div
                    key={i}
                    className="w-52 h-52 bg-white rounded-full shadow-md flex flex-col items-center justify-center text-center px-4 text-gray-700 absolute"
                    style={{
                      left: `calc(50% + ${x}px - 6.5rem)`,
                      top: `calc(50% + ${y}px - 6.5rem)`
                    }}
                  >
                    <strong className="text-green-700 text-lg mb-1">{s.sub}</strong>
                    <p className="font-semibold mb-1 text-base">{s.title}</p>
                    <p className="text-sm text-gray-500 leading-tight">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <FooterCompact />
    </motion.div>
  );
}