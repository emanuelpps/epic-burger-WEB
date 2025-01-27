import React from "react";

export const ProductCard = () => {
  return (
    <div id="product-card-container">
      <div
        id="product-card"
        className="flex flex-col h-60 bg-white rounded-lg shadow-lg w-48"
      >
        <div id="product-header" className="">
          <div id="discount-section">d</div>
          <div id="like-section"></div>
          <div id="product-image"></div>
          <div id="product-rating"></div>
          <div id="product-detail"></div>
        </div>
      </div>
    </div>
  );
};
