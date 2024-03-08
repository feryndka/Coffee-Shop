import NavbarMenu from "@/components/organism/NavbarMenu";
import NotSignin from "@/components/organism/NotSignin";
import React from "react";

const Favorites = () => {
  return (
    <div>
      <NavbarMenu />
      <NotSignin
        title={"Favorites"}
        src={"/assets/images/favorites.webp"}
        header={"Save your favorite mixes"}
        content={
          "Use the heart to save customizations. Your favorites will appear here to order again."
        }
      />
    </div>
  );
};

export default Favorites;
