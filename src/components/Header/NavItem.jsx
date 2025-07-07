import React, { useState } from "react";
import Dropdown from "./Dropdown";

const NavItem = ({
  label,
  submenu = [],
  textColor = "text-black",
  textSize = "text-base",
  fontWeight = "font-normal",
  disableHover = false, // ✅ 새로 추가
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const showDropdown = submenu.length > 0;

  const handleMouseEnter = () => {
    if (!disableHover) setIsHovered(true); // ✅ 조건 체크
  };

  const handleMouseLeave = () => {
    if (!disableHover) setIsHovered(false); // ✅ 조건 체크
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`cursor-pointer ${textColor} ${textSize} ${fontWeight} transition-colors duration-200`}
      >
        {label}
      </div>
      {showDropdown && <Dropdown items={submenu} isOpen={isHovered} />}
    </div>
  );
};

export default NavItem;
