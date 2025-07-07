import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileMenu({ navItems, onClose }) {
  const [openIndex, setOpenIndex] = useState(null);

  const getLinkPath = (label, subLabel) => {
    return (
      (subLabel === "회사소개" && "/company") ||
      (subLabel === "인사말" && "/company/greeting") ||
      (subLabel === "비전" && "/company/vision") ||
      (subLabel === "전체제품" && "/products") ||
      (subLabel === "베지셀" && "/products/vegicel") ||
      (subLabel === "자연하" && "/products/jayeonha") ||
      (subLabel === "서적" && "/products/books") ||
      (subLabel === "열방상담소" && "/consult") ||
      (subLabel === "위치안내" && "/consult/location") ||
      (subLabel === "문의안내" && "/inquiry") ||
      (subLabel === "연구/개발" && "/rnd") ||
      "#"
    );
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="mobile-menu-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 z-50"
      >
        {/* 어두운 투명 배경 (헤더 제외한 영역) */}
        <div className="absolute top-[64px] bottom-0 inset-x-0 bg-black/60 -z-10" />

        {/* 메뉴 패널 */}
        <motion.div
          key="mobile-menu"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute top-[64px] inset-x-0 bottom-0 bg-white overflow-y-auto"
        >
          {/* 헤더와 메뉴 사이 구분선 */}
          <div className="border-t border-gray-300" />

          <ul className="divide-y divide-gray-200">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-full flex justify-between items-center py-4 px-5 font-normal text-base text-left transition-colors duration-200 ${
                    openIndex === idx ? "bg-green-600 text-white" : "bg-white text-gray-800"
                  }`}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  {item.label}
                  <span className="text-sm">{openIndex === idx ? "▴" : "▾"}</span>
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-gray-100 text-gray-700 text-[14px] px-6"
                    >
                      {item.submenu.map((sub, subIdx) => (
                        <li key={subIdx} className="py-3 px-2 border-b">
                          <a
                            href={getLinkPath(item.label, sub)}
                            onClick={onClose}
                            className="block w-full"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}