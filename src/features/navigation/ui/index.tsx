import { Container, Divider, MenuItem, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Logo } from "./Logo";
import {
  ContactBox,
  NavigationBox,
  NumberBox,
  SocialBox,
  SocialImageBox,
  StyledAppBar,
  StyledToolbar,
} from "./styles";

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
          <ContactBox>
            <NumberBox>
              <Typography fontWeight={"bold"} fontSize={"18px"}>
                +7 (777) 28-04-200
              </Typography>
              <Typography fontWeight={"bold"} fontSize={"18px"}>
                +7 (7232) 56-65-15
              </Typography>
            </NumberBox>
            <Divider orientation="vertical" variant="middle" flexItem />
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
          </ContactBox>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};
