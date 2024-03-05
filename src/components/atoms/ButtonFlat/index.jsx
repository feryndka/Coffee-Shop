import React from "react";

export default function ButtonFlat({ children, ...props }) {
  return (
    <button
      {...props}
      className="border border-black px-4 py-1.5 rounded-full hover:bg-black/10 transition-all"
    >
      {children}
    </button>
  );
}
