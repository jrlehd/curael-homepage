import React from "react";

export default function DesktopDropdown({ navItems, mode = "hover", hoveredIndex = null }) {
  const isHamburger = mode === "hamburger";

  return (
    <div className={`w-full bg-white text-gray-800 py-8 px-4 border-t ${isHamburger ? "" : "absolute top-full left-0"}`}>
      <div className="max-w-[1200px] mx-auto flex justify-center">
        {navItems.map((item, index) => {
          if (!isHamburger && index !== hoveredIndex) return null;

          const isVisible = isHamburger || index === hoveredIndex;

          return (
            <div
              key={index}
              className={`flex flex-col items-center mx-[53px] transition-opacity duration-200 ${
                isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              {item.submenu.map((subItem, subIndex) => (
                <a
                  key={subIndex}
                  href={
                    item.label === "회사소개"
                      ? subItem === "회사소개"
                        ? "/company"
                        : subItem === "인사말"
                        ? "/company/greeting"
                        : subItem === "비전"
                        ? "/company/vision"
                        : "#"
                      : item.label === "제품소개"
                      ? subItem === "전체제품"
                        ? "/products"
                        : subItem === "베지셀"
                        ? "/products/vegicel"
                        : subItem === "자연하"
                        ? "/products/jayeonha"
                        : subItem === "서적"
                        ? "/products/books"
                        : "#"
                      : item.label === "열방 약국"
                      ? subItem === "열방 약국"
                        ? "/consult"
                        : subItem === "위치안내"
                        ? "/consult/location"
                        : "#"
                      : item.label === "문의 안내"
                      ? subItem === "문의 안내"
                        ? "/inquiry"
                        : "#"
                      : item.label === "연구 개발"
                      ? "//rnd"
                      : "#"
                  }
                  className="py-3 text-[15px] hover:text-black hover:font-semibold transition-colors duration-200"
                >
                  {subItem}
                </a>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
