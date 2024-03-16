import Image from "next/image";
import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { Product } from "./Products";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col p-4 rounded-2xl items-center w-full bg-zinc-800">
      <Image
        src={product.imageUrl}
        alt="product-image"
        width={200}
        height={200}
        className="rounded-2xl"
      />

      <div className="font-bold text-xl mt-3">{product.name}</div>
      <div className="flex gap-1 items-center text-sm opacity-40">
        <div>{product.color} - </div>
        <div className="flex gap-1">{product.sizes.join(", ")}</div>
      </div>
      <div className="text-[#d000f2] font-medium mt-3">{`$${product.price} `}</div>
      <div className="flex gap-2 items-center mt-3">
        <BsPlusCircleFill
          size={32}
          className="opacity-40 transition-opacity hover:opacity-100"
        />
        <div>Add to cart</div>
      </div>
    </div>
  );
};

export default ProductCard;
