"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ListMenu = () => {
  const pathname = usePathname();
  const list = [
    {
      name: "Menu",
      link: "/menu",
    },
    {
      name: "Featured",
      link: "#",
    },
    {
      name: "Previous",
      link: "#",
    },
    {
      name: "Favorites",
      link: "#",
    },
  ];
  return (
    <div className="flex h-full gap-5 items-center text-sm w-[80vw] mx-auto">
      {list.map((item, index) => (
        <Link
          className="relative h-full flex items-center"
          key={index}
          href={item.link}
        >
          {item.name}
          <div
            className={`${
              pathname.startsWith(item.link)
                ? "h-px bg-amber-900 absolute right-0 left-0 bottom-2.5"
                : null
            }`}
          ></div>
        </Link>
      ))}
    </div>
  );
};

export default ListMenu;