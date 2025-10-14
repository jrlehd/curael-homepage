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
      bg: "/images/rnd1.png",
    },
    {
      title: "식품 연구",
      desc: (
        <>
          건강기능식품 개발을 위한<br />영양과 기능성 소재를 연구합니다.
        </>
      ),
      icon: "/images/icon2.png",
      bg: "/images/rnd-banner.png",
    },
  ];

  return (
    <section className="relative w-full h-[100svh] md:min-h-screen overflow-hidden font-sans">
      {/* ===== 데스크톱용 (2열 배경 + 공통 콘텐츠) ===== */}
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

      {/* ===== 데스크톱용 어두운 오버레이 ===== */}
      <div className="absolute inset-0 bg-black opacity-50 z-10 hidden md:block" />

      {/* ===== 데스크톱 콘텐츠 ===== */}
      <div className="hidden md:block relative z-20 w-full pt-[200px] pb-[100px] px-12 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-base tracking-widest mb-2" style={{ fontWeight: 400 }}>
            RESEARCH AND DEVELOPMENT
          </p>
          <h2 className="text-[48px] font-bold mb-16">연구/개발</h2>

          <div className="grid grid-cols-2 divide-x divide-white/30">
            {researchItems.map((item, idx) => (
              <div
                key={idx}
                className={`px-6 ${
                  idx === 0
                    ? "items-end pr-16 text-right"
                    : "items-start pl-16 text-left"
                } flex flex-col justify-center min-h-[45vh]`}
              >
                <img src={item.icon} alt="icon" className="w-14 h-14 mb-6" />
                <h3 className="text-[30px] font-semibold mb-3">{item.title}</h3>
                <p className="text-base leading-relaxed opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button
              className="px-6 py-3 text-base border border-white rounded-full font-semibold hover:bg-white hover:text-black transition"
              onClick={() => (window.location.href = "/rnd")}
            >
              자세히 보기 →
            </button>
          </div>
        </div>
      </div>

      {/* ===== 모바일용 (각 섹션 분리) ===== */}
      <div className="md:hidden text-white">
        {/* 타이틀 블록 */}
        <div className="relative z-20 text-center pt-24 px-4 mt-4">
          <p
            className="text-xs tracking-widest mb-2"
            style={{ fontWeight: 400 }}
          >
            RESEARCH AND DEVELOPMENT
          </p>
          <h2 className="text-[24px] font-bold mb-6">연구/개발</h2>
        </div>

        {/* 각 연구 항목별 블록 */}
        {researchItems.map((item, index) => (
          <div key={index} className="relative h-[50svh]">
            {/* 배경 */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.bg})` }}
            />
            <div className="absolute inset-0 bg-black/50" />

            {/* 콘텐츠 */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
              <img src={item.icon} alt="" className="w-9 h-9 mb-4" />
              <h3 className="text-[20px] font-semibold mb-2">{item.title}</h3>
              <p className="text-xs leading-relaxed opacity-90">{item.desc}</p>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center py-6">
          <button
            className="px-6 py-3 text-xs border border-white rounded-full font-semibold hover:bg-white hover:text-black transition"
            onClick={() => (window.location.href = "/rnd")}
          >
            자세히 보기 →
          </button>
        </div>
      </div>
    </section>
  );
}
