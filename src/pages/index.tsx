import { Navigation } from "@/features/navigation/ui";
import "../app/global.css";
import { Carousel } from "@/features/carousel/ui";
import { StyledContainer } from "./styles";

export default function Home() {
  return (
    <>
      <Navigation />
      <StyledContainer>
        <Carousel />
      </StyledContainer>
    </>
  );
}
