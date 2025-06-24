import { useEffect, useState, useRef } from "react";

const slides = [
  {
    image: "/images/slide1.png",
    title: "STEP TOWARD HEALING",
    description: "치유의 지름길은 변화를 향한 첫걸음입니다.",
    link: "/about",
  },
  {
    image: "/images/slide2.png",
    title: "NATURE’S BLUEPRINT",
    description: "자연의 원형으로 몸과 삶을 다시 설계합니다.",
    link: "/about",
  },
  {
    image: "/images/slide3.png",
    title: "RELENTLESS CHANGE",
    description: "포기하지 않는 변화, 암도 이겨낼 수 있습니다.",
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
    }, 9000);
  };

  const handleDotClick = (index) => {
    setCurrent(index);
    startAutoSlide();
  };

  return (
    <section className="relative h-screen overflow-hidden font-sans select-none">
      {slides.map((slide, index) => (
        <a
          href={slide.link}
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${
            index === current ? "opacity-100 z-10 animate-zoom-out-slow" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "block"
          }}
        ></a>
      ))}

      <div className="absolute z-20 top-1/2 left-[50%] transform -translate-y-1/2 text-white text-left max-w-xl">
        <h2
          className="text-6xl font-extrabold mb-6 leading-tight drop-shadow-xl tracking-tight"
          style={{ fontFamily: "'Noto Sans KR ExtraBold'" }}
        >
          {slides[current].title}
        </h2>
        <p className="text-lg leading-relaxed drop-shadow-md max-w-lg">
          {slides[current].description}
        </p>
      </div>

      {/* ◉ 인디케이터 (텍스트 아래 고정 위치) */}
      <div className="absolute left-[50%] bottom-[30%] flex items-center space-x-4 text-sm text-white z-30">
        <span className="opacity-60 font-normal">{String(current + 1).padStart(2, "0")}</span>
        <span className="opacity-60">|</span>
        <span className="opacity-60">{String(slides.length).padStart(2, "0")}</span>
        <div className="flex space-x-2 ml-4">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full border border-white ${
                current === i ? "bg-white" : "bg-transparent"
              }`}
              onClick={() => handleDotClick(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
