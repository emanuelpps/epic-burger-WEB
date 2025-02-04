import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import CartBadge from "./CartBadge";

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
        <CartBadge />
        <TiShoppingCart className="text-[1.5rem] text-[#F23F39]" />
      </div>
    </div>
  );
};

export default CartContainer;
