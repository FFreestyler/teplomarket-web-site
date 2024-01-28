import { Box } from "@mui/material";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import React from "react";

export const MapFooter = () => {
  return (
    <YMaps>
      <Box>
        <Map
          defaultState={{ center: [49.987679, 82.571308], zoom: 17 }}
          width={"100%"}
        >
          <Placemark geometry={[49.987679, 82.571308]} />
        </Map>
      </Box>
    </YMaps>
  );
};
