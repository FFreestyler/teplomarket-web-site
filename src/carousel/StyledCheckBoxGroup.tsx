import { Box, Typography, styled } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const StyledLabelBox = styled(Box)`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledCheckBoxGroup = () => {
  return (
    <StyledBox>
      <StyledLabelBox>
        <CheckBoxIcon fontSize="small" sx={{ color: "#ff101d" }} />
        <Typography fontWeight={"bold"} fontSize={22}>
          Надежное качество
        </Typography>
      </StyledLabelBox>
      <StyledLabelBox>
        <CheckBoxIcon fontSize="small" sx={{ color: "#ff101d" }} />
        <Typography fontWeight={"bold"} fontSize={22}>
          На рынке более 10 лет
        </Typography>
      </StyledLabelBox>
      <StyledLabelBox>
        <CheckBoxIcon fontSize="small" sx={{ color: "#ff101d" }} />
        <Typography fontWeight={"bold"} fontSize={22}>
          Индивидуальный подход к клиенту
        </Typography>
      </StyledLabelBox>
    </StyledBox>
  );
};
