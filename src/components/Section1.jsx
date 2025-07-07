import { useEffect, useState, useRef } from "react";

const slides = [
  {
    image: "/images/slide1.png",
    link: "/about",
  },
  {
    image: "/images/slide2.png",
    link: "/about",
  },
  {
    image: "/images/slide3.png",
    link: "/about",
  },
];

export default function Section1() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  const handleDotClick = (index) => {
    setCurrent(index);
    startAutoSlide();
  };

  return (
    <section className="relative h-screen overflow-hidden select-none">
      {/* 이미지 슬라이드 */}
      {slides.map((slide, index) => (
        <a
          href={slide.link}
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40" />
        </a>
      ))}

      {/* 고정 텍스트 */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4 text-white">
        {/* ① CURAEL (작고 굵게) */}
        <p
          className="text-xs md:text-sm mb-3 tracking-widest"
          style={{ fontFamily: "'Nanum Gothic'", fontWeight: 800 }}
        >
          CURAEL
        </p>

        {/* ② 대표 문구 (가장 크게, 일부 단어만 Extrabold) */}
        <h2
          className="text-3xl md:text-5xl leading-snug tracking-tight mb-5"
          style={{ fontFamily: "'Nanum Gothic'", fontWeight: 400 }}
        >
          From <strong style={{ fontWeight: 800 }}>Nature</strong> To{" "}
          <strong style={{ fontWeight: 800 }}>Cure</strong>
        </h2>

        {/* ③ 설명 문구 (중간 크기, regular) */}
        <p
          className="text-sm md:text-3xl leading-relaxed max-w-xl opacity-90"
          style={{ fontFamily: "'Nanum Gothic'", fontWeight: 500 }}
        >
          자연에서 답을 찾다
        </p>
      </div>

      {/* 하단 인디케이터 */}
      <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 flex items-center space-x-4 text-white z-30">
        <span className="opacity-70 text-sm font-medium">
          {String(current + 1).padStart(2, "0")} | {String(slides.length).padStart(2, "0")}
        </span>
        <div className="flex space-x-2 ml-4">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${
                current === i ? "bg-white scale-110" : "bg-transparent"
              }`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
