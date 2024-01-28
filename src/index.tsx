import { Navigation } from "@/navigation/Navigation";
import "../app/global.css";
import { Carousel } from "@/carousel/Carousel";
import { Container } from "@mui/material";
import { About } from "@/about/About";
import { Assortment } from "@/assortment";
import { MapFooter } from "@/map/MapFooter";
import { Footer } from "@/footer/Footer";
import { StyledContainerHome } from "./style";

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
