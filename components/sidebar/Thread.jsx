import React from "react";

const Thread = ({ icon, title, newThread, isActive }) => {
  return (
    <>
      <div
        className="
    flex
    items-center
    justify-center
    p-4 rounded-md
    bg-light-blue-gray
    transition border
    border-dark-blue-gray
    hover:border-white
    cursor-pointer
    sm:hidden"
      >
        <div className="text-2xl">{icon}</div>
      </div>

      <div
        className={`
         ${newThread && "border-white"}
         ${isActive && "bg-softTeal"}
         ${isActive && "text-teal-green"}
      hidden
    items-center
    p-4 rounded-md
  bg-light-blue-gray
    transition
    border
    border-dark-blue-gray
    hover:border-white
  cursor-pointer
  sm:flex
  `}
      >
        <div className="flex items-center gap-[10px]">
          <span className="text-2xl ">{icon}</span>
          <span className="text-sm">{title}</span>
        </div>
      </div>
    </>
  );
};

export default Thread;
