import React from "react";
import { NumberBox, StyledContactBox } from "./styles";
import { Typography } from "@mui/material";

export const ContactBox = () => {
  return (
    <StyledContactBox>
      <NumberBox>
        <Typography fontWeight={"bold"} fontSize={"18px"} color={"#8d8e8e"}>
          +7 (777) 28-04-200 - Наталья
        </Typography>
        <Typography fontWeight={"bold"} fontSize={"18px"} color={"#8d8e8e"}>
          +7 (777) 14-52-000 - Антон
        </Typography>
        <Typography fontWeight={"bold"} fontSize={"18px"} color={"#8d8e8e"}>
          +7 (7232) 56-65-15
        </Typography>
      </NumberBox>
    </StyledContactBox>
  );
};
