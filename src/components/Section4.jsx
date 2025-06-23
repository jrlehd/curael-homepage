export default function Section4() {
  const researchItems = [
    {
      title: "신약 연구소",
      desc: "소화, 암, 면역질환을 중심으로\n글로벌 무대에서 주목하는 혁신 신약을 연구합니다.",
      image: "/images/rnd1.png",
    },
    {
      title: "식품 연구소",
      desc: "감염 예방백신뿐만 아니라 차세대 분야인\n세포유전자치료제를 연구하고 있습니다.",
      image: "/images/rnd2.png",
    },
  ];

  return (
    <section className="bg-[#f6fafe] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">R&D</h2>
        <p className="text-2xl font-bold text-gray-800 leading-snug mb-16 whitespace-pre-line">
          멈추지 않는 혁신, 적극적 연구개발로{"\n"}
          도전과 성취의 역사를 새로 씁니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {researchItems.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl overflow-hidden group h-[360px] shadow-xl hover:shadow-2xl transition-all"
            >
              {/* 배경 이미지 */}
              <div className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-110 group-hover:blur-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 텍스트 */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-center bg-white/70 backdrop-blur-md group-hover:bg-white/80 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 whitespace-pre-line">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="bg-green-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all"
          onClick={() => (window.location.href = "/rnd")}
        >
          더보기
        </button>
      </div>
    </section>
  );
}
