import Link from "next/link";
import React from "react";

const MenuSelector = () => {
  return (
    <div
      id="navbar-menu-selector"
      className="flex items-center justify-center w-full"
    >
      <div
        id="menu-selector-container"
        className="flex items-center justify-center w-full gap-10 text-[#F23F39] font-semibold"
      >
        <Link
          href={"/menu/burgers"}
          className="hover:border-b-[1px] hover:border-[#F23F39]"
        >
          Burgers
        </Link>
        <Link
          href={"/menu/sides"}
          className="hover:border-b-[1px] hover:border-[#F23F39]"
        >
          Sides
        </Link>
        <Link
          href={"/menu/bebidas"}
          className="hover:border-b-[1px] hover:border-[#F23F39]"
        >
          Bebidas
        </Link>
      </div>
    </div>
  );
};

export default MenuSelector;
