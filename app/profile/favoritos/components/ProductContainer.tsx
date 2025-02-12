"use client";
import { PrimaryTitle } from "@/app/components/titles/PrimaryTitle";
import Image from "next/image";
import React, { useState } from "react";
import { TbTrashX } from "react-icons/tb";

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
      <div className="bg-[#F23F39] w-[50%] flex flex-col p-10 rounded-lg">
        <div className="flex">
          <PrimaryTitle text="Productos Favoritos" type="tertiary" />
        </div>
        <div className="bg-slate-100 h-full w-full rounded-xl flex flex-col gap-10 p-10">
          {productData.map((product) => (
            <div
              key={product.id}
              className="flex gap-10 bg w-full items-center"
            >
              <Image
                src={
                  "https://res.cloudinary.com/dehyuw4zu/image/upload/f_auto,q_auto/v1/Epic-burger/djbd9ilopeixkdbea2kh"
                }
                alt={product.name}
                width={100}
                height={100}
              />
              <div className="flex gap-10">
                <h3>{product.name}</h3>
                <h3>{product.price}</h3>
                <div>
                  <button className="bg-slate-300 p-2 rounded-lg border-[0.1px] border-black">
                    <TbTrashX className="text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
