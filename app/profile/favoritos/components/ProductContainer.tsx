import { PrimaryTitle } from "@/app/components/titles/PrimaryTitle";
import React from "react";

const ProductContainer = () => {
  return (
    <div className="flex w-[100%] justify-center items-center mt-20">
      <div className="bg-[#F23F39] w-[80%] h-[500px] flex flex-col p-10 rounded-lg">
        <div className="flex">
          <PrimaryTitle text="Productos Favoritos" type="tertiary" />
        </div>
        <div className="bg-slate-100 h-full rounded-xl">gfdfs</div>
      </div>
    </div>
  );
};

export default ProductContainer;
