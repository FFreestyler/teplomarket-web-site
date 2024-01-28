import { Box, Typography } from "@mui/material";
import React from "react";
import { AssortmentBox } from "./style";
import { AssortmentImageBox } from "./AssortmentImageBox";
import { StartDivider, StyledContainer } from "@/style";

const items = [
  {
    id: 1,
    image: "vekalogo.png",
  },
  {
    id: 2,
    image: "gornyaklogo.png",
  },
  {
    id: 3,
    image: "htlogo.png",
  },
  {
    id: 4,
    image: "nmklogo.png",
  },
  {
    id: 5,
    image: "prometeylogo.png",
  },
  {
    id: 6,
    image: "teplodarlogo.png",
  },
  {
    id: 7,
    image: "nmksiblogo.png",
  },
  {
    id: 8,
    image: "vekalogo.png",
  },
];

export const AssortmentCard = () => {
  return (
    <StyledContainer>
      <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <StartDivider orientation="vertical" flexItem />
        <Typography fontWeight={"bold"} fontSize={44}>
          Ассортимент
        </Typography>
      </Box>
      <AssortmentBox>
        {items.map((item) => (
          <AssortmentImageBox key={item.id} src={item.image} alt={""} />
        ))}
      </AssortmentBox>
    </StyledContainer>
  );
};
