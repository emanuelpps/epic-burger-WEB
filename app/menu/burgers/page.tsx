import React from "react";
import { Slide } from "./components/Slide";
import { ProductContainer } from "./components/ProductContainer";
import { PrimaryTitle } from "@/app/components/titles/PrimaryTitle";

const page = () => {
  return (
    <div className="w-full flex justify-center items-center h-full flex-col">
      <Slide />
      <div className="w-full flex justify-start items-start">
        <PrimaryTitle text="Burgers" />
      </div>
      <ProductContainer />
    </div>
  );
};

export default page;
