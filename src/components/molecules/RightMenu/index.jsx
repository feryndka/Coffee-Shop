import { DATA_MENU } from "@/utils/menu-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightMenu = () => {
  return (
    <div className="w-full">
      <div className="font-bold text-3xl">Menu</div>
      {DATA_MENU.map((item, index) => (
        <div key={index}>
          <div className="font-bold text-2xl mt-10">{item.header}</div>
          <div className="h-px bg-black/10 my-5"></div>
          <div className="grid grid-cols-2 flex flex-col">
            {item.content.map((subItem, index) => (
              <Link
                className="mb-7 mt-3 flex items-center gap-3"
                key={index}
                href={"/"}
              >
                <div className="h-28 w-28">
                  <Image
                    alt="drink"
                    src={subItem.images}
                    height={100}
                    width={100}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="text-xl">{subItem.text}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightMenu;
