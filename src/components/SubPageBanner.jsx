import React from "react";
import { useLocation, Link } from "react-router-dom";
import subPageData from "../data/subPageData";

export default function SubPageBanner({ page }) {
  const location = useLocation();
  const { title, engTitle, subText, bgImage, tabs = [] } = subPageData[page];

  return (
    <section className="relative w-full h-[350px] md:h-[520px] overflow-hidden font-sans">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* 콘텐츠 */}
      <div className="relative z-20 flex flex-col justify-start items-center h-full pt-40 md:pt-60 text-white text-center px-4 gap-y-3">
        <p className="text-xs md:text-base tracking-widest uppercase font-Bold">
          {engTitle}
        </p>
        <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
        {Array.isArray(subText) ? (
          <p className="text-sm md:text-xl font-SemiBold opacity-90">
            {subText.map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        ) : (
          <p className="text-sm md:text-lg font-SemiBold opacity-90">{subText}</p>
        )}
      </div>
    </section>
  );
}
