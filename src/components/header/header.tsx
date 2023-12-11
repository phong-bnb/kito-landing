import React from "react";
import { FaAngleDown } from "react-icons/fa";
const HeaderOne = () => {
  return (
    <div className="w-full bg-[#fdf2f5]">
      <div className="flex py-[7px] justify-between gap-10  w-[1460px] m-auto">
        <p className="text-[#5e5457] text-15px">KITO - Every day low price</p>
        <p className="text-[#c81b10] text-15px">
          Free Delivery on orders over £120. Don't miss discount.
        </p>
        <div className="flex">
          <div className="flex items-center">
            <p className="text-15px">ENG</p>
            <FaAngleDown />
          </div>
          <div className="flex items-center">
            <p className="text-15px">USD</p>
            <FaAngleDown />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderOne;
