import React from "react";
import NavBarLogo from "./components/LogoContainer";
import MenuSelector from "./components/MenuSelector";
import CartContainer from "./components/CartContainer";
import Avatar from "./components/Avatar";

export const NavBar: React.FC = () => {
  return (
    <div id="navbar" className="w-[100%] flex justify-center items-center">
      <div
        id="navbar-container"
        className="flex items-center justify-around w-[90%]"
      >
        <div className="flex items-center justify-center w-[100%]">
          <NavBarLogo />
        </div>
        <div
          id="navbar-menu"
          className="flex items-center justify-center w-[100%]"
        >
          <div className="flex items-center justify-center w-[100%]">
            <MenuSelector />
          </div>
        </div>
        <div className="flex justify-end items-center w-[100%]">
          <CartContainer />
          <Avatar />
        </div>
      </div>
    </div>
  );
};
