import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarLeft = () => {
  return (
    <div className="flex gap-3 items-center">
      <Image
        alt="logo"
        src={"/assets/images/logo.png"}
        height={60}
        width={60}
        className=""
      />
      <div className="flex gap-5 ms-5">
        <Link href={"#"} className="font-bold hover:text-amber-900">
          MENU
        </Link>
        <Link href={"#"} className="font-bold hover:text-amber-900">
          REWARDS
        </Link>
        <Link href={"#"} className="font-bold hover:text-amber-900">
          GIFT CARDS
        </Link>
      </div>
    </div>
  );
};

export default NavbarLeft;
