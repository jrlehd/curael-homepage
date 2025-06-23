import { FaYoutube } from "react-icons/fa";
import { SiKakaotalk } from "react-icons/si";

export default function Footer() {
  return (
    <section className="bg-[#0d121e] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* 왼쪽: 로고 + 회사정보 */}
        <div className="mb-8 md:mb-0 flex-1">
          <img
            src="/images/Wordmark_White_ver.png"
            alt="CURAEL Logo"
            className="w-32 mb-4"
          />
          <p>회사명: 큐라엘</p>
            <p>이메일: yulbangrc@gmail.com</p>
            <p>전화번호: 02-935-9843</p>
            <p>주소: 서울특별시 노원구 동일로 1622</p>
          <p className="text-xs text-gray-400 mt-3">
            © 2025 CURAEL. All rights reserved.
          </p>
        </div>

        {/* 오른쪽: SNS 아이콘 버튼 */}
        <div className="flex-1 flex md:justify-end gap-6 items-center text-xl">
          <a
            href="https://www.youtube.com/@yulbangsangdamso"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors"
            title="YouTube"
          >
            <FaYoutube size={32} />
          </a>
          <a
            href="https://pf.kakao.com/_Apnys" // ← 카카오 채널 주소로 변경
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
            title="Kakao Channel"
          >
            <SiKakaotalk size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
