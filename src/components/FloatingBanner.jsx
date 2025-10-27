import React, { useEffect, useState } from "react";

const FloatingBanner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [bottomOffset, setBottomOffset] = useState(24);
  const [topOffset, setTopOffset] = useState("50%");

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
    };

    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const banner = document.getElementById("floating-banner");
      const mainBanner = document.querySelector(".main-banner");
      const subNav = document.querySelector(".subpage-nav");
      const windowHeight = window.innerHeight;
      const buffer = 24;

      if (isMobile) {
        if (footer && banner) {
          const footerTop = footer.getBoundingClientRect().top;
          if (footerTop < windowHeight - buffer) {
            const overlap = windowHeight - footerTop + buffer;
            setBottomOffset(overlap);
          } else {
            setBottomOffset(24);
          }
        }
      } else {
        let adjustedTop = window.innerHeight / 2;

        if (mainBanner) {
          const mainBottom = mainBanner.getBoundingClientRect().bottom;
          if (mainBottom > adjustedTop) {
            adjustedTop = mainBottom + 20;
          }
        }

        if (subNav) {
          const subNavBottom = subNav.getBoundingClientRect().bottom;
          if (subNavBottom > adjustedTop) {
            adjustedTop = subNavBottom + 20;
          }
        }

        setTopOffset(`${adjustedTop}px`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-6 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg z-50"
        style={{ bottom: bottomOffset }}
      >
        ↑
      </button>
    );
  }

  return (
    <div
      id="floating-banner"
      className="fixed right-2 z-50 flex flex-col overflow-hidden border border-gray-300 rounded-sm bg-white shadow-xl"
      style={{ top: topOffset }}
    >
      <a
        href="https://mkt.shopping.naver.com/link/683fa040b7c8c573b305dbdc"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-4 py-3 border-b border-gray-200 text-sm hover:bg-gray-100"
      >
        베지셀 쇼핑몰
      </a>
      <a
        href="https://mkt.shopping.naver.com/link/68215855814c2c37cf00102b"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-4 py-3 border-b border-gray-200 text-sm hover:bg-gray-100"
      >
        자연하 쇼핑몰
      </a>
      <a
        href="https://pf.kakao.com/_Apnys"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-4 py-3 border-b border-gray-200 text-sm hover:bg-gray-100"
      >
        카카오톡 채널
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center justify-center px-4 py-3 text-sm hover:bg-gray-100"
      >
        ↑ TOP
      </button>
    </div>
  );
};

export default FloatingBanner;
