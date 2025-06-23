import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Section2 = () => {
  const categories = ["DRINKS VEGICEL", "HEALTH 자연하", "BOOKS 서적"];

  const productsMap = {
    "DRINKS VEGICEL": [
      {
        name: "내몸에 베지셀 메이킹 7.4",
        image: "/images/product1-1.png",
        description: "채소에서 찾은 건강의 시작",
        slug: "12025061911331",
      },
    ],
    "HEALTH 자연하": [
      {
        name: "그린진",
        image: "/images/product2-1.png",
        description: "맑고 깨끗한 자연의 힘",
        slug: "22025061911334",
      },
      {
        name: "커큐진",
        image: "/images/product2-2.png",
        description: "자연에서 찾은 항암 에너지",
        slug: "22025061911333",
      },
      {
        name: "베리베라진",
        image: "/images/product2-3.png",
        description: "상큼한 베리로 가볍게 시작하는 하루",
        slug: "22025061911332",
      },
    ],
    "BOOKS 서적": [
      {
        name: "캔서 위너",
        image: "/images/product3-1.jpg",
        description: "암 투병에 용기를 주는 지식과 전략",
        slug: "32025061911331",
      },
      {
        name: "기적의 항암식단",
        image: "/images/product3-2.jpg",
        description: "항암 시기별 맞춤 레시피 119가지 수록",
        slug: "32025061911332",
      },
      {
        name: "열방약국 유방암 상담소",
        image: "/images/product3-3.jpg",
        description: "유방암 환자의 식이요법과 생활 전략",
        slug: "32025061911334",
      },
      {
        name: "열방약국 말기암 통합요법 상담소",
        image: "/images/product3-4.jpg",
        description: "말기암의 희망, 암을 다루는 전략",
        slug: "32025061911333",
      },
    ],
  };

  const [selected, setSelected] = useState({
    "DRINKS VEGICEL": 0,
    "HEALTH 자연하": 0,
    "BOOKS 서적": 0,
  });

  const [thumbnailStartIndices, setThumbnailStartIndices] = useState({
    "DRINKS VEGICEL": 0,
    "HEALTH 자연하": 0,
    "BOOKS 서적": 0,
  });

  const handleThumbnailClick = (category, index) => {
    const products = productsMap[category];
    const mid =
      index === products.length - 1
        ? Math.max(0, products.length - 3)
        : Math.max(0, index - 1);
    setSelected((prev) => ({ ...prev, [category]: index }));
    setThumbnailStartIndices((prev) => ({ ...prev, [category]: mid }));
  };

  const handleNext = (category) => {
    const products = productsMap[category];
    setSelected((prevSelected) => {
      const currentIndex = prevSelected[category];
      const nextIndex = Math.min(currentIndex + 1, products.length - 1);
      const mid =
        nextIndex === products.length - 1
          ? Math.max(0, products.length - 3)
          : Math.max(0, nextIndex - 1);
      setThumbnailStartIndices((prev) => ({ ...prev, [category]: mid }));
      return { ...prevSelected, [category]: nextIndex };
    });
  };

  const handlePrev = (category) => {
    setSelected((prevSelected) => {
      const currentIndex = prevSelected[category];
      const prevIndex = Math.max(currentIndex - 1, 0);
      const mid = Math.max(0, prevIndex - 1);
      setThumbnailStartIndices((prev) => ({ ...prev, [category]: mid }));
      return { ...prevSelected, [category]: prevIndex };
    });
  };

  return (
    <div className="relative w-full pt-32 pb-18 px-4 md:px-10 xl:px-32">
      <div className="flex flex-col xl:flex-row xl:justify-center xl:gap-24">
        {categories.map((category) => {
          const products = productsMap[category];
          const selectedIndex = selected[category];
          const start = thumbnailStartIndices[category];
          const visibleThumbnails = products.slice(start, start + 3);
          const selectedProduct = products[selectedIndex];

          return (
            <div
              key={category}
              className="flex flex-col items-center mb-20 w-full max-w-[300px] xl:max-w-[280px]"
            >
              <p className="text-xl font-bold text-green-700 mb-2">
                {category.split(" ")[0]}
              </p>
              <h3 className="text-3xl font-bold mb-4">
                {category.split(" ")[1]}
              </h3>

              <Link to={`/products/${selectedProduct.slug}`}>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full aspect-[3/4] object-cover rounded-xl mb-8"
                />
              </Link>

              <h4 className="text-xl font-semibold mb-6">
                {selectedProduct.name}
              </h4>
              <p className="text-sm text-gray-500 mb-4 text-center px-4">
                {selectedProduct.description}
              </p>

              <div className="flex items-center gap-1 justify-center mb-4">
                {products.length > 3 && (
                  <button onClick={() => handlePrev(category)} className="p-1">
                    <FaChevronLeft />
                  </button>
                )}

                <div className="flex gap-1">
                  {visibleThumbnails.map((product, index) => {
                    const actualIndex = start + index;
                    return (
                      <img
                        key={index}
                        src={product.image}
                        alt={product.name}
                        onClick={() =>
                          handleThumbnailClick(category, actualIndex)
                        }
                        className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
                          selectedIndex === actualIndex
                            ? "border-green-600"
                            : "border-gray-300"
                        }`}
                      />
                    );
                  })}
                </div>

                {products.length > 3 && (
                  <button onClick={() => handleNext(category)} className="p-1">
                    <FaChevronRight />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 고정 버튼을 이 섹션 내부에 위치시킴 */}
      <div className="absolute right-6 bottom-6 z-50">
        <Link
          to="/products"
          className="bg-green-600 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
        >
          제품 전체 보러가기 →
        </Link>
      </div>
    </div>
  );
};

export default Section2;