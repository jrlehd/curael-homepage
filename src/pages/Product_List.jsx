import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FooterCompact from "../components/FooterCompact";
import { motion } from "framer-motion";

const ProductList = () => {
  const categories = ["전체", "VEGICEL", "자연하", "BOOKS 서적"];
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);
  const productsPerPage = 6;

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const productsMap = {
    VEGICEL: [
      {
        name: "내몸에 베지셀 메이킹 7.4",
        image: "/images/product1-1.png",
        category: "VEGICEL",
        slug: "12025061911331",
      },
    ],
    자연하: [
      {
        name: "그린진",
        image: "/images/product2-1.png",
        category: "자연하",
        slug: "22025061911334",
      },
      {
        name: "커큐진",
        image: "/images/product2-2.png",
        category: "자연하",
        slug: "22025061911333",
      },
      {
        name: "베리베라진",
        image: "/images/product2-3.png",
        category: "자연하",
        slug: "22025061911332",
      },
    ],
    "BOOKS 서적": [
      {
        name: "캔서 위너",
        image: "/images/product3-1.jpg",
        category: "서적",
        slug: "32025061911331",
      },
      {
        name: "기적의 항암식단",
        image: "/images/product3-2.jpg",
        category: "서적",
        slug: "32025061911332",
      },
      {
        name: "열방약국 유방암 상담소",
        image: "/images/product3-3.jpg",
        category: "서적",
        slug: "32025061911334",
      },
      {
        name: "열방약국 말기암 통합요법 상담소",
        image: "/images/product3-4.jpg",
        category: "서적",
        slug: "32025061911333",
      },
    ],
  };

  const allProducts = Object.entries(productsMap).flatMap(([category, products]) =>
    products.map((p) => ({ ...p, category }))
  );

  const filteredProducts =
    selectedCategory === "전체"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* 배너 */}
      <div
        className="relative h-[420px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/products-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CURAEL 제품</h1>
            <p className="text-lg md:text-xl">CURAEL의 다양한 제품을 확인하세요</p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen bg-white pt-28 pb-16 xl:px-32 2xl:px-48">
        <div className="flex gap-12">
          <aside className="w-48 flex-shrink-0">
            <h3 className="text-sm font-semibold mb-4">제품 카테고리</h3>
            <div className="flex flex-col gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`text-left px-4 py-2 text-sm border rounded-md transition
                    ${
                      selectedCategory === category
                        ? "border-green-700 text-green-700 font-semibold"
                        : "border-gray-300 text-gray-500 hover:text-green-700 hover:border-green-500"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          <main className="flex-1">
            <p className="text-sm text-gray-500 mb-6">
              총 {filteredProducts.length}개의 제품이 있습니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-4">
              {paginatedProducts.map((product, index) => (
                <Link key={index} to={`/products/${product.slug}`}>
                  <div
                    className={`bg-[#FFF9F4] rounded-xl p-4 text-center transition-all duration-700 ease-out transform
                      ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                      hover:shadow-md mx-auto w-full max-w-[290px]`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-44 h-44 object-contain mx-auto mb-4"
                    />
                    <div className="text-base text-gray-400 mb-1">{product.category}</div>
                    <h3 className="text-lg text-gray-800 font-semibold">{product.name}</h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* 페이지네이션 버튼 */}
            <div className="flex justify-center mt-10 gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-8 h-8 rounded-full text-sm font-medium ${
                    currentPage === i + 1
                      ? "bg-green-700 text-white"
                      : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </main>
        </div>
      </div>

      <FooterCompact />
    </motion.div>
  );
};

export default ProductList;
