import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { StyledCheckBoxGroup } from "./StyledCheckBoxGroup";
import { BackCallButton, StartDivider, StyledCardContent } from "./style";

export const CarouselCard = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
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
      <CardMedia
        component="img"
        sx={{ width: 740, height: 450 }}
        image="main-01.jpg"
      />
    </Card>
  );
};
