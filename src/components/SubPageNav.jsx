import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import subPageData from "../data/subPageData";
import { ChevronDown, Home } from "lucide-react";

export default function SubPageNav() {
  const location = useLocation();
  const pathname = location.pathname;

  const topMenu = [
    { label: "회사소개", href: "/company" },
    { label: "제품소개", href: "/products" },
    { label: "열방상담소", href: "/consult" },
    { label: "연구/개발", href: "/rnd" },
    { label: "문의안내", href: "/inquiry" },
  ];

  const currentKey = Object.keys(subPageData).find((key) =>
    subPageData[key].tabs.some((tab) => pathname.startsWith(tab.href))
  );
  const currentCategory = currentKey ? subPageData[currentKey] : null;
  if (!currentCategory) return null;

  const currentTab = currentCategory.tabs.find((tab) => pathname === tab.href);

  const [isTopOpen, setTopOpen] = useState(false);
  const [isSubOpen, setSubOpen] = useState(false);

  return (
    <div className="bg-[#FFF4EC] border-t border-gray-200 shadow-sm z-50 h-[52px] md:h-[72px]">
  <ul className="max-w-screen-xl mx-auto flex items-center text-[13px] md:text-[15px] h-full">
    {/* HOME 버튼 */}
    <li className="home w-16 md:w-20 h-full bg-green-600 flex items-center justify-center">
      <Link to="/">
        <Home size={20} className="text-white" />
      </Link>
    </li>

    {/* 상위 메뉴 */}
    <li
      className="relative h-full flex items-center border-l border-gray-200 cursor-pointer w-[150px] md:w-[260px] px-4 md:px-6"
      onMouseEnter={() => setTopOpen(true)}
      onMouseLeave={() => setTopOpen(false)}
    >
      <span className="mr-1 text-gray-800">{currentCategory.title}</span>
      <ChevronDown size={16} className="text-gray-600" />

      {isTopOpen && (
        <div className="absolute top-full left-0 w-[150px] md:w-[260px] bg-white border border-gray-200 shadow-md z-50">
          {topMenu.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className={`block px-4 md:px-6 py-3 md:py-4 text-[13px] md:text-[15px] hover:bg-gray-100 ${
                pathname.startsWith(item.href)
                  ? "text-green-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </li>

    {/* 하위 메뉴 */}
    <li
      className="relative h-full flex items-center border-l border-gray-200 cursor-pointer w-[180px] md:w-[260px] px-4 md:px-6"
      onMouseEnter={() => setSubOpen(true)}
      onMouseLeave={() => setSubOpen(false)}
    >
      <span className="mr-1 text-gray-800">
        {currentTab?.label || currentCategory.title}
      </span>
      <ChevronDown size={16} className="text-gray-600" />

      {isSubOpen && (
        <div className="absolute top-full left-0 w-[185px] md:w-[260px] bg-white border border-gray-200 shadow-md z-50">
          {currentCategory.tabs.map((tab, idx) => (
            <Link
              key={idx}
              to={tab.href}
              className={`block px-4 md:px-6 py-3 md:py-4 text-[13px] md:text-[15px] hover:bg-gray-100 ${
                pathname === tab.href
                  ? "text-green-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  </ul>
</div>
  );
}
