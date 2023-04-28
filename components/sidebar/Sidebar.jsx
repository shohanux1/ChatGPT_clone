"use client";

import React from "react";
import Thread from "./Thread";

import { BiSearch, BiPlus } from "react-icons/bi";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import Search from "./Search";

const Sidebar = () => {
  return (
    <section className="w-20 sm:w-60 p-[10px] bg-dark-blue-gray text-white h-[calc(100vh-4rem)]">
      <div className="space-y-[10px]">
        <Search />
        {/* <Thread search icon={<BiSearch />} /> */}
        <Thread newThread title="New Working Thread" icon={<BiPlus />} />
        <Thread
          isActive
          title="New Thread"
          icon={<HiOutlineChatBubbleOvalLeftEllipsis />}
        />
        <Thread
          title="New Thread"
          icon={<HiOutlineChatBubbleOvalLeftEllipsis />}
        />
        <Thread
          title="New Thread"
          icon={<HiOutlineChatBubbleOvalLeftEllipsis />}
        />
      </div>
    </section>
  );
};

export default Sidebar;
