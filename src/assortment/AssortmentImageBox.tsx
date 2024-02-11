import { PictureBox } from "./style";
import { BoxProps } from "@mui/material";

type ImgProps = {
  alt: string;
  src: string;
};

export const AssortmentImageBox = (props: BoxProps & ImgProps) => {
  return <PictureBox component="img" {...props} />;
};
