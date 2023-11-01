import {
  AppBar,
  Box,
  Container,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Logo } from "./Logo";
import { StyledAppBar } from "./styles";

const pages = ["Главная", "Ассортимент", "Контакты", "О нас"];

export const Navigation = () => {
  return (
    <StyledAppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo></Logo>
          <Box sx={{ display: "flex" }}>
            {pages.map((page) => (
              <MenuItem key={page}>
                <Typography textAlign={"center"}>{page}</Typography>
              </MenuItem>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
