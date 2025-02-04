import Image from "next/image";
import React from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

interface ProductCardProps {
  title: string;
  price: number;
  discount?: number;
  rating: number;
  image: string;
  descrption?: string;
  like: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  discount,
  rating,
  image,
  descrption,
  like,
}) => {
  return (
    <div id="product-card-container">
      <div
        id="product-card"
        className="flex flex-col h-65 bg-white rounded-lg shadow-lg w-50 justify-center p-5"
      >
        <div id="product-header" className="flex justify-between w-[90%]">
          <div id="discount-section">{discount ? discount : null}</div>
          <div id="like-section">
            <FcLikePlaceholder className="h-5 w-5" />
          </div>
        </div>
        <div
          id="product-image"
          className="flex justify-center items-center w-full"
        >
          <Image src={image} alt="Burger image" width={200} height={150} />
        </div>
        <div id="product-rating">{rating}</div>
        {
          //hacer un map y setear las estrellas por debajo de .5 es el numero anterior y si es supero el numero siguiente
        }
        <div id="product-detail" className="flex justify-between w-[90%]">
          <div id="price-title">
            <div id="product-title" className="w-full">
              {title}
            </div>
            <div id="product-price" className=" font-bold">
              <span className="text-[#F8B602]">$</span>
              {price}
            </div>
          </div>
          <div
            id="add-button"
            className="flex justify-center items-center bg-[#F8B602] rounded-md"
          >
            <HiOutlinePlusSm className="text-white h-10 w-10 p-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
