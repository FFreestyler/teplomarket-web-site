import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { StyledCheckBoxGroup } from "./StyledCheckBoxGroup";
import {
  BackCallButton,
  StartDivider,
  StyledCard,
  StyledCardContent,
  StyledCarousel,
} from "./style";

const items = [
  {
    id: 1,
    image: "carousel1.png",
  },
  {
    id: 2,
    image: "logo.png",
  },
];

export const CarouselCard = () => {
  return (
    <StyledCard>
      <StyledCardContent>
        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <StartDivider orientation="vertical" flexItem />
          <Typography fontWeight={"bold"} fontSize={44}>
            Отопительное оборудование
          </Typography>
        </Box>
        <StyledCheckBoxGroup />
        <BackCallButton variant="contained">
          Заказать обратный звонок
        </BackCallButton>
      </StyledCardContent>
      <StyledCarousel animation="slide" indicators={false}>
        {items.map((item) => (
          <CardMedia
            key={item.id}
            component="img"
            sx={{ width: "100%", height: 450, objectFit: "contain" }}
            image={item.image}
          />
        ))}
      </StyledCarousel>
    </StyledCard>
  );
};
