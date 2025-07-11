import { useEffect } from "react";

export default function NaverMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=8fv9p09ufp&callback=initMap";
    script.async = true;
    document.head.appendChild(script);

    window.initMap = () => {
      if (!window.naver || !window.naver.maps) return;

      const map = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(37.6729939030577, 127.055968051668),
        zoom: 16,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.RIGHT_BOTTOM,
        },
      });

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.6729939030577, 127.055968051668),
        map,
        title: "열방상담소", // ✅ 여기 수정됨
      });

      setTimeout(() => {
        const controls = document.querySelectorAll(".map_zoom_control");
        controls.forEach((el) => {
          el.style.bottom = "24px";
          el.style.right = "24px";
          el.style.zIndex = "10";
        });
      }, 500);
    };

    window.navermap_authFailure = function () {
      console.error("네이버 지도 인증 실패");
    };
  }, []);

  return (
    <div className="flex justify-center px-4 md:px-0 overflow-x-auto">
      <div
        id="map"
        className="
          relative z-0 
          w-full max-w-[1280px] 
          h-[300px] 
          sm:h-[400px] 
          md:h-[500px] 
          lg:h-[620px] 
          rounded-md shadow 
          border border-gray-300 
          pb-12
        "
      />
    </div>
  );
}
