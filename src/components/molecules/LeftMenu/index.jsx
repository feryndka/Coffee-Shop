import { DATA_MENU } from "@/utils/menu-data";
import Link from "next/link";
import React from "react";

const LeftMenu = () => {
  return (
    <div className="w-[20vw]">
      {DATA_MENU.map((item, index) => (
        <div key={index} className="me-20">
          <div className="font-semibold text-xl mb-5">{item.header}</div>
          <div className="flex flex-col gap-4 text-black/60 font-medium  mb-10">
            {item.content.map((subItem, index) => (
              <Link href={"#"} key={index} className="hover:text-amber-900">
                {subItem.text}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftMenu;
