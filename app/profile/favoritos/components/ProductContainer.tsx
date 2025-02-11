"use client";
import { PrimaryTitle } from "@/app/components/titles/PrimaryTitle";
import React, { useState } from "react";

const ProductContainer = () => {
  const [productData] = useState([
    {
      id: 1,
      name: "Producto 1",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Producto 2",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Producto 3",
      price: 300,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Producto 4",
      price: 400,
      image: "https://via.placeholder.com/150",
    },
  ]);
  return (
    <div className="flex w-[100%] justify-center items-center mt-20">
      <div className="bg-[#F23F39] w-[80%] h-[500px] flex flex-col p-10 rounded-lg">
        <div className="flex">
          <PrimaryTitle text="Productos Favoritos" type="tertiary" />
        </div>
        <div className="bg-slate-100 h-full w-full rounded-xl flex flex-col gap-10 p-10">
          {productData.map((product) => (
            <div
              key={product.id}
              className="flex gap-10 bg w-full items-center"
            >
              <img src={product.image} alt={product.name} className=""/>
              <div className="flex gap-10">
                <h3>{product.name}</h3>
                <h3>{product.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
