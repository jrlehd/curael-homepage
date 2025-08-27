// src/components/Seo.jsx
import { useEffect } from "react";

function upsertMetaByName(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function Seo({
  title,
  description = "큐라엘은 통합 암치료를 위한 건강 솔루션을 제공합니다.",
  image,          // 선택: SNS 미리보기 이미지 URL
  noindex = false // 선택: 인덱스 제외
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | 큐라엘` : "큐라엘";
    document.title = fullTitle;

    // 기본 메타
    upsertMetaByName("description", description);

    // 인덱싱 제어(선택)
    if (noindex) {
      upsertMetaByName("robots", "noindex, nofollow");
    }

    // OG / Twitter
    upsertMetaByProperty("og:title", fullTitle);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:site_name", "큐라엘");
    upsertMetaByProperty("og:locale", "ko_KR");
    if (image) {
      upsertMetaByProperty("og:image", image);
      upsertMetaByName("twitter:card", "summary_large_image");
    } else {
      // 이미지가 없을 때도 카드 유형 지정해두면 좋음
      upsertMetaByName("twitter:card", "summary");
    }
  }, [title, description, image, noindex]);

  return null; // DOM에 아무것도 렌더하지 않음
}
