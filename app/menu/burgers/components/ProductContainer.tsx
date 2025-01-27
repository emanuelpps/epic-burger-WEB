import { ProductCard } from "@/app/components/productCard/ProductCard";
import React from "react";
import Burgers from "@/public/assets/data/burgers.json";

export const ProductContainer = () => {
  return (
    <div className="w-[80%] flex justify-center items-center flex-wrap gap-20">
      {Burgers.map((burger, index) => (
        <ProductCard
          key={index}
          title={burger.title}
          price={burger.price}
          rating={burger.rating ?? 0}
          image={burger.image}
        />
      ))}
    </div>
  );
};
