import { useEffect } from "react";

export default function NaverMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=8fv9p09ufp";
    script.async = true;
    script.onload = () => {
      const map = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(37.673028, 127.053516), // 정확한 열방약국 위치
        zoom: 17,
      });

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.673028, 127.053516),
        map,
        title: "열방약국",
      });
    };

    document.head.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center px-4 md:px-0 overflow-x-auto">
      <div
        id="map"
        className="w-[1280px] h-[620px] rounded-md shadow border border-gray-300"
      />
    </div>
  );
}
