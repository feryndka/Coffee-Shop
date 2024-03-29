import NavbarLeft from "@/components/molecules/NavbarLeft";
import NavbarRight from "@/components/molecules/NavbarRight";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[10vh] items-center px-10 text-sm font-bold shadow-md">
      <div className="w-[95%] flex justify-between mx-auto">
        <NavbarLeft />
        <NavbarRight />
      </div>
    </div>
  );
};

export default Navbar;
