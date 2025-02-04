import React from "react";

const CartBadge = () => {
  return (
    <div
      id="cart-badge"
      className="bg-[#F23F39] text-white rounded-full w-4 h-4 flex justify-center items-center absolute bottom-4 left-4"
    >
      <p className="text-[0.8rem]">2</p>
    </div>
  );
};

export default CartBadge;
