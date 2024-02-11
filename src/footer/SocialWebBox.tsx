import { SocialBox, SocialImageBox } from "./styles";
import { Typography } from "@mui/material";

export const SocialWebBox = () => {
  return (
    <SocialBox>
      <Typography fontWeight={"bold"} fontSize={"18px"} color={"#8d8e8e"}>
        teploobmen78@mail.ru
      </Typography>
      <SocialImageBox>
        <img src="/whatsapp.svg" width={32} height={32} alt="WhatsApp"></img>
        <img src="/instagram.svg" width={32} height={32} alt="Instagram"></img>
      </SocialImageBox>
    </SocialBox>
  );
};
