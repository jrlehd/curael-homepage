export default function Section4() {
  const researchItems = [
    {
      title: "신약 연구",
      desc: (
        <>
          항암 및 면역 질환 치료를 위한<br />혁신적인 신약을 연구합니다.
        </>
      ),
      icon: "/images/icon1.png",
    },
    {
      title: "식품 연구",
      desc: (
        <>
          건강기능식품 개발을 위한<br />영양과 기능성 소재를 연구합니다.
        </>
      ),
      icon: "/images/icon2.png",
    },
  ];

  return (
    <section className="relative w-full h-[100svh] md:min-h-screen overflow-hidden font-sans">
      {/* 데스크톱용 배경 (2열) */}
      <div className="absolute inset-0 z-0 hidden md:grid grid-cols-2">
        <div
          className="bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/rnd1.png')" }}
        />
        <div
          className="bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/rnd-banner.png')" }}
        />
      </div>

      {/* 모바일용 배경 (단일 이미지) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: "url('/images/rnd-banner.png')" }}
      />

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* 콘텐츠 */}
      <div className="relative z-20 w-full h-full px-4 md:px-12 text-white flex">
        <div
          className="max-w-6xl mx-auto text-center w-full
                    flex flex-col justify-center
                    pt-24 md:pt-[200px] pb-8 md:pb-[100px]"
        >
          {/* 타이틀: 간격 축소 + 살짝 하강으로 상단 선 침범 방지 */}
          <p
            className="text-xs md:text-base tracking-widest mb-1 md:mb-2"
            style={{ fontWeight: 400 }}
          >
            RESEARCH AND DEVELOPMENT
          </p>
          <h2 className="text-[22px] md:text-[48px] font-bold mb-6 md:mb-16">
            연구/개발
          </h2>

          {/* 아이템 영역: 간격 촘촘하게 + 모바일 중앙 정렬 유지 */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-white/30 gap-6 md:gap-0">
            {researchItems.map((item, idx) => (
              <div
                key={idx}
                className={`px-4 md:px-6
                            text-center md:text-left
                            flex flex-col items-center md:items-start
                            ${idx === 0 ? "md:items-end md:pr-16" : "md:items-start md:pl-16"}`}
              >
                <img src={item.icon} alt="icon" className="w-8 h-8 md:w-14 md:h-14 mb-3 md:mb-6" />
                <h3 className="text-[18px] md:text-[30px] font-semibold mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-xs md:text-base leading-snug md:leading-relaxed opacity-90 text-center md:text-left">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA: 간격 살짝만 */}
          <div className="mt-8 md:mt-12">
            <button
              className="px-6 py-3 text-xs md:text-base border border-white text-white font-semibold rounded-full
                        hover:bg-white hover:text-black transition duration-300 ease-in-out"
              onClick={() => (window.location.href = "/rnd")}
            >
              자세히 보기 →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
