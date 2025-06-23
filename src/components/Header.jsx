import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 좌측 로고 */}
        <a href="/">
          <img src="/images/SymbolMark.png" alt="CURAEL Logo" className="h-9 cursor-pointer" />
        </a>

        {/* 우측 메뉴 */}
        <nav className="space-x-14 text-lg font-semibold">
          <a href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
            회사소개
          </a>
          <a href="/brands" className="text-gray-700 hover:text-green-600 transition-colors">
            브랜드&제품
          </a>
          <a href="/consult" className="text-gray-700 hover:text-green-600 transition-colors">
            열방상담소
          </a>
          <a href="/rnd" className="text-gray-700 hover:text-green-600 transition-colors">
            R&D
          </a>
        </nav>
      </div>
    </header>
  );
}
