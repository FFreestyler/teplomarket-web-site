import { Container, Typography } from "@mui/material";
import { Logo } from "./Logo";
import {
  NavigationBox,
  StyledAppBar,
  StyledMenuItem,
  StyledToolbar,
} from "./styles";
import { ContactBox } from "./ContactBox";

const pages = ["Главная", "Ассортимент", "Контакты", "О нас"];

export const Navigation = () => {
  return (
    <StyledAppBar position="relative">
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <NavigationBox>
            <Logo />
            {pages.map((page) => (
              <StyledMenuItem key={page}>
                <Typography
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize={"18px"}
                >
                  {page}
                </Typography>
              </StyledMenuItem>
            ))}
          </NavigationBox>
          <ContactBox />
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};
