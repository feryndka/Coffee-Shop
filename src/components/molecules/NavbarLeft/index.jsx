"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLeft = () => {
  const pathname = usePathname();
  const navLink = [
    {
      name: "MENU",
      link: "/menu",
    },
    {
      name: "REWARDS",
      link: "/rewards",
    },
    {
      name: "GIFT CARDS",
      link: "/gift",
    },
  ];

  return (
    <div className="flex gap-3 items-center">
      <Image
        alt="logo"
        src={"/assets/images/logo.png"}
        height={60}
        width={60}
      />
      {navLink.map((item, index) => (
        <div className="flex gap-5 ms-5" key={index}>
          <Link
            href={item.link}
            className={`${
              pathname.startsWith(item.link)
                ? "font-bold text-amber-900 relative h-[10vh] flex items-center justify-center"
                : "font-bold hover:text-amber-900"
            }`}
          >
            {item.name}
            {pathname.startsWith(item.link) ? (
              <div className="h-1 bg-amber-900 absolute bottom-0 left-0 right-0"></div>
            ) : null}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavbarLeft;
