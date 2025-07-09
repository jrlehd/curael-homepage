// FloatingBanner.jsx
import React, { useEffect, useState } from "react";

const FloatingBanner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [bottomOffset, setBottomOffset] = useState(24);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const banner = document.getElementById("floating-banner");

      if (footer && banner) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const buffer = 24;

        if (footerTop < windowHeight - buffer) {
          const overlap = windowHeight - footerTop + buffer;
          setBottomOffset(overlap);
        } else {
          setBottomOffset(24);
        }
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
  }, []);

  if (isMobile) {
    return (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg z-50"
      >
        ↑
      </button>
    );
  }

  return (
    <div
      id="floating-banner"
      className="fixed right-2 z-50 flex flex-col overflow-hidden border border-gray-300 rounded-sm bg-white shadow-xl"
      style={{ bottom: bottomOffset }}
    >
      <a
        href="https://mkt.shopping.naver.com/link/683fa040b7c8c573b305dbdc"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-4 py-3 border-b border-gray-200 text-sm hover:bg-gray-100"
      >
        베지셀 스토어
      </a>
      <a
        href="https://mkt.shopping.naver.com/link/68215855814c2c37cf00102b"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-4 py-3 border-b border-gray-200 text-sm hover:bg-gray-100"
      >
        자연하 스토어
      </a>
      <a
        href="https://pf.kakao.com/_Apnys"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-16 flex items-center justify-center border-b border-gray-200 hover:bg-yellow-100"
        >
        <img
            src="/images/kakao-icon.png"
            alt="카카오톡 채널"
            className="w-6 h-6"
        />
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
