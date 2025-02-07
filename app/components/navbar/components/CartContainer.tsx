import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import CartBadge from "./CartBadge";
import Link from "next/link";

const CartContainer = () => {
  return (
    <div
      id="navbar-menu-cart"
      className="flex items-center justify-center w-[10%] relative"
    >
      <div
        id="cart-container"
        className="relative flex items-center justify-center"
      >
        <Link href={"/cart"}>
          <CartBadge />
          <TiShoppingCart className="text-[1.5rem] text-[#F23F39]" />
        </Link>
      </div>
    </div>
  );
};

export default CartContainer;
