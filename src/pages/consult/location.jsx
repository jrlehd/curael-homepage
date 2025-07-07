import SubPageBanner from "../../components/SubPageBanner";
import SubPageNav from "../../components/SubPageNav";
import Footer from "../../components/Footer";

export default function Location() {
  return (
    <div className="bg-white text-gray-900">
      <SubPageBanner page="consult" />
      <SubPageNav page="consult" />

      <section className="text-center pt-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">위치 안내</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-12" />
      </section>

      {/* 구글 지도 */}
      <div className="flex justify-center px-4 md:px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.987116343935!2d127.05339817630052!3d37.67301051801477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb9db49298ee3%3A0xb1e26e5625e30d4f!2z7Je067Cp7IOB64u07IaM!5e0!3m2!1sko!2skr!4v1751503334554!5m2!1sko!2skr"
          width="1280"
          height="620"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full max-w-6xl h-[400px] md:h-[620px] rounded-md shadow"
        ></iframe>
      </div>

      {/* 연락처 정보 */}
      <section className="bg-[#f1fcf8] px-4 pt-12 pb-24 mb-24">
  <div className="max-w-6xl mx-auto w-full">

    {/* 지도와 텍스트 사이 구분선 */}
    <hr className="border-t border-gray-300 mb-10 mt-20" />

    {/* 주소 / 연락처 / 이메일 */}
    <div className="flex flex-col md:flex-row justify-center items-center text-sm md:text-base text-center gap-3 md:gap-12">
      <div className="flex items-center">
        <strong className="mr-2">Addr.</strong>
        <span>서울 노원구 동일로 1622 유성상가 1층</span>
      </div>
      <div className="flex items-center">
        <strong className="mr-2">Tel.</strong>
        <span>010-2319-1974</span>
      </div>
      <div className="flex items-center">
        <strong className="mr-2">Email.</strong>
        <span>yulbangrc@gmail.com</span>
      </div>
    </div>

    {/* 하단 안내 문구 2개 */}
    <div className="mt-10 space-y-4 text-center font-semibold text-sm md:text-lg">
      <p>수락산역(7호선) 3번 출구에서 도보 약 400m 직진</p>
      <p>건물 앞 주차 가능</p>
    </div>

  </div>
</section>

      <Footer />
    </div>
  );
}