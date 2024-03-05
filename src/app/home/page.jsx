import ButtonFlat from "@/components/atoms/ButtonFlat";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="px-[5vw] py-[5vh]">
      <div className="h-[630px] flex mb-8">
        <div className="bg-[#cfd84d] h-full w-6/12 flex flex-col items-center justify-center">
          <div className="w-[80%] h-[80%] flex flex-col text-center justify-center">
            <div className="text-6xl font-semibold">
              Subtle, sweet and shaken
            </div>
            <div className="px-10 my-7 text-xl font-medium">
              Our new Oleato Golden Foam Iced Shaken Espresso with Toffeenut is
              velvety smooth and deliciously lush
            </div>
            <div>
              <ButtonFlat>Order now</ButtonFlat>
            </div>
          </div>
        </div>
        <div className="bg-black/40 h-full w-6/12">
          <Image
            src={"/assets/imagesCoffee/coffee-1.jpg"}
            alt="coffee"
            className="h-full w-full"
            height={500}
            width={500}
          />
        </div>
      </div>
      {/* <div className="h-[630px] flex mb-8">
        <div className="bg-black/40 h-full w-6/12">
          <Image
            src={"/assets/imagesCoffee/coffee-1.jpg"}
            alt="coffee"
            className="h-full w-full"
            height={500}
            width={500}
          />
        </div>
        <div className="bg-[#cfd84d] h-full w-6/12 flex flex-col items-center justify-center">
          <div className="w-[80%] h-[80%] flex flex-col text-center justify-center">
            <div className="text-6xl font-semibold">
              Subtle, sweet and shaken
            </div>
            <div className="px-10 my-7 text-xl font-medium">
              Our new Oleato Golden Foam Iced Shaken Espresso with Toffeenut is
              velvety smooth and deliciously lush
            </div>
            <div>
              <ButtonFlat>Order now</ButtonFlat>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
