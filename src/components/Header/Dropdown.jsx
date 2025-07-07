import React from "react";

const Dropdown = ({ items = [], isOpen }) => {
  if (!items || items.length === 0) return null;

  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 z-40 min-w-[160px] bg-white shadow-md rounded-md transition-all duration-200 ease-in-out
        ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}
      onMouseEnter={(e) => e.stopPropagation()}
    >
      <ul className="py-3">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={
                item === "회사소개"
                  ? "/company"
                  : item === "인사말"
                  ? "/company/greeting"
                  : item === "비전"
                  ? "/company/vision"
                  : item === "전체제품"
                  ? "/products"
                  : item === "베지셀"
                  ? "/products/vegicel"
                  : item === "자연하"
                  ? "/products/jayeonha"
                  : item === "서적"
                  ? "/products/books"
                  : item === "열방상담소"
                  ? "/consult"
                  : item === "위치안내"
                  ? "/consult/location"
                  : item === "문의안내"
                  ? "/inquiry"
                  : item === "연구/개발"
                  ? "/rnd"
                  : "#"
              }
              className="block px-5 py-3 text-[16px] text-gray-800 font-medium hover:bg-gray-100 transition-all duration-200 text-center"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;