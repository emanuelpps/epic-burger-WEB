import React from "react";
import { ProductContainer } from "./components/ProductContainer";
import { PrimaryTitle } from "@/app/components/titles/PrimaryTitle";

const page = () => {
  return (
    <div className="w-full flex justify-center items-center h-full flex-col bg-[#FFFBF2]">
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[80%] mt-10">
          <PrimaryTitle text="Burgers" type="primary" />
        </div>
      </div>
      <ProductContainer />
    </div>
  );
};

export default page;
