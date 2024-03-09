import ButtonFlat from "@/components/atoms/ButtonFlat";
import { DATA_FEATURED } from "@/utils/menu-data";
import Image from "next/image";
import React from "react";

const ContentFeatured = () => {
  return (
    <div className="w-[90vw] mx-auto text-center">
      <h1 className="font-bold text-5xl mb-20 mt-5">Spring it on</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-full">
        {DATA_FEATURED.map((item, index) => (
          <div key={index}>
            <div>
              <Image
                alt="drink"
                src={item.image}
                height={500}
                width={500}
                className="h-full w-full rounded-t-lg"
              />
            </div>
            <div className={`${item.color} rounded-b-lg h-64`}>
              <div className="flex items-center flex-col justify-between w-[85%] mx-auto gap-7 py-5 h-full">
                <div className="font-bold text-2xl">{item.title}</div>
                <div className="text-lg">{item.subtitle}</div>
                <ButtonFlat>Order now</ButtonFlat>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentFeatured;
