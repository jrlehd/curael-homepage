import React from "react";

const faqList = [
  {
    question: "열방상담소란 무엇인가요?",
    answer:
      "열방상담소는 환자 및 보호자분들의 궁금증을 해소해드리기 위한 건강 상담 플랫폼입니다.",
  },
  {
    question: "상담은 어떻게 받을 수 있나요?",
    answer: "CURAEL 공식 홈페이지를 통해 온라인으로 상담 신청이 가능합니다.",
  },
  {
    question: "전문가는 어떤 분들인가요?",
    answer: "각 분야의 약사님들 및 의료 전문가들이 직접 상담을 진행합니다.",
  },
];

const experts = [
  { name: "김훈하 약사", image: "/images/expert1.jpg" },
  { name: "전정미 약사", image: "/images/expert2.jpg" },
];

export default function Section3() {
  const handleNavigate = () => {
    window.location.href = "/consult"; // 클릭 시 이동할 페이지
  };

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">열방상담소</h2>
        <p className="text-gray-600 text-lg mb-16">
          약사님과 함께하는 건강 상담소, 궁금한 건 무엇이든 물어보세요!
        </p>

        {/* Q&A 리스트 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {faqList.map((faq, index) => (
            <div
              key={index}
              onClick={handleNavigate}
              className="bg-white rounded-xl shadow-md p-6 text-left cursor-pointer transition-transform hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Q. {faq.question}
              </h3>
              <p className="text-gray-700 text-base">A. {faq.answer}</p>
            </div>
          ))}
        </div>

        {/* 전문가 프로필 */}
        <h3 className="text-2xl font-bold text-gray-800 mb-6">전문가 소개</h3>
        <div className="flex justify-center gap-12 flex-wrap">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-105 transition-transform"
            >
              {/* 이미지 감싸는 박스 추가 */}
              <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg mb-3">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover scale-110 translate-y-1"
                />
              </div>
              
              <span className="text-lg font-medium text-gray-700">
                {expert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
