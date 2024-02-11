import { Container, Divider, styled } from "@mui/material";

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
  gap: 3rem;
  margin-bottom: 2rem;
`;

export const StartDivider = styled(Divider)`
  width: 4px;
  height: 50px;
  background-color: #fc142c;
  margin-top: 0.5rem;
`;

export const StyledContainerHome = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
