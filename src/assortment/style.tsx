import { Box, styled } from "@mui/material";

export const PictureBox = styled(Box)`
  width: 250px;
  ${(props) => props.theme.breakpoints.down("sm")} {
    width: 100%;
  }
  border-radius: 4px;
  box-shadow: 0 0 8px 0 gray;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const AssortmentBox = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 275px);
  grid-template-rows: repeat(2, 168px);
  gap: 1.5rem;
  ${(props) => props.theme.breakpoints.down("sm")} {
    grid-template-columns: repeat(2, 175px);
    grid-template-rows: repeat(4, 150px);
    grid-row-gap: 0.5rem;
  }
`;
