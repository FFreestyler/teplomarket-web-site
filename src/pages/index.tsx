import { Navigation } from "@/features/navigation/ui/Navigation";
import "../app/global.css";
import { Carousel } from "@/features/carousel/ui/Carousel";
import { Container } from "@mui/material";
import { About } from "@/features/about/ui/About";
import { Assortment } from "@/features/assortment/ui";
import { MapFooter } from "@/features/map/ui/MapFooter";
import { Footer } from "@/features/footer/ui/Footer";
import { StyledContainer } from "../styles";

export default function Home() {
  return (
    <>
      <Navigation />
      <StyledContainer>
        <Carousel />
      </StyledContainer>
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
