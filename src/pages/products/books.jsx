import React, { useState } from "react";
import SubPageBanner from "../../components/SubPageBanner";
import SubPageNav from "../../components/SubPageNav";
import Footer from "../../components/Footer";
import { products } from "../../data/products";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo";

const Books = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("전체");

  const filtered = products.filter((p) => {
    if (p.category !== "서적") return false;
    if (!search) return true;
    if (filter === "제품명") return p.name.includes(search);
    if (filter === "내용") return p.description?.includes(search);
    return p.name.includes(search) || p.description?.includes(search);
  });

  return (
    <>
    <Seo title="서적" description="암 관리와 건강에 관한 큐라엘의 지식과 경험을 담은 서적." />

      <SubPageBanner page="products" />
      <SubPageNav page="products" />

      <section className="text-center pt-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">서적</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-12" />
      </section>

      <div className="flex justify-center mb-4 px-4">
        <div className="flex flex-wrap justify-center gap-2 w-full max-w-xl">
          {/* Select + custom 화살표 */}
          <div className="relative">
            <select
              className="appearance-none border border-gray-300 rounded px-4 py-2.5 text-sm bg-white pr-10"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>전체</option>
              <option>제품명</option>
              <option>내용</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 px-4 py-2.5 rounded text-sm flex-1 min-w-0"
          />
          <button className="bg-gray-800 text-white px-5 py-2.5 rounded text-sm whitespace-nowrap">
            검색
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600 mb-4">
        Total {filtered.length}, Page 1
      </div>
      <div className="max-w-6xl mx-auto border-b border-black mb-10 px-4" />

      <section className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 pb-20">
        {filtered.map((product) => (
          <Link
            to={`/products/${product.slug}`}
            key={product.slug}
            className="group shadow hover:shadow-lg rounded overflow-hidden text-center bg-white"
          >
            <div className="overflow-hidden bg-white">
              <img
                src={Array.isArray(product.image) ? product.image[0] : product.image}
                alt={product.name}
                className="w-full aspect-[4/3] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-[10.5px] md:text-sm font-semibold text-gray-800">
                {product.name}
              </h3>
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default Books;