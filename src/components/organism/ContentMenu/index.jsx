import LeftMenu from "@/components/molecules/LeftMenu";
import RightMenu from "@/components/molecules/RightMenu";
import React from "react";

const ContentMenu = () => {
  return (
    <div className="mt-10 flex w-[80vw] mx-auto">
      <LeftMenu />
      <RightMenu />
    </div>
  );
};

export default ContentMenu;
