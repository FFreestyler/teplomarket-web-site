import { Button, Card, CardContent, Divider, styled } from "@mui/material";
import Carousel from "react-material-ui-carousel";

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: none;
`;

export const BackCallButton = styled(Button)`
  background-color: #fc142c;
  font-weight: bold;
  font-size: 18px;
  color: black;
  &:hover {
    background-color: #b20b0e;
  }
`;

export const StartDivider = styled(Divider)`
  width: 4px;
  height: 50px;
  background-color: #fc142c;
  margin-top: 0.5rem;
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: row;
  ${(props) => props.theme.breakpoints.down("sm")} {
    flex-direction: column-reverse;
  }
`;

export const StyledCarousel = styled(Carousel)`
  width: 80%;
  ${(props) => props.theme.breakpoints.down("sm")} {
    width: 100%;
  }
`;
