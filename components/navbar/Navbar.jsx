import React from "react";
import Logo from "../../public/OmniGPT.png";
import Image from "next/image";
import Avatar from "./Avatar";

const Navbar = () => {
  return (
    <section className="flex items-center justify-between h-16 px-6 shadow-md">
      <div>
        <Image src={Logo} alt="Logo" />
      </div>
      <div>
        <Avatar />
      </div>
    </section>
  );
};

export default Navbar;
