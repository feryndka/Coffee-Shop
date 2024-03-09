import Card from "@/components/molecules/Card-3d";
import React from "react";

const BestSeller = () => {
  const content = [
    {
      title: "Drinks",
      subtitle: "Cold Coffees",
      image: "/assets/imagesCoffee/menu/drink-6.avif",
    },
    {
      title: "Food",
      subtitle: "Sandwich",
      image: "/assets/imagesCoffee/menu/food-4.avif",
    },
    {
      title: "Coffee",
      subtitle: "Bean",
      image: "/assets/imagesCoffee/menu/athome-1.avif",
    },
    {
      title: "Merchandise",
      subtitle: "Tumblers",
      image: "/assets/imagesCoffee/menu/merchandise-1.avif",
    },
  ];
  return (
    <div>
      <div className="md:text-5xl text-3xl font-bold text-center p-10">
        Best Seller In Our Store
      </div>
      <div className="md:flex md:gap-10 justify-center">
        {content.map((item, index) => (
          <Card key={index} title={item.title} subtitle={item.subtitle} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
