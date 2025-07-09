import React, { useState } from "react";
import SubPageBanner from "../../components/SubPageBanner";
import SubPageNav from "../../components/SubPageNav";
import Footer from "../../components/Footer";
import { Ban, MapPin, FileText, AlertTriangle, Clock, Inbox } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const AccordionItem = ({ icon, question, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b py-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-semibold text-lg flex items-center gap-2 focus:outline-none"
      >
        <span className="w-5 h-5 text-black">{icon}</span>
        {question}
      </button>
      {open && <div className="mt-4 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">{children}</div>}
    </div>
  );
};

const IconText = ({ icon: Icon, children }) => (
  <div className="flex items-start gap-2">
    <Icon className="w-5 h-5 mt-1 text-black shrink-0" />
    <div>{children}</div>
  </div>
);

const Consult = () => {
  return (
    <>
      <SubPageBanner page="consult" />
      <SubPageNav page="consult" />

      <section className="text-center pt-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">열방상담소</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-12" />
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24 px-4">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">맞춤형 전략 상담 프로그램</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            열방상담소는 <strong>약사가 직접 맞춤형 전략을 제공</strong>하는 통합 암상담 프로그램입니다. 
            사전에 제출한 <strong>혈액검사지, 조직검사, CT 등 객관적인 자료</strong>를 바탕으로 
            환자의 상태에 맞는 <strong>영양 전략과 보완 요법</strong>을 안내합니다.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            상담은 <strong>카카오 채널을 통해 신청 가능</strong>하며, <strong>사전 문답지와 건강 자료의 제출이 필수</strong>입니다.
            최소 2주 이상의 대기 기간이 있을 수 있으며, 예약 시 충분한 자료 준비가 필요합니다.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            상담 약사인 <strong>김훈하</strong>, <strong>전정미</strong> 약사는 각각 요일별로 전문적인 통합 암치료 상담을 진행합니다. 
            일정 및 대상 조건에 따라 상담 여부가 결정됩니다. 
            환자의 <strong>혈액검사, 식이습관, 생활습관</strong> 등 전반적인 생활 교정을 안내하고, 
            기존 처방전과의 상호작용까지 고려하여 보충제를 제안하고, 
            <strong>항암 부작용 최소화 및 암치료 전략</strong>을 제시합니다.
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-gray-700">
            <li>① 혈액 검사지, 사전 문답지 등을 통한 <strong>정확한 상태 파악</strong></li>
            <li>② 상담자 1:1 <strong>개인 맞춤 영양제, 보충제 처방 및 구매</strong></li>
            <li>③ <strong>식이요법 및 생활 속 건강 지키는 노하우</strong> 전수</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/BIRAMH6-RsM"
              title="열방상담소 소개 영상"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="text-center mb-12">
        <p className="text-xs md:text-sm text-gray-400 tracking-widest font-semibold uppercase">
          Frequently Asked Questions
        </p>
        <p className="text-2xl md:text-5xl font-bold text-gray-900 mt-1">자주 묻는 질문</p>
      </section>

      <section className="max-w-2xl mx-auto mb-24 px-4">
        <AccordionItem icon={<Ban className="w-5 h-5" />} question="상담이 제한되는 환자는 누구인가요?">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <IconText icon={AlertTriangle}>만 75세 이상 또는 만 19세 이하</IconText>
            <IconText icon={AlertTriangle}>상담소 방문이 어려운 환자</IconText>
            <IconText icon={AlertTriangle}>음식물 섭취가 불가능한 환자</IconText>
            <IconText icon={AlertTriangle}>6개월 미만의 시한부 환자</IconText>
            <IconText icon={AlertTriangle}>흉수 또는 복수가 최근 1년 이내 있었던 환자</IconText>
            <IconText icon={AlertTriangle}>일반 질환 또는 희귀 질환 환자</IconText>
            <IconText icon={AlertTriangle}>췌장암, 담낭암, 담도암, 신장암, 간암, 방광암, 육종암 환자</IconText>
            <IconText icon={AlertTriangle}>항암 종료 후 2년 이상 경과한 환자</IconText>
            <IconText icon={AlertTriangle}>종양표지자 수치가 기준치보다 10배 이상 높은 환자</IconText>
            <IconText icon={AlertTriangle}>간이식 또는 신장이식 수술 이력자</IconText>
            <IconText icon={AlertTriangle}>BUN, Creatinine, eGFR 수치가 기준을 벗어난 환자</IconText>
            <IconText icon={AlertTriangle}>복막 전이 환자</IconText>
            <p className="text-red-500 font-semibold text-sm md:text-base">
              ※ 위 조건에 해당할 경우 상담이 어려울 수 있으니 신중히 신청해 주세요.
            </p>
          </motion.div>
        </AccordionItem>

        <AccordionItem icon={<MapPin className="w-5 h-5" />} question="상담소 위치와 운영 시간은 어떻게 되나요?">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <IconText icon={MapPin}>서울 노원구 동일로 1622 유성상가 1층 (건물 앞 주차 가능)</IconText>
            <IconText icon={Clock}>열방상담소 운영시간: 평일(월~금) 09:00 ~ 18:00 (점심 13:00 ~ 14:00 제외)</IconText>
            <IconText icon={Clock}>열방약국 운영시간: 평일(월~금) 10:00 ~ 17:00 (점심 13:00 ~ 14:00 제외)</IconText>
            <IconText icon={MapPin}>수락산역(7호선) 3번 출구에서 도보 약 400m 직진</IconText>
          </motion.div>
        </AccordionItem>

        <AccordionItem icon={<FileText className="w-5 h-5" />} question="상담을 받기 전 어떤 자료를 제출해야 하나요?">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <IconText icon={FileText}>필수 제출자료: 혈액검사지, 사전 문답지</IconText>
            <IconText icon={FileText}>선택 제출자료: 조직검사 결과, CT 이미지 등</IconText>
            <IconText icon={Clock}>제출 기한: 상담일 기준 최소 3일 전</IconText>
            <IconText icon={Inbox}>
              제출 방법: 카카오 채널 또는 이메일 <a href="mailto:yulbangrc@gmail.com" className="underline">yulbangrc@gmail.com</a>
            </IconText>
            <p className="text-sm md:text-base">
              혈액검사는 최근 1~3회의 결과 중 주요 항목의 70% 이상이 포함되어야 하며,<br />
              사전 문답지에는 이름, 치료 이력, 수술 여부, 소화기능, 식이 습관 등의 정보가 포함되어야 합니다.
            </p>
            <p className="text-red-500 font-semibold text-sm md:text-base">
              ※ 상담일 3일 전까지 자료를 제출하지 않으면 상담이 불가하며,
              병원 추천 및 연결은 제공되지 않습니다.
            </p>
          </motion.div>
        </AccordionItem>
      </section>

      <section className="bg-gray-50 p-8 rounded-xl shadow max-w-7xl mx-auto mt-24 mb-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">상담 약사 소개</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="rounded-lg bg-white p-6 text-center shadow">
            <img src="/images/expert1.jpg" alt="김훈하 약사" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-lg md:text-xl font-semibold">김훈하 약사</h3>
            <p className="text-sm md:text-base text-gray-500">동덕여자대학교 약학과 졸업<br />
              열방약국 대표 약사<br />
              現 열방상담소 근무<br />
              現 CURAEL 대표</p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow">
            <img src="/images/expert2.jpg" alt="전정미 약사" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-lg md:text-xl font-semibold">전정미 약사</h3>
            <p className="text-sm md:text-base text-gray-500">연세대학교 생물학과 졸업<br />
              성균관대학교 약학과 졸업<br />
              前 강남 경희 한방병원 근무<br />
              前 분당차 병원 근무<br />
              現 열방 상담소 근무</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 rounded-xl text-center shadow max-w-4xl mx-auto mb-24 px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-4">상담을 원하시나요?</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6">카카오 채널에서 상담 신청을 도와드립니다.</p>
        <a
          href="https://pf.kakao.com/_Apnys"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 text-white text-sm md:text-lg font-semibold px-8 py-3 rounded-full hover:bg-yellow-600 transition"
        >
          카카오톡 채널로 상담 신청하기
        </a>
      </section>

      <Footer />
    </>
  );
};

export default Consult;
