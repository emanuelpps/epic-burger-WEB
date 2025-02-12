import React from "react";
import { ProductContainer } from "../burgers/components/ProductContainer";
import { PrimaryTitle } from "@/app/components/titles/PrimaryTitle";
const Page = () => {
  return (
    <div className="w-full flex justify-center items-center h-full flex-col bg-[#FFFBF2]">
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[80%] mt-10">
          <PrimaryTitle text="Bebidas" type="primary" />
        </div>
      </div>
      <ProductContainer />
    </div>
  );
};

export default Page;
