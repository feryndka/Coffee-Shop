import ButtonBlack from "@/components/atoms/ButtonBlack";
import ButtonFlat from "@/components/atoms/ButtonFlat";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const NavbarRight = () => {
  return (
    <div className="flex gap-3 items-center">
      <div className="me-10 flex gap-2 hover:text-amber-900 cursor-pointer items-center">
        <IoLocationSharp size={25} />
        Find a store
      </div>
      <ButtonFlat>Sign in</ButtonFlat>
      <ButtonBlack>Join now</ButtonBlack>
    </div>
  );
};

export default NavbarRight;
