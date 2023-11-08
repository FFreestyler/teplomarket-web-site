import {
  Button,
  CardContent,
  Divider,
  Typography,
  styled,
} from "@mui/material";

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
