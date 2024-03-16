import React from "react";
import Header from "./Header";
import Products from "./Products";

const Content = () => {
  return (
    <div className="pl-[25%] flex flex-col gap-8 py-8 px-16 text-white w-full">
      <Header />
      <Products />
    </div>
  );
};

export default Content;
