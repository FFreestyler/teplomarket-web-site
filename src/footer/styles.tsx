import { Box, Container, Divider, styled } from "@mui/material";

export const StyledContainer = styled(Container)`
  width: 100%;
  display: flex;
  gap: 2rem;
  background-color: #1c1d1e;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

export const StyledContactBox = styled(Box)`
  height: 80%;
  gap: 1rem;
  display: flex;
  color: black;
`;

export const NumberBox = styled(Box)`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: start;
`;

export const SocialBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const StyledAddressBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const SocialImageBox = styled(Box)`
  display: flex;
  justify-content: flex-start;
`;

export const DividerBox = styled(Divider)`
  border-color: #8d8e8e;
`;
