import { Box, Typography } from "@mui/material";
import { AssortmentBox } from "./style";
import { AssortmentImageBox } from "./AssortmentImageBox";
import { StartDivider, StyledContainer } from "../style";
import vekalogo from "../assets/vekalogo.png";
import gornyaklogo from "../assets/gornyaklogo.png";
import htlogo from "../assets/htlogo.png";
import nmklogo from "../assets/nmklogo.png";
import prometeylogo from "../assets/prometeylogo.png";
import teplodarlogo from "../assets/teplodarlogo.png";
import nmksiblogo from "../assets/nmksiblogo.png";

const items = [
  {
    id: 1,
    image: vekalogo,
  },
  {
    id: 2,
    image: gornyaklogo,
  },
  {
    id: 3,
    image: htlogo,
  },
  {
    id: 4,
    image: nmklogo,
  },
  {
    id: 5,
    image: prometeylogo,
  },
  {
    id: 6,
    image: teplodarlogo,
  },
  {
    id: 7,
    image: nmksiblogo,
  },
  {
    id: 8,
    image: vekalogo,
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
