import { Box, Typography, styled } from "@mui/material";

export const StyledTypography = styled(Typography)`
  font-size: large;
  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: medium;
  }
`;

export const TitleTypography = styled(Typography)`
  font-size: 30px;
  font-weight: bold;
  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: x-large;
  }
`;

export const TitleBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const CardBox = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 500px));
  column-gap: 5rem;
  row-gap: 3rem;
`;

export const TextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
