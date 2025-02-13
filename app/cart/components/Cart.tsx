"use client";
import { useState } from "react";

const Cart: React.FC = () => {
  const [cartProducts] = useState([
    {
      id: 1,
      name: "Producto 1",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: "Producto 2",
      price: 200,
      quantity: 2,
    },
  ]);
  return (
    <div className="bg-slate-100 flex w-[100%] m-2 flex-col">
      {cartProducts.map((product) => (
        <div key={product.id} className="flex w-[100%] p-2">
          <div className="w-[50%]">{product.name}</div>
          <div className="w-[25%]">{product.price}</div>
          <div className="w-[25%]">{product.quantity}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
