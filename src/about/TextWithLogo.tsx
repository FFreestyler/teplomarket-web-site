import { Box } from "@mui/material";
import { StyledTypography, TextBox, TitleBox, TitleTypography } from "./style";

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
          src="./minilogo.png"
          sx={{ width: "8%", height: "auto" }}
        />
        <TitleTypography>{props.title}</TitleTypography>
      </TitleBox>
      <StyledTypography>{props.text}</StyledTypography>
    </TextBox>
  );
};
