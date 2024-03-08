import ButtonBlack from "@/components/atoms/ButtonBlack";
import ButtonFlat from "@/components/atoms/ButtonFlat";
import Image from "next/image";
import React from "react";

const NotSignin = ({ title, src, header, content }) => {
  return (
    <div className="w-[25vw] h-[83vh] mx-auto flex flex-col items-center">
      <h1 className="font-bold text-2xl pt-10">{title}</h1>
      <div>
        <div className="my-5 w-full flex items-center justify-center">
          <Image alt="gif" src={src} height={300} width={300} />
        </div>
        <div className="flex flex-col gap-5 items-center">
          <h1 className="font-semibold text-3xl text-center">{header}</h1>
          <p className="text-lg text-center">{content}</p>
          <div className="flex gap-3 font-bold">
            <ButtonFlat>Sign in</ButtonFlat>
            <ButtonBlack>Join now</ButtonBlack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotSignin;
