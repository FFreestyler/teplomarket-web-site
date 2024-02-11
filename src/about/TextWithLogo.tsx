import { Box } from "@mui/material";
import { StyledTypography, TextBox, TitleBox, TitleTypography } from "./style";
import minilogo from "../assets/minilogo.png";

type TextProps = {
  title: string;
  text: string;
};

export const TextWithLogo = (props: TextProps) => {
  return (
    <TextBox>
      <TitleBox>
        <Box
          component={"img"}
          src={minilogo}
          sx={{ width: "8%", height: "auto" }}
        />
        <TitleTypography>{props.title}</TitleTypography>
      </TitleBox>
      <StyledTypography>{props.text}</StyledTypography>
    </TextBox>
  );
};
