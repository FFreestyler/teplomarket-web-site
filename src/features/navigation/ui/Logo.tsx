"use client";

import { Box, Button, styled } from "@mui/material";
import teplomarketLogo from "./logo.svg";
import React from "react";

export const StyledLogoImage = styled(Box)`
  max-height: 28px;
` as typeof Box;

export const StyledLogoButton = styled(Button)`
  padding: 0;
`;

export const Logo = () => {
  return (
    <StyledLogoButton variant="text">
      <StyledLogoImage component="img" src={teplomarketLogo} />
    </StyledLogoButton>
  );
};
