import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import { Sling as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // ✅ 현재 경로가 홈(/)인지 체크
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window.location.pathname === "/");
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 1025);
    };
    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const navItems = [
    { label: "회사 소개", submenu: ["회사소개", "인사말", "비전"] },
    { label: "제품 소개", submenu: ["전체제품", "베지셀", "자연하", "서적"] },
    { label: "열방상담소", submenu: ["열방상담소", "위치안내"] },
    { label: "연구 개발", submenu: ["연구/개발"] },
    { label: "문의 안내", submenu: ["문의안내"] },
  ];

  // ✅ 홈(/) + 모바일일 때만 hovered 무시
  const isActiveHeader =
    isHome && isMobile
      ? scrolled || mobileMenuOpen
      : scrolled || hovered || mobileMenuOpen;

  const headerClass = `fixed top-0 left-0 w-full z-50 border-b transition-all duration-300
    ${
      isActiveHeader
        ? "bg-white text-black border-gray-200 shadow-sm"
        : "bg-transparent text-white border-white/30"
    }`;

  const getFontSize = () => {
    if (windowWidth > 1300) return "17px";
    if (windowWidth > 1200) return "16px";
    if (windowWidth > 1100) return "15px";
    if (windowWidth > 1025) return "14px";
    return "13px";
  };

  const getGap = () => {
    if (windowWidth > 1300) return "5rem";
    if (windowWidth > 1200) return "4rem";
    if (windowWidth > 1100) return "3.5rem";
    if (windowWidth > 1025) return "3rem";
    return "2rem";
  };

  return (
    <header className={headerClass}>
      <div
        className={`w-full px-4 md:px-8 ${
          isMobile ? "py-5 min-h-[60px]" : "py-9 min-h-[80px]"
        } flex items-center justify-between`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setHoveredIndex(null);
        }}
      >
        {/* 로고 */}
        <div className="shrink-0">
          <a href="/">
            <img
              src={
                isActiveHeader
                  ? "/images/SymbolMark.png"
                  : "/images/SymbolMark_dark.png"
              }
              alt="Logo"
              className={`transition-all duration-300 ${
                isMobile ? "h-6" : "h-12"
              }`}
            />
          </a>
        </div>

        {/* 데스크탑 메뉴 */}
        {!isMobile && (
          <motion.nav
            className="flex flex-grow justify-center"
            animate={hasMounted ? { gap: hovered ? "6rem" : getGap() } : false}
            transition={{ duration: hasMounted ? 0.4 : 0 }}
          >
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                label={item.label}
                submenu={item.submenu}
                textColor={isActiveHeader ? "text-black" : "text-white"}
                fontWeight="font-medium"
                textSize="text-inherit"
                customStyle={{ fontSize: getFontSize() }}
                disableHover={false}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
          </motion.nav>
        )}

        {/* 햄버거 메뉴 (모바일 전용) */}
        {isMobile && (
          <div className="shrink-0">
            <Hamburger
              toggled={mobileMenuOpen}
              toggle={(val) => {
                if (!val) {
                  if (isHome && isMobile) setHovered(false); // ✅ 모바일 홈일 때 닫으면 hover 잔상 제거
                  setIsExiting(true);
                } else {
                  if (isHome && isMobile) setHovered(false); // ✅ 열 때도 초기화
                  setMobileMenuOpen(true);
                }
              }}
              size={36}
              color={isActiveHeader ? "#000" : "#fff"}
              rounded
              duration={0.4}
            />
          </div>
        )}
      </div>

      {/* 모바일 메뉴 렌더링 */}
      <AnimatePresence>
        {(mobileMenuOpen || isExiting) && isMobile && (
          <MobileMenu
            navItems={navItems}
            onClose={() => setMobileMenuOpen(false)}
            isExiting={isExiting}
            setIsExiting={setIsExiting}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
