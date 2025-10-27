import { FaYoutube, FaInstagram } from "react-icons/fa";
import { SiKakaotalk } from "react-icons/si";

export default function FooterCompact() {
  return (
    <footer className="bg-[#FFF9F4] text-gray-500 text-[13px] md:text-[15px] py-10 md:py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left: Logo */}
        <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto pr-4 md:pr-10">
          <img
            src="/images/Signature Horizontal.png"
            alt="CURAEL Logo"
            className="w-36 md:w-40 mx-auto md:mx-0"
          />
        </div>

        {/* Middle: Company Info */}
        <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
          <p className="font-semibold text-gray-500">
            (주)큐라엘 &nbsp;&nbsp; 서울특별시 강남구 논현로 132길 12
            {/* 420px 이하에선 줄바꿈 */}
            <br className="hidden max-[420px]:block" />
            {/* 이름은 줄 안에서 쪼개지지 않게 */}
            <span className="whitespace-nowrap">&nbsp;&nbsp;대표: 김훈하</span>
          </p>
          <p className="text-gray-500">
            전화번호: 070-7616-4840 &nbsp;&nbsp; 이메일: biz@curael.kr
          </p>
          <p className="mt-2 text-gray-500">© 2025 CURAEL. All rights reserved.</p>
        </div>

        {/* Right: Store Buttons + SNS */}
        <div className="flex flex-col items-center md:items-end justify-center gap-3 w-full md:w-auto">
          {/* Store Buttons */}
          <div className="flex flex-col gap-2 w-full md:w-auto items-center">
            <a
              href="https://mkt.shopping.naver.com/link/683fa040b7c8c573b305dbdc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-52 md:w-60 bg-transparent border border-gray-300 rounded-full px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm text-gray-500 hover:bg-gray-100 transition text-center"
            >
              베지셀 쇼핑몰
            </a>
            <a
              href="https://mkt.shopping.naver.com/link/68215855814c2c37cf00102b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-52 md:w-60 bg-transparent border border-gray-300 rounded-full px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm text-gray-500 hover:bg-gray-100 transition text-center"
            >
              자연하 쇼핑몰
            </a>
          </div>

          {/* SNS Icons */}
          <div className="flex gap-6 mt-4 text-xl justify-center md:justify-end">
            <a
              href="https://www.youtube.com/@yulbangsangdamso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cd201f] hover:text-red-600"
              title="YouTube"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://pf.kakao.com/_Apnys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fae100] hover:text-yellow-400"
              title="Kakao"
            >
              <SiKakaotalk size={24} />
            </a>
            <a
              href="https://www.instagram.com/yulbang_counseling/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e1306c] hover:text-pink-500"
              title="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
