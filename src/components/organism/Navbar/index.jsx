import NavbarLeft from "@/components/molecules/NavbarLeft";
import NavbarRight from "@/components/molecules/NavbarRight";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[12vh] items-center px-10 border-b-2 shadow-lg text-sm font-semibold">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
