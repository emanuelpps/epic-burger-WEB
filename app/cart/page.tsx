import React from "react";
import CartContainer from "./components/CartContainer";
import { PrimaryTitle } from "../components/titles/PrimaryTitle";

const Page = () => {
  return (
    <div className="w-[90%] mx-auto min-h-[50vh]">
      <div className="mt-8 mb-4">
        <PrimaryTitle text="Mi Carrito" type="primary" />
      </div>
      <CartContainer />
    </div>
  );
};

export default Page;
