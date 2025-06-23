// src/components/FooterCompact.jsx
import { FaYoutube } from "react-icons/fa";
import { SiKakaotalk } from "react-icons/si";

export default function FooterCompact() {
  return (
    <footer className="bg-[#0d121e] text-white py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* 로고 및 정보 */}
        <div className="mb-4 md:mb-0">
          <img
            src="/images/Wordmark_White_ver.png"
            alt="CURAEL Logo"
            className="w-28 mb-2"
          />
          <div className="text-sm leading-5 space-y-1">
            <p>회사명: 큐라엘</p>
            <p>이메일: yulbangrc@gmail.com</p>
            <p>전화번호: 02-935-9843</p>
            <p>주소: 서울특별시 노원구 동일로 1622</p>
          </div>
        </div>

        {/* 아이콘 */}
        <div className="flex gap-5 text-xl mt-4 md:mt-0">
          <a
            href="https://www.youtube.com/@yulbangsangdamso"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
            title="YouTube"
          >
            <FaYoutube size={28} />
          </a>
          <a
            href="https://pf.kakao.com/_Apnys"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
            title="Kakao"
          >
            <SiKakaotalk size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}
