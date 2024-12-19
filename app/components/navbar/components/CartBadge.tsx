import React from "react";

const CartBadge = () => {
  return (
    <div
      id="cart-badge"
      className="bg-[#F23F39] text-white rounded-full w-6 h-6 flex justify-center items-center absolute bottom-2 right-24"
    >
      <p className="text-[0.8rem]">2</p>
    </div>
  );
};

export default CartBadge;
