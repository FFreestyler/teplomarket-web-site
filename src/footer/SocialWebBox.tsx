import React from "react";
import { SocialBox, SocialImageBox } from "./styles";
import { Typography } from "@mui/material";
import Image from "next/image";

export const SocialWebBox = () => {
  return (
    <SocialBox>
      <Typography fontWeight={"bold"} fontSize={"18px"} color={"#8d8e8e"}>
        teploobmen78@mail.ru
      </Typography>
      <SocialImageBox>
        <Image
          src="/whatsapp.svg"
          width={32}
          height={32}
          alt="WhatsApp"
        ></Image>
        <Image
          src="/instagram.svg"
          width={32}
          height={32}
          alt="Instagram"
        ></Image>
      </SocialImageBox>
    </SocialBox>
  );
};
