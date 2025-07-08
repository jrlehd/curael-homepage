import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["베지셀", "자연하", "서적"];

const products = {
  베지셀: {
    title: "환자를 위한 천연 야채주스, 베지셀",
    highlight: "천연 야채주스",
    image: "/images/vegicel_section2.jpg",
    description:
      "베지셀은 신선한 야채와 과일 그대로를 담은 천연 식이 파이토케미컬 주스입니다. 항암 중에도 부담 없이 섭취할 수 있도록 무가당, 무첨가, 저열처리 방식으로 만들었으며, 세포 회복과 염증 완화, 면역 균형을 고려해 약사가 직접 설계한 처방형 블렌딩입니다.",
    link: "/products/vegicel",
  },
  자연하: {
    title: "자연을 닮은 건강한 흐름을 만듭니다",
    highlight: "건강한 흐름",
    image: "/images/jayeonha_section2.jpg",
    description:
      "자연의 원리와 흐름을 기반으로 몸과 삶의 회복을 돕는 천연물 기반 건강식품 브랜드입니다. 우리는 단순한 ‘건강식품’을 넘어, 회복·예방·면역·해독 중심의 자연주의 치유 식문화를 만들어갑니다.",
    link: "/products/jayeonha",
  },
  서적: {
    title: "환자와 함께 만든 치유의 기록",
    highlight: "함께 만든",
    image: "/images/book_section2.png",
    description:
      "환자가 스스로 암을 이해하고 치유의 주체가 되기를 바랐습니다. 병원 진료만으로는 채워지지 않는 정보와 방향을 책을 통해 전하고자 했습니다. 암을 두려워하기보다, 준비하고 실천할 수 있도록 돕고 싶었습니다. 그래서 그는 책을 ‘교육’이자 ‘회복의 길잡이’로 선택했습니다.",
    link: "/products/books",
  },
};

const Section2 = () => {
  const [active, setActive] = useState("베지셀");
  const current = products[active];

  return (
    <section className="relative w-full min-h-screen overflow-hidden font-sans">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover z-0"
        style={{
          backgroundImage: "url('/images/section2_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-40 z-10" />

      <div className="relative z-20 w-full pt-36 md:pt-48 pb-16 px-4 md:px-12 text-white">
        <div className="text-center mb-4">
          <p className="text-[12px] md:text-sm tracking-widest mb-0 font-bold">
            OUR PRODUCT
          </p>
          <h2 className="text-[32px] md:text-[36px] font-bold">제품소개</h2>
        </div>

        <div className="flex justify-center gap-4 md:gap-6 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[14px] md:text-[18px] px-3 py-2 border-b-2 transition font-medium ${
                active === cat
                  ? "text-green-400 border-green-400"
                  : "text-white border-transparent hover:border-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mx-auto w-full max-w-[1000px] bg-white text-black flex flex-col md:flex-row shadow-lg">
          {/* 이미지 */}
          <div className="w-full md:w-1/2 h-[180px] md:h-[380px]">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 텍스트 */}
          <div className="w-full md:w-1/2 py-8 px-6 md:py-12 md:px-8 flex flex-col items-start justify-center overflow-hidden">
            <div className="max-w-full md:max-w-[400px] text-left mx-auto">
              <h3
                className="text-[18px] md:text-[26px] mb-3 md:mb-4 leading-snug"
                style={{ fontWeight: 400 }}
                dangerouslySetInnerHTML={{
                  __html: current.title.replace(
                    current.highlight,
                    `<strong style="color:#2BAE66;font-weight:900">${current.highlight}</strong>`
                  ),
                }}
              ></h3>
              {current.description.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[12px] md:text-[13px] text-gray-700 mb-3 md:mb-3 leading-[1.7] font-normal"
                >
                  {paragraph}
                </p>
              ))}
              <Link
                to={current.link}
                className="text-[13px] md:text-[14px] text-green-800 font-semibold hover:underline"
              >
                더보기 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
