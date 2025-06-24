// 열방상담소 페이지 (ConsultPage.jsx)
import FooterCompact from "../components/FooterCompact";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ConsultPage() {
  return (
    <motion.div
      className="bg-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* 배너 섹션 */}
      <div
        className="relative h-[420px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/consult-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">열방상담소</h1>
            <p className="text-lg md:text-xl">약사와 함께하는 통합 암치료 가이드</p>
          </div>
        </div>
      </div>

      {/* 설명 섹션 */}
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-24">
        {/* 상담소 소개 - 이미지 포함 텍스트 3단 구성 */}
        <section className="space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/images/consult-desc1.png"
              alt="상담 자료가 놓인 책상"
              className="w-full max-w-[500px] rounded-xl shadow"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">맞춤형 전략 상담 프로그램</h2>
              <p className="text-gray-700 leading-relaxed">
                열방상담소는 약사가 직접 맞춤형 전략을 제공하는 통합 암상담 프로그램입니다.
                사전에 제공된 혈액검사지, 조직검사, CT 등 객관적인 자료를 바탕으로 환자의 상태에 맞는 영양 전략과 보완 요법을 안내합니다.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">사전 준비는 필수</h2>
              <p className="text-gray-700 leading-relaxed">
                상담은 오직 카카오 채널을 통해 신청 가능하며, 사전 문답지와 건강 자료의 제출이 필수입니다.
                최소 2주 이상의 대기 기간이 있을 수 있으며, 예약 시 충분한 자료준비가 필요합니다.
              </p>
            </div>
            <img
              src="/images/consult-desc2.png"
              alt="서류 정리 이미지"
              className="w-full max-w-[500px] rounded-xl shadow"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/images/consult-desc3.png"
              alt="약사 뒷모습"
              className="w-full max-w-[500px] rounded-xl shadow"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">전문가가 함께하는 치유 전략</h2>
              <p className="text-gray-700 leading-relaxed">
                상담 약사인 김훈하, 전정미 약사는 각각 요일별로 전문적인 통합 암치료 상담을 진행하며, 일정 및 대상 조건에 따라 상담 여부가 결정됩니다.
                상담은 환자의 혈액검사, 식이습관, 생활습관 등 전반적인 생활 교정은 물론, 기존 처방전과의 상호작용까지 고려하여 보충제를 제안하고,
                항암 부작용을 최소화하며 암 세포를 효과적으로 사멸시키기 위한 통합 치유 전략을 제시합니다.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ 인포그래픽을 코드로 구성 */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">자주 묻는 질문</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white shadow rounded-lg">
              <div className="text-4xl mb-3">📄</div>
              <h3 className="font-bold text-lg">상담 시 무엇이 필요해요?</h3>
              <p className="text-sm text-gray-600 mt-2">혈액검사, 문답지, CT 등 자료 제출이<br /> 필요합니다.</p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="font-bold text-lg">위치 및 운영시간은요?</h3>
              <p className="text-sm text-gray-600 mt-2">서울 노원구 동일로 1622<br/>상담소: 9시~18시 / 약국: 10시~17시</p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <div className="text-4xl mb-3">🚫</div>
              <h3 className="font-bold text-lg">상담 제외 대상자는?</h3>
              <p className="text-sm text-gray-600 mt-2">고령자, 특정 암종, 거동 불가자 등은<br /> 제외됩니다.</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8">
            더 자세한 내용이 궁금하시면{" "}
            <a
              href="https://pf.kakao.com/_Apnys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              카카오톡 채널
            </a>
            {" "}또는 이메일(<a href="mailto:yulbangrc@gmail.com" className="underline">yulbangrc@gmail.com</a>)로 문의주세요.
          </p>
        </section>

        {/* 전문가 소개 */}
        <section className="bg-gray-50 p-8 rounded-xl shadow">
          <h2 className="text-3xl font-bold mb-8 text-center">상담 약사 소개</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="rounded-lg bg-white p-6 text-center shadow">
              <img src="/images/expert1.jpg" alt="김훈하 약사" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold">김훈하 약사</h3>
              <p className="text-gray-500">동덕여자대학교 약학과 졸업업<br />
                열방약국 대표 약사<br />
                現 열방상담소 근무<br />
                現 열방상담소 근무現 CURAEL 대표<br /></p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow">
              <img src="/images/expert2.jpg" alt="전정미 약사" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold">전정미 약사</h3>
              <p className="text-gray-500">연세대학교 생물학과 졸업<br />
                성균관대학교 약학과 졸업<br />
                前 강남 경희 한방병원 근무<br />
                前 분당차 병원 근무<br />
                現 열방 상담소 근무</p>
            </div>
          </div>
        </section>

        {/* 상담소 위치 안내 섹션 */}
        <section className="bg-gray-50 p-8 rounded-xl shadow">
          <h2 className="text-3xl font-bold mb-8 text-center">오시는 길</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            
            {/* 왼쪽: 설명 */}
            <div className="w-full md:w-1/2 text-gray-700 text-lg leading-relaxed">
              <p>🚉 수락산역 3번 출구에서 도보로 약 6분 거리입니다.</p>
              <p className="mt-2">🚗 건물 앞에 <strong>주차 가능</strong>합니다.</p>
            </div>

            {/* 오른쪽: 지도 */}
            <div className="w-full md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1205.9062371852708!2d127.05500801402573!3d37.67294579218209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb9db49298ee3%3A0xb1e26e5625e30d4f!2z7Je067Cp7IOB64u07IaM!5e0!3m2!1sko!2skr!4v1750658085423!5m2!1sko!2skr"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="열방상담소 위치"
                className="rounded-xl shadow"
              ></iframe>
            </div>

          </div>
        </section>

        {/* 상담 신청 CTA */}
        <section className="bg-green-50 py-16 rounded-xl text-center shadow">
          <h2 className="text-2xl font-bold mb-4">상담을 원하시나요?</h2>
          <p className="text-gray-600 mb-6">카카오 채널에서 상담 신청을 도와드립니다.</p>
          <a
            href="https://pf.kakao.com/_Apnys"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-yellow-600 transition"
          >
            카카오 채널로 상담 신청하기
          </a>
        </section>
      </div>

      <FooterCompact />
    </motion.div>
  );
}
