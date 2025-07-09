"use client";

import SubPageBanner from "../../components/SubPageBanner";
import SubPageNav from "../../components/SubPageNav";
import Footer from "../../components/Footer";

export default function InquiryPage() {
  return (
    <>
      <SubPageBanner page="inquiry" />
      <SubPageNav page="inquiry" />

      <section className="text-center pt-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">제휴문의</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-6" />
        <p className="text-xs md:text-base text-gray-600">
          제품 OEM, 협업, 생산 위탁 등 제휴 관련 내용을 자유롭게 남겨주세요.
        </p>
      </section>

      <section className="bg-[#ffffff] px-4 py-16">
        <form
          action="https://formspree.io/f/mgvyqyok"
          method="POST"
          className="max-w-4xl mx-auto text-sm"
        >
          <div className="border-t-2 border-black">
            {/* 이름 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 py-3 border-b border-gray-200">
              <label className="w-28 text-[13px] font-medium">
                <span className="text-red-500">*</span> 이름
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full md:w-1/3 border border-gray-300 px-2 py-2 bg-white"
              />
            </div>

            {/* 연락처 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 py-3 border-b border-gray-200">
              <label className="w-28 text-[13px] font-medium">
                <span className="text-red-500">*</span> 연락처
              </label>
              <div className="flex gap-2 w-full md:w-auto">
                <input
                  type="text"
                  name="phone1"
                  maxLength={3}
                  required
                  className="w-full max-w-[70px] border border-gray-300 px-2 py-2 bg-white"
                />
                <span>-</span>
                <input
                  type="text"
                  name="phone2"
                  maxLength={4}
                  required
                  className="w-full max-w-[90px] border border-gray-300 px-2 py-2 bg-white"
                />
                <span>-</span>
                <input
                  type="text"
                  name="phone3"
                  maxLength={4}
                  required
                  className="w-full max-w-[90px] border border-gray-300 px-2 py-2 bg-white"
                />
              </div>
            </div>

            {/* 이메일 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 py-3 border-b border-gray-200">
              <label className="w-28 text-[13px] font-medium">
                <span className="text-red-500">*</span> 이메일
              </label>
              <div className="flex flex-wrap md:flex-nowrap items-center gap-2 w-full">
                <input
                  type="text"
                  name="emailId"
                  required
                  className="w-full max-w-[160px] border border-gray-300 px-2 py-2 bg-white"
                />
                <span>@</span>
                <input
                  type="text"
                  name="emailDomain"
                  required
                  className="w-full max-w-[160px] border border-gray-300 px-2 py-2 bg-white"
                />
              </div>
            </div>

            {/* 제목 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 py-3 border-b border-gray-200">
              <label className="w-28 text-[13px] font-medium">
                <span className="text-red-500">*</span> 제목
              </label>
              <input
                type="text"
                name="subject"
                required
                className="w-full border border-gray-300 px-2 py-2 bg-white"
              />
            </div>

            {/* 내용 */}
            <div className="flex flex-col md:flex-row py-3 border-b border-gray-200">
              <label className="w-28 text-[13px] font-medium pt-2">
                <span className="text-red-500">*</span> 내용
              </label>
              <textarea
                name="message"
                required
                rows={10}
                className="w-full border border-gray-300 px-2 py-1 bg-white"
              ></textarea>
            </div>
          </div>

          {/* 전송 버튼 */}
          <div className="text-right mt-4">
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-6 hover:bg-green-700"
            >
              전송하기
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
}
