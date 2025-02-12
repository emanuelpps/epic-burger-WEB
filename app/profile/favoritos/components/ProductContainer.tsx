"use client";
import React, { useState } from "react";
import BoxContainer from "../../components/BoxContainer";
import Product from "./Product";

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
    <>
      <BoxContainer text="Favoritos" type="tertiary">
        <div className="flex flex-col gap-4 bg-slate-100 w-full p-4 rounded-lg">
          {productData.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </BoxContainer>
    </>
  );
};

export default ProductContainer;
