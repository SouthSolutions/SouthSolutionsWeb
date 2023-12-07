import React from "react";
import { FiMenu } from "react-icons/fi";

interface HamburgerMenuProps {
  onClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => {
  return (
    <div className="cursor-pointer p-1 md:p-3 lg:p-4 transition duration-300 ease-in-out transform hover:scale-110" onClick={onClick}>
      <FiMenu size={35} />
    </div>
  );
};

export default HamburgerMenu;
