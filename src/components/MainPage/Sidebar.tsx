import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MdArrowRight,
  MdFavorite,
  MdPerson,
  MdSearch,
  MdWallet,
} from "react-icons/md";

import { FaShirt } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="fixed h-full w-1/5 bg-zinc-800 flex flex-col gap-16 py-8 px-8">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="logo" width={64} height={64} />
        <div className="grid grid-cols-3 w-36 grid-rows-2 text-xl">
          <div className="text-[#da00fe] font-bold col-start-1 col-end-3 justify-self-center">
            TSHIRT
          </div>
          <div className="col-start-2 col-end-3 row-start-2 text-[#a100ed] font-bold">
            STORE
          </div>
        </div>
      </div>
      <button className="py-3 px-4 text-xl self-center bg-zinc-500  font-medium text-white rounded-2xl w-2/3">
        Catalog
      </button>
      <div className="flex flex-col gap-8 text-white text-2xl font-medium">
        <div className="flex gap-6 justify-start items-center opacity-40 transition-opacity hover:opacity-100">
          <MdPerson size={32} />
          <Link href="">Profile</Link>
        </div>
        <div className="flex gap-6 justify-start items-center opacity-40 transition-opacity hover:opacity-100">
          <MdSearch size={32} />
          <Link href="">Search</Link>
        </div>
        <div className="flex gap-6 justify-start items-center opacity-40 transition-opacity hover:opacity-100">
          <MdFavorite size={32} />
          <Link href="">Favorite</Link>
        </div>
        <div className="flex gap-6 justify-start items-center opacity-40 transition-opacity hover:opacity-100">
          <MdWallet size={32} />
          <Link href="">Balance</Link>
        </div>
      </div>
      <div className="text-white font-medium text-2xl flex flex-col gap-4">
        <div className="flex justify-between opacity-40 items-center pr-4">
          <div>Category</div>
          <MdArrowRight size={48} />
        </div>
        <div>
          <div className="flex gap-6 justify-start items-center opacity-40 transition-opacity hover:opacity-100">
            <FaShirt size={32} />
            <Link href="">TShirts</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
