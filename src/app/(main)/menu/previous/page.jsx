import NavbarMenu from "@/components/organism/NavbarMenu";
import NotSignin from "@/components/organism/NotSignin";
import React from "react";

const Previous = () => {
  return (
    <div>
      <NavbarMenu />
      <NotSignin
        title={"Previous"}
        src={"/assets/images/previous.webp"}
        header={"When history repeats itself"}
        content={"Previous orders will appear here to quickly order again"}
      />
    </div>
  );
};

export default Previous;
