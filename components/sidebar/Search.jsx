import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="flex items-center justify-center p-4 sm:justify-start  gap-2 rounded-md bg-light-blue-gray  text-white sm:py-[9px] sm:px-3">
      <span className="cursor-pointer text-2xl sm:text-xl">
        <BiSearch />
      </span>
      <input
        className="hidden sm:flex bg-transparent outline-none "
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
