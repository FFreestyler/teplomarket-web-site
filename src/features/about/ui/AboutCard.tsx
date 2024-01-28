import React from "react";
import { Box, Typography } from "@mui/material";
import { StartDivider, StyledContainer } from "@/features/style";
import { CardBox, StyledTypography } from "./style";
import { TextWithLogo } from "./TextWithLogo";

const items = [
  {
    id: 0,
    title: "Доставка в день покупки",
    text: "У нас вы можете быть уверены, что ваше отопительное оборудование будет доставлено в самый короткий срок. Мы ценим ваше время и гарантируем доставку в день покупки, чтобы вы могли начать наслаждаться теплом и комфортом без лишних ожиданий.",
  },
  {
    id: 1,
    title: "Большой ассортимент",
    text: "У нас представлен огромный выбор котлов, печей и другого отопительного оборудования. У нас есть все, чтобы удовлетворить ваши потребности, независимо от размера и типа вашего дома. Вы можете выбрать из разнообразных брендов и моделей, чтобы найти идеальное решение для вашего дома.",
  },
  {
    id: 2,
    title: "Индивидуальный подход",
    text: "Мы понимаем, что каждый клиент уникален, и каждый дом имеет свои особенности. Наши специалисты готовы предложить вам индивидуальные рекомендации и помочь выбрать оборудование, которое наилучшим образом подходит к вашим потребностям.",
  },
  {
    id: 3,
    title: "Любой вид оплаты",
    text: "Мы ценим ваше удобство, поэтому предоставляем разнообразные варианты оплаты. У нас можно оплатить как наличными, так и банковской картой. Мы также предлагаем гибкие условия кредитования, чтобы сделать покупку отопительного оборудования еще более доступной.",
  },
];

export const AboutCard = () => {
  return (
    <StyledContainer>
      <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <StartDivider orientation="vertical" flexItem />
        <Typography fontWeight={"bold"} fontSize={44}>
          О нас
        </Typography>
      </Box>
      <StyledTypography fontWeight={"bold"}>
        ТОО “ТЕПЛОМАРКЕТ” - это ваш надежный партнер в мире отопительного
        оборудования.
      </StyledTypography>
      <StyledTypography>
        Мы гордимся предоставлением высококачественных котлов и печей, а также
        обеспечиваем удовлетворение всех ваших потребностей. Наша компания
        придерживается самых высоких стандартов качества. Мы тщательно отбираем
        производителей и поставщиков, чтобы предложить нашим клиентам только
        проверенные и надежные продукты. Вот, почему мы - лучший выбор:
      </StyledTypography>
      <CardBox>
        {items.map((item) => (
          <TextWithLogo key={item.id} title={item.title} text={item.text} />
        ))}
      </CardBox>
    </StyledContainer>
  );
};
