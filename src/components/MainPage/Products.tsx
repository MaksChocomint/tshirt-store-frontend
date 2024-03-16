"use client";
import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import ProductCard from "./ProductCard";
import axios from "axios";

export interface Product {
  id: number;
  name: string;
  color: string;
  sizes: Array<string>;
  price: number;
  amount: number;
  imageUrl: string;
}

type TShirt = {
  id: number;
  name: string;
  colorId: number;
  sizes: Array<string>;
  price: number;
  amount: number;
  imageUrl: string;
};

type Color = {
  id: number;
  name: string;
  red: number;
  green: number;
  blue: number;
};

const Products = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  const fetchData = async () => {
    try {
      const colorsResponse = await axios.get(
        "http://localhost:5000/api/v1/colors"
      );
      const TShirtsResponse = await axios.get(
        "http://localhost:5000/api/v1/tshirts"
      );

      const colorsMap: Record<number, string> = {};
      colorsResponse.data.forEach((color: Color) => {
        colorsMap[color.id] = color.name;
      });

      const products: Array<Product> = TShirtsResponse.data.map(
        (tShirt: TShirt) => {
          const colorName = colorsMap[tShirt.colorId] || "Unknown";
          return {
            id: tShirt.id,
            name: tShirt.name,
            color: colorName,
            sizes: tShirt.sizes,
            price: tShirt.price,
            amount: tShirt.amount,
            imageUrl: tShirt.imageUrl,
          };
        }
      );

      setProducts(products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold">Products</h2>
      <div className="flex gap-4 mt-8">
        <button className="px-5 py-2 border-2 border-[#a100ed] rounded-2xl bg-[#a100ed]">
          Top
        </button>
        <button className="px-5 py-2 border-2 border-opacity-40 transition-opacity border-white hover:border-opacity-100 rounded-2xl">
          Popular
        </button>
        <button className="px-5 py-2 border-2 border-opacity-40 transition-opacity border-white hover:border-opacity-100 rounded-2xl">
          recommended
        </button>
        <button className="flex gap-2 px-5 items-center py-2 border-2 border-[#d000f2] rounded-2xl">
          <FaFilter className="text-[#d000f2]" />
          <div>Filter</div>
        </button>
      </div>
      <div className="grid grid-cols-4 grid-rows-5 gap-4 w-full mt-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
