import React from "react";
import {
  DividerBox,
  NumberBox,
  SocialBox,
  SocialImageBox,
  StyledContactBox,
} from "./styles";
import { Typography } from "@mui/material";
import Image from "next/image";

export const ContactBox = () => {
  return (
    <StyledContactBox>
      <NumberBox>
        <Typography fontWeight={"bold"} fontSize={"18px"}>
          +7 (777) 28-04-200
        </Typography>
        <Typography fontWeight={"bold"} fontSize={"18px"}>
          +7 (7232) 56-65-15
        </Typography>
      </NumberBox>
      <DividerBox orientation="vertical" variant="middle" flexItem />
      <SocialBox>
        <Typography fontWeight={"bold"} fontSize={"18px"}>
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
    </StyledContactBox>
  );
};
