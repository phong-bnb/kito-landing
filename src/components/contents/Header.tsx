import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsHeart } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Header = () => {
  return (
    <div className=" w-full shadow-md ">
      <div  className="w-[1460px] m-auto flex justify-between">
        <div className="flex gap-[40px] items-center ">
          <p className="font-bold text-15px">Home</p>
          <p className="font-bold text-15px">Shop</p>
          <div className="flex items-center ">
            <p className="font-bold text-15px">Pages</p>
            <FaAngleDown />
          </div>
          <p className="font-bold text-15px">Contact</p>
        </div>
        <div className=" flex items-center">
          <h1 className="font-extrabold text-54px">KITO</h1>
        </div>
        <div className="flex gap-[30px] items-center">
          <CiSearch />
          <LiaShoppingBagSolid />
          <BsHeart />
        </div>
      </div>
    </div>
  );
};
export default Header;
