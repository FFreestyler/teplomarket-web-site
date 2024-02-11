import { SocialBox, SocialImageBox } from "./styles";
import { Typography } from "@mui/material";
import whatsapplogo from "../assets/whatsapp.svg";
import instagramlogo from "../assets/instagram.svg";

export const SocialWebBox = () => {
  return (
    <SocialBox>
      <Typography fontWeight={"bold"} fontSize={"18px"} color={"#8d8e8e"}>
        teploobmen78@mail.ru
      </Typography>
      <SocialImageBox>
        <img src={whatsapplogo} width={32} height={32} alt="WhatsApp"></img>
        <img src={instagramlogo} width={32} height={32} alt="Instagram"></img>
      </SocialImageBox>
    </SocialBox>
  );
};
