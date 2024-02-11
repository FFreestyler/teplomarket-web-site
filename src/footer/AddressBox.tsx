import { Typography } from "@mui/material";
import { StyledAddressBox } from "./styles";

export const AddressBox = () => {
  return (
    <StyledAddressBox>
      <Typography fontSize={"18px"} color={"#8d8e8e"}>
        г. Усть-Каменогорск
      </Typography>
      <Typography fontSize={"18px"} color={"#8d8e8e"}>
        пр. Нурсултана-Назарбаева 164
      </Typography>
    </StyledAddressBox>
  );
};
