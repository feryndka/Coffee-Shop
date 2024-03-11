'use client'
import Card from "@/components/molecules/Card-3d";
import React from "react";

import Slider from "../Slider";

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
    {
      title: "Drinks",
      subtitle: "Cold Drinks",
      image: "/assets/imagesCoffee/menu/drink-8.avif",
    },
    {
      title: "Food",
      subtitle: "Burger",
      image: "/assets/imagesCoffee/menu/food-1.avif",
    },
    {
      title: "Drinks",
      subtitle: "Iced Teas",
      image: "/assets/imagesCoffee/menu/drink-7.avif",
    },
    {
      title: "Merchandise",
      subtitle: "Cup",
      image: "/assets/imagesCoffee/menu/merchandise-2.jpeg",
    },
  ];

  return (
    <div className="md:flex md:flex-col h-[90vh] items-center justify-center">
      <div className="md:text-5xl text-3xl font-bold">
        Best Seller In Our Store
      </div>
      <div>
        <Slider>
          {content.map((item, index) => (
            <Slider.Content key={index}>
              <Card
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
              />
            </Slider.Content>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSeller;
