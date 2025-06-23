import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import FooterCompact from "../components/FooterCompact";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  const imageArray = Array.isArray(product.image) ? product.image : [product.image];
  const [selectedImage, setSelectedImage] = useState(imageArray[0]);

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500">
        해당 제품을 찾을 수 없습니다.
      </div>
    );
  }

  const Banner = () => (
    <motion.div
      className="relative h-[420px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/products-banner.png')" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CURAEL 제품</h1>
          <p className="text-lg md:text-xl">CURAEL의 다양한 제품을 확인하세요</p>
        </div>
      </div>
    </motion.div>
  );

  if (product.category === "서적") {
    return (
      <div className="flex flex-col min-h-screen">
        <Banner />
        <main className="flex-grow w-full bg-white pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col items-center">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full max-w-[400px] h-auto object-contain rounded-xl shadow-lg"
              />
              {imageArray.length > 1 && (
                <div className="flex gap-2 mt-4">
                  {imageArray.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${product.name}-${idx}`}
                      onClick={() => setSelectedImage(img)}
                      className={`w-16 h-16 object-cover rounded cursor-pointer border ${
                        selectedImage === img ? "border-green-600" : "border-gray-300"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{product.name}</h1>
              <p className="text-sm text-gray-700"><span className="font-semibold">저자:</span> {product.author}</p>
              <p className="text-sm text-gray-700"><span className="font-semibold">출판사:</span> {product.publisher}</p>
              <p className="text-base text-gray-800 leading-relaxed pt-4">{product.description}</p>

              {product.link && (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
                >
                  책 구매하러 가기
                </a>
              )}

              <div className="pt-6">
                <Link
                  to="/products"
                  className="inline-block text-sm text-gray-500 hover:text-gray-800"
                >
                  ← 제품 목록으로 돌아가기
                </Link>
              </div>
            </div>
          </div>
        </main>
        <FooterCompact />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <main className="flex-grow w-full bg-white pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-center">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full max-w-[400px] h-auto object-contain rounded-xl shadow-lg"
            />
            {imageArray.length > 1 && (
              <div className="flex gap-2 mt-4">
                {imageArray.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.name}-${idx}`}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 object-cover rounded cursor-pointer border ${
                      selectedImage === img ? "border-green-600" : "border-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{product.name}</h1>

            <table className="w-full text-sm text-left border-t border-b border-gray-200">
              <tbody>
                {product.volume && (
                  <tr className="border-b">
                    <th className="py-2 pr-4 font-semibold text-gray-700 w-1/3">용량</th>
                    <td className="py-2 text-gray-800">{product.volume}</td>
                  </tr>
                )}
                {product.ingredients && (
                  <tr className="border-b">
                    <th className="py-2 pr-4 font-semibold text-gray-700">주요 원료</th>
                    <td className="py-2 text-gray-800">{product.ingredients}</td>
                  </tr>
                )}
                {product.usage && (
                  <tr className="border-b">
                    <th className="py-2 pr-4 font-semibold text-gray-700">섭취 방법</th>
                    <td className="py-2 text-gray-800">{product.usage}</td>
                  </tr>
                )}
                {product.expiration && (
                  <tr className="border-b">
                    <th className="py-2 pr-4 font-semibold text-gray-700">소비기한</th>
                    <td className="py-2 text-gray-800">{product.expiration}</td>
                  </tr>
                )}
                {product.storage && (
                  <tr>
                    <th className="py-2 pr-4 font-semibold text-gray-700">보관 방법</th>
                    <td className="py-2 text-gray-800">{product.storage}</td>
                  </tr>
                )}
              </tbody>
            </table>

            <hr className="my-6 border-gray-200" />

            {product.link && (
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition"
              >
                제품 구매하기
              </a>
            )}

            <div>
              <Link
                to="/products"
                className="inline-block text-sm text-gray-500 hover:text-gray-800"
              >
                ← 제품 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </main>
      <FooterCompact />
    </div>
  );
}
