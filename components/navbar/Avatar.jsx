import React from "react";
import { BiChevronDown } from "react-icons/bi";

const Avatar = () => {
  return (
    <div className="flex items-center gap-1 cursor-pointer">
      <div className="bg-red-light p-2 rounded-full text-sm">AV</div>
      <span className="text-gray">
        <BiChevronDown size={30} />
      </span>
    </div>
  );
};

export default Avatar;
