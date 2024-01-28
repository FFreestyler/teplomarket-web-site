import React from "react";
import { DividerBox, StyledContainer } from "./styles";
import { ContactBox } from "./ContactBox";
import { SocialWebBox } from "./SocialWebBox";
import { AddressBox } from "./AddressBox";

export const Footer = () => {
  return (
    <StyledContainer maxWidth={false}>
      <ContactBox />
      <DividerBox orientation="vertical" flexItem />
      <SocialWebBox />
      <DividerBox orientation="vertical" flexItem />
      <AddressBox />
    </StyledContainer>
  );
};
