import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; // ✅ 추가


export default function MobileMenu({ navItems, onClose, isExiting, setIsExiting }) {
  const [openIndex, setOpenIndex] = useState(null);
  

  const getLinkPath = (label, subLabel) => {
    if (label === "회사 소개" && subLabel === "회사 소개") return "/company"; // 또는 "/company/overview"
    if (subLabel === "인사말") return "/company/greeting";
    if (subLabel === "비전") return "/company/vision";

    if (subLabel === "전체 제품") return "/products";
    if (subLabel === "베지셀") return "/products/vegicel";
    if (subLabel === "자연하") return "/products/jayeonha";
    if (subLabel === "서적") return "/products/books";

    if (subLabel === "열방 약국") return "/consult";
    if (subLabel === "위치 안내") return "/consult/location";

    if (subLabel === "문의 안내") return "/inquiry";
    if (subLabel === "연구 개발") return "/rnd";

    return "#";
  };


  return (
    <AnimatePresence>
      <motion.div
        key="mobile-menu-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 top-[88px] z-40 flex"
      >
        {/* 어두운 배경 */}
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/50 z-40"
          onClick={() => setIsExiting(true)}
        />

        {/* 메뉴 패널 */}
        <motion.div
          key="menu"
          initial={{ x: "100%" }}
          animate={{ x: isExiting ? "100%" : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onAnimationComplete={() => {
            if (isExiting) {
              setIsExiting(false);
              onClose();
            }
          }}
          className="absolute right-0 top-0 w-full bg-white shadow-lg z-50 h-auto"
        >
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
                          <Link
                            to={getLinkPath(item.label, sub)}
                            onClick={() => setIsExiting(true)}
                            className="block w-full"
                          >
                            {sub}
                          </Link>
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
