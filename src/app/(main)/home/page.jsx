import ButtonFlat from "@/components/atoms/ButtonFlat";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-[80%] py-[5vh] mx-auto">
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
      <div className="h-[630px] flex mb-8">
        <div className="bg-black/40 h-full w-6/12">
          <Image
            src={"/assets/imagesCoffee/coffee-2.jpg"}
            alt="coffee"
            className="h-full w-full"
            height={500}
            width={500}
          />
        </div>
        <div className="bg-[#b2b267] h-full w-6/12 flex flex-col items-center justify-center">
          <div className="w-[80%] h-[80%] flex flex-col text-center justify-center">
            <div className="text-6xl font-semibold">Pass the pistachios</div>
            <div className="px-10 my-7 text-xl font-medium">
              Your favorite winter duo is back: the Pistachio Latte and
              Pistachio Cream Cold Brew.
            </div>
            <div>
              <ButtonFlat>Learn more</ButtonFlat>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[630px] flex mb-8">
        <div className="bg-[#cee8c9] h-full w-6/12 flex flex-col items-center justify-center">
          <div className="w-[80%] h-[80%] flex flex-col text-center justify-center">
            <div className="text-6xl font-semibold">Positively delicious</div>
            <div className="px-10 my-7 text-xl font-medium">
              Go for a nondairy pick-me-up with 150 calories or less in a
              grande. Choose the new Hazelnut Oatmilk Shaken Espresso or classic
              Brown Sugar Oatmilk Shaken Espresso.
            </div>
            <div>
              <ButtonFlat>Order now</ButtonFlat>
            </div>
          </div>
        </div>
        <div className="bg-black/40 h-full w-6/12">
          <Image
            src={"/assets/imagesCoffee/coffee-3.webp"}
            alt="coffee"
            className="h-full w-full"
            height={500}
            width={500}
          />
        </div>
      </div>
      <div className="h-[630px] flex mb-8">
        <div className="bg-black/40 h-full w-6/12">
          <Image
            src={"/assets/imagesCoffee/coffee-4.webp"}
            alt="coffee"
            className="h-full w-full"
            height={500}
            width={500}
          />
        </div>
        <div className="bg-[#dbe6f2] h-full w-6/12 flex flex-col items-center justify-center">
          <div className="w-[80%] h-[80%] flex flex-col text-center justify-center">
            <div className="text-6xl font-semibold">
              Protein-packed goodness
            </div>
            <div className="px-10 my-7 text-xl font-medium">
              Fuel your day with a Bacon, Sausage & Egg Wrap or the new Chicken,
              Maple Butter & Egg Sandwich.
            </div>
            <div>
              <ButtonFlat>Order now</ButtonFlat>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
