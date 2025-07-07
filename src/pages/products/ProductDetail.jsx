import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import SubPageBanner from "../../components/SubPageBanner";
import SubPageNav from "../../components/SubPageNav";
import Footer from "../../components/Footer";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);
  const [mainImage, setMainImage] = useState(
    Array.isArray(product.image) ? product.image[0] : product.image
  );

  if (!product) return <div className="text-center py-20">제품을 찾을 수 없습니다.</div>;

  const isBook = product.category === "서적";

  return (
    <>
      <SubPageBanner page="products" />
      <SubPageNav page="products" />

      <section className="text-center pt-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{product.category}</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-12" />
      </section>

      <div className="max-w-7xl mx-auto px-4 py-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* 이미지 영역 */}
          <div>
            <div className="border rounded overflow-hidden">
              <img
                src={mainImage}
                alt={product.name}
                className={`w-full object-contain transition-all duration-500 ease-in-out max-h-[500px] ${isBook ? "md:max-h-[400px]" : ""}`}
              />
            </div>
            {Array.isArray(product.image) && (
              <div className="flex gap-2 mt-4 flex-wrap">
                {product.image.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`thumb-${idx}`}
                    className={`w-20 h-20 object-contain border cursor-pointer transition-all duration-300 ${
                      mainImage === img ? "ring-2 ring-green-500" : ""
                    }`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* 정보 영역 */}
          <div className="flex flex-col justify-start">
            <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-3">
              {product.name}
            </h3>
            <div className="border-b border-black mb-6" />

            {isBook ? (
              <>
                <p className="text-gray-600 mb-3 text-sm md:text-base">저자: {product.author}</p>
                <p className="text-gray-600 mb-3 text-sm md:text-base">출판사: {product.publisher}</p>
                <p className="text-gray-700 my-4 text-sm md:text-base whitespace-pre-line">
                  {product.description}
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-700 mb-3 text-sm md:text-base">
                  <strong>원재료명 및 함량:</strong> {product.ingredients}
                </p>
                <p className="text-gray-700 mb-3 text-sm md:text-base">
                  <strong>내용량:</strong> {product.volume}
                </p>
                <p className="text-gray-700 mb-3 text-sm md:text-base">
                  <strong>섭취방법:</strong> {product.usage}
                </p>
                <p className="text-gray-700 mb-3 text-sm md:text-base">
                  <strong>유통기한:</strong> {product.expiration}
                </p>
                <p className="text-gray-700 mb-6 text-sm md:text-base">
                  <strong>보관방법:</strong> {product.storage}
                </p>
              </>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => window.open(product.link, "_blank")}
                className="bg-green-600 text-white px-6 py-3 rounded text-base font-semibold hover:bg-green-700 w-full sm:w-48"
              >
                제품 구매하기
              </button>
              <button
                onClick={() => navigate("/products")}
                className="bg-gray-600 text-white px-6 py-3 rounded text-base font-semibold hover:bg-gray-700 w-full sm:w-48"
              >
                목록
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
