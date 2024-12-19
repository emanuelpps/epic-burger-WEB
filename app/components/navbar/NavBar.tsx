import React from "react";
import NavBarLogo from "./components/LogoContainer";
import MenuSelector from "./components/MenuSelector";
import CartContainer from "./components/CartContainer";

export const NavBar: React.FC = () => {
  return (
    <div id="navbar" className="w-full">
      <div
        id="navbar-container"
        className="flex items-center justify-around w-full"
      >
        <NavBarLogo />
        <div
          id="navbar-menu"
          className="flex items-center justify-center w-[50%]"
        >
          <MenuSelector />
          <CartContainer />
        </div>
      </div>
    </div>
  );
};
