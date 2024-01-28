import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      width={310}
      height={56}
      priority
      alt={"Teplomarket"}
    />
  );
};
