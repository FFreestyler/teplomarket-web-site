import { Container } from "@mui/material";
import { Carousel } from "./carousel/Carousel";
import { Navigation } from "./navigation/Navigation";
import { StyledContainerHome } from "./style";
import { Assortment } from "./assortment";
import { About } from "./about/About";
import { MapFooter } from "./map/MapFooter";
import { Footer } from "./footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <StyledContainerHome>
        <Carousel />
      </StyledContainerHome>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          marginTop: "1rem",
          boxShadow: "0px -4px 5px 0px gray",
          padding: "0 0 0 0",
        }}
      >
        <Assortment />
        <About />
        <MapFooter />
        <Footer />
      </Container>
    </>
  );
}
