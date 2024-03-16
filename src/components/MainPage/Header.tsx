import React from "react";
import Image from "next/image";

import { BsBellFill } from "react-icons/bs";
import { FaBasketShopping } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";

const Header = () => {
  return (
    <div className="relative flex justify-between text-2xl items-center w-full">
      <input
        className="bg-zinc-700 px-4 py-2 rounded-xl pl-10 w-1/3 outline-none"
        placeholder="Search"
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <MdSearch className="text-gray-500" />
      </div>
      <div className="flex gap-4 items-center">
        <BsBellFill
          size={32}
          className="opacity-40 hover:opacity-100 transition-opacity"
        />
        <FaBasketShopping
          size={32}
          className="opacity-40 hover:opacity-100 transition-opacity"
        />
        <Image
          src="/avatar.webp"
          alt="avatar"
          width={64}
          height={64}
          className="border-white border-2 rounded-full border-opacity-40 ml-4 hover:border-opacity-100 transition-all"
        />
      </div>
    </div>
  );
};

export default Header;
