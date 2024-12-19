import React from 'react';
import NavBarLogoImage from "@/public/assets/images/navbar-logo.svg";
import Image from "next/image";


const NavBarLogo = () => {
  return (
    <div id="navbar-logo" className="w-full">
    <Image
      src={NavBarLogoImage}
      width={80}
      height={80}
      alt="Epic Burger Logo"
    />
  </div>
  )
}

export default NavBarLogo