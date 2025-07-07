import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { label: "회사소개", submenu: ["회사소개", "인사말", "비전"] },
    { label: "제품소개", submenu: ["전체제품", "베지셀", "자연하", "서적"] },
    { label: "열방상담소", submenu: ["열방상담소", "위치안내"] },
    { label: "연구/개발", submenu: ["연구/개발"] },
    { label: "문의안내", submenu: ["문의안내"] },
  ];

  const headerClass = `fixed top-0 left-0 w-full z-50 border-b transition-all duration-300
    ${scrolled || hovered || mobileMenuOpen ? "bg-white text-black border-gray-200 shadow-sm" : "bg-transparent text-white border-white/30"}`;

  return (
    <header className={headerClass}>
      <div
        className={`w-full px-4 md:px-8 ${
          isMobile ? "py-5 min-h-[60px]" : "py-9 min-h-[80px]"
        } flex items-center justify-between relative`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setHoveredIndex(null);
        }}
      >
        {/* 로고 */}
        <a href="/" className="ml-12">
          <img
            src={scrolled || hovered || mobileMenuOpen ? "/images/SymbolMark.png" : "/images/SymbolMark_dark.png"}
            alt="Logo"
            className={`transition-all duration-300 ${isMobile ? "h-6" : "h-12"}`}
          />
        </a>

        {/* 데스크탑 메뉴 */}
        {!isMobile && (
          <motion.nav
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-x-[5rem]"
            animate={{ gap: hovered ? "6rem" : "5rem" }}
            transition={{ duration: 0.4 }}
          >
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                label={item.label}
                submenu={item.submenu}
                textColor={scrolled || hovered || mobileMenuOpen ? "text-black" : "text-white"}
                fontWeight="font-medium"
                textSize="text-[17px]"
                disableHover={false}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
          </motion.nav>
        )}

        {/* 햄버거 메뉴 (모바일 전용) */}
        {isMobile && (
          <div className="absolute right-12 top-1/2 -translate-y-1/2 z-[999]">
            <Hamburger
              toggled={mobileMenuOpen}
              toggle={(val) => {
                setMobileMenuOpen(val);
                setHovered(val); // 강제로 hovered true 유지
              }}
              size={36}
              color={scrolled || mobileMenuOpen ? "#000" : "#fff"} // 흰색 → 열렸을 때 검정
              rounded
              duration={0.4}
            />
          </div>
        )}
      </div>

      {/* 모바일 메뉴 */}
      {mobileMenuOpen && isMobile && (
        <MobileMenu navItems={navItems} onClose={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
}
