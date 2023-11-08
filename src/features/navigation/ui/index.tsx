import { Container, MenuItem, Typography } from "@mui/material";
import React from "react";
import { Logo } from "./Logo";
import { NavigationBox, StyledAppBar, StyledToolbar } from "./styles";
import { TContactBox } from "./TContactBox";

const pages = ["Главная", "Ассортимент", "Контакты", "О нас"];

export const Navigation = () => {
  return (
    <StyledAppBar>
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <NavigationBox>
            <Logo />
            {pages.map((page) => (
              <MenuItem key={page}>
                <Typography
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize={"18px"}
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </NavigationBox>
          <TContactBox />
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};
