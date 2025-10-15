import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["베지셀", "자연하", "서적"];

const products = {
  베지셀: {
    title: "환자를 위한 천연 야채주스, 베지셀",
    highlight: "천연 야채주스",
    image: "/images/12509120919.jpg",
    description:
      "베지셀은 신선한 야채와 과일 그대로를 담은 천연 파이토케미컬 주스입니다. 항암 중에도 부담 없이 섭취할 수 있도록 무가당, 무첨가, 저열처리 방식으로 만들었습니다. 세포 회복과 염증 완화, 면역 균형을 고려해 약사가 직접 설계한 처방형 블렌딩입니다.",
    link: "/products/vegicel",
  },
  자연하: {
    title: "자연을 닮은 건강한 흐름을 만듭니다",
    highlight: "건강한 흐름",
    image: "/images/22509120919.jpg",
    description:
      "자연의 원리와 흐름을 기반으로 몸의 회복을 돕는 천연물 기반 건강식품입니다. 단순한 ‘건강식품’을 넘어, 회복·예방·면역·해독 중심의 자연주의 치유 식문화를 만들어갑니다.",
    link: "/products/jayeonha",
  },
  서적: {
    title: "환자와 함께 만든 치유의 기록",
    highlight: "치유의 기록",
    image: "/images/32509120919.jpg",
    description:
      "환자가 스스로 암을 이해하고 치유의 주체가 되기를 바랐습니다. 병원 진료만으로는 채워지지 않는 정보와 방향을 책을 통해 전합니다. 암을 두려워하기보다, 이해하고 건강습관을 실천할 수 있도록 도와줍니다.",
    link: "/products/books",
  },
};

const Section2 = () => {
  const [active, setActive] = useState("베지셀");
  const current = products[active];

  return (
    <section className="s2 relative w-full h-[100svh] md:min-h-screen overflow-hidden font-sans">
      {/* 배경 */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/section2_bg.png')" }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* 콘텐츠 */}
      <div className="s2-content relative z-20 w-full pt-20 md:pt-48 pb-10 px-4 md:px-12 text-white flex flex-col justify-center">
        {/* 타이틀 */}
        <div className="text-center mb-6 mt-10 md:mt-0">
          <p className="s2-eyebrow text-xs md:text-base tracking-widest mb-2" style={{ fontWeight: 400 }}>
            OUR PRODUCT
          </p>
          <h2 className="s2-h2 text-[26px] md:text-[38px] font-bold">제품소개</h2>
        </div>

        {/* 탭 */}
        <div className="s2-tabs flex justify-center gap-4 md:gap-6 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`s2-tab text-[13px] md:text-[20px] px-4 py-3 border-b-2 transition font-medium ${
                active === cat
                  ? "text-green-400 border-green-400"
                  : "text-white border-transparent hover:border-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 카드 */}
        <div className="s2-card mx-auto w-full max-w-[1200px] bg-white text-black flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden">
          {/* 이미지 */}
          <div className="s2-imgWrap w-full md:w-1/2 h-[160px] md:h-[360px] lg:h-[420px]">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 텍스트 */}
          <div className="s2-text w-full md:w-1/2 py-8 px-6 md:py-10 md:px-8 lg:py-12 lg:px-10 flex flex-col items-start justify-center overflow-hidden">
            <div className="max-w-full md:max-w-[520px] text-left mx-auto">
              <h3
                className="s2-title text-[18px] md:text-[26px] lg:text-[30px] mb-3 md:mb-4 leading-snug"
                style={{ fontWeight: 500 }}
                dangerouslySetInnerHTML={{
                  __html: current.title.replace(
                    current.highlight,
                    `<strong style="color:#2BAE66;font-weight:900">${current.highlight}</strong>`
                  ),
                }}
              />
              {current.description.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="s2-p text-[12px] md:text-[14px] lg:text-[15px] text-gray-700 mb-3 leading-[1.75] font-normal"
                >
                  {paragraph}
                </p>
              ))}
              <Link
                to={current.link}
                className="s2-link inline-block mt-1 text-[13px] md:text-[15px] text-green-800 font-semibold hover:underline"
              >
                더보기 →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 높이(세로) 작을 때만 ‘컴팩트 모드’로 줄이는 CSS */}
      <style>{`
        /* 세로가 700px 이하인 환경에서만 적용 */
        @media (max-height: 700px) {
          .s2 .s2-content { 
            padding-top: clamp(8px, 3vh, 56px);
            padding-bottom: clamp(8px, 2.5vh, 36px);
          }
          .s2 .s2-eyebrow { font-size: 11px; letter-spacing: 0.08em; }
          .s2 .s2-h2 { font-size: 22px; }

          .s2 .s2-tabs { margin-bottom: 16px; gap: 12px; }
          .s2 .s2-tab  { padding: 8px 10px; font-size: 12px; }

          /* 카드 자체 크기 축소 & 내부 스크롤 허용 (필요 시) */
          .s2 .s2-card { 
            max-height: calc(100dvh - 140px); 
            overflow-y: auto; 
            -webkit-overflow-scrolling: touch;
          }

          /* 이미지 높이 축소 */
          .s2 .s2-imgWrap { height: clamp(110px, 22vh, 150px); }

          /* 텍스트 축소 */
          .s2 .s2-title { font-size: clamp(16px, 2.6vh, 20px); }
          .s2 .s2-p     { font-size: clamp(11px, 1.9vh, 12px); line-height: 1.6; }
          .s2 .s2-link  { font-size: 12px; }
        }

        /* 아주 작은 세로(≤600px)에서 한 단계 더 축소 */
        @media (max-height: 600px) {
          .s2 .s2-content { padding-top: clamp(6px, 2.2vh, 40px); padding-bottom: 10px; }
          .s2 .s2-h2 { font-size: 20px; }
          .s2 .s2-imgWrap { height: clamp(100px, 20vh, 140px); }
          .s2 .s2-title { font-size: clamp(15px, 2.3vh, 18px); }
          .s2 .s2-p { font-size: clamp(10px, 1.7vh, 11px); }
        }
      `}</style>
    </section>
  );
};

export default Section2;
