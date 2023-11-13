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
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { Height } from "@mui/icons-material";

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
            sx={{ width: 740, height: 450 }}
            image={item.image}
          />
        ))}
      </StyledCarousel>
    </StyledCard>
  );
};
