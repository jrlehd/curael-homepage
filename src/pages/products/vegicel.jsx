import React, { useState } from "react";
import SubPageBanner from "../../components/SubPageBanner";
import SubPageNav from "../../components/SubPageNav";
import Footer from "../../components/Footer";
import { products } from "../../data/products";
import { Link } from "react-router-dom";

const Vegicel = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("전체");

  const filtered = products.filter((p) => {
    if (p.category !== "VEGICEL") return false;
    if (!search) return true;
    if (filter === "제품명") return p.name.includes(search);
    if (filter === "내용") return p.description?.includes(search);
    return p.name.includes(search) || p.description?.includes(search);
  });

  return (
    <>
      <SubPageBanner page="products" />
      <SubPageNav page="products" />

      <section className="text-center pt-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">베지셀</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-12" />
      </section>

      <div className="flex justify-center mb-4 px-4">
        <div className="flex flex-wrap justify-center gap-2 w-full max-w-xl">
          <select
            className="border border-gray-300 rounded px-3 py-2.5 text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>전체</option>
            <option>제품명</option>
            <option>내용</option>
          </select>
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
              <h3 className="text-base font-semibold text-gray-800">
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

export default Vegicel;