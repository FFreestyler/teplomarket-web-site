import { AppBar, Box, Toolbar, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
  display: flex;
  flex-direction: row;
  height: 120px;
  box-shadow: none;
  margin-bottom: 1rem;
  background: #fff;
  box-shadow: 0px 5px 5px gray;
`;

export const StyledToolbar = styled(Toolbar)`
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContactBox = styled(Box)`
  height: 80%;
  gap: 1rem;
  display: flex;
  align-items: center;
  color: black;
`;

export const NavigationBox = styled(Box)`
  display: flex;
  color: black;
`;

export const NumberBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

export const SocialBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: black;
`;

export const SocialImageBox = styled(Box)`
  display: flex;
  justify-content: flex-start;
`;
