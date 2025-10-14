import SubPageBanner from "../../components/SubPageBanner";
import SubPageNav from "../../components/SubPageNav";
import Footer from "../../components/Footer";
import NaverMap from "../../components/NaverMap.jsx";
import Seo from "../../components/Seo";

export default function Location() {
  return (
    <div className="bg-white text-gray-900">
      <SubPageBanner page="consult" />
      <SubPageNav page="consult" />
      <Seo title="위치안내" description="큐라엘 열방상담소 방문을 위한 위치와 교통 안내." />


      <section className="text-center pt-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">위치 안내</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-12" />
      </section>

    {/* 주소 / 연락처 / 이메일 */}
    <div className="flex flex-col md:flex-row justify-center items-center text-sm md:text-base text-center gap-3 md:gap-12">
      <div className="flex items-center">
        <strong className="mr-2">Addr.</strong>
        <span>서울특별시 강남구 논현로 132길 12 남송빌딩 2층</span>
      </div>
      <div className="flex items-center">
        <strong className="mr-2">Tel.</strong>
        <span>02-935-9843</span>
      </div>
      <div className="flex items-center">
        <strong className="mr-2">Email.</strong>
        <span>biz@curael.kr</span>
      </div>
    </div>

    {/* 하단 안내 문구 2개 */}
    <div className="mt-10 space-y-4 text-center font-semibold text-sm md:text-lg">
      <p>학동역(7호선) 8번 출구에서 도보 약 100m</p>
      <p>건물 옆 주차장 구비</p>
    </div>
      
      {/* 지도와 텍스트 사이 구분선 */}
    <div className="flex justify-center">
      <hr className="w-[92%] md:w-[80%] border-t border-gray-300 mb-10 mt-10" />
    </div>
          
    {/* 네이버 지도 */}
      <NaverMap />

      {/* 연락처 정보 */}
      <section className="bg-[#ffffff] px-4 pt-12 pb-24 mb-24">
  <div className="max-w-6xl mx-auto w-full">



    

  </div>
</section>

      <Footer />
    </div>
  );
}