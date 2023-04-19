import { Box, Card, CardBody, CardHeader } from "@chakra-ui/react";

function Direction({
  name,
  code,
  description,
  count,
  specialCount,
  price,
  score,
  univerity,
}) {
  return (
    <Card mt={5}>
      <CardHeader fontSize={32} fontWeight={700}>
        {name} {code}
      </CardHeader>
      <Box fontSize={24} fontWeight={600} p={5} color="teal">
        {univerity}
      </Box>
      <CardBody>{description}</CardBody>
      <Box
        w="100%"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        p={5}
      >
        <Box>Количество мест: {count}</Box>
        <Box>Количество мест особой квоты: {specialCount}</Box>
      </Box>
      <Box
        p={5}
        display="flex"
        justifyContent="flex-end"
        fontWeight={600}
        color="#00AC97"
      >
        Цена обучения - {price}
      </Box>
    </Card>
  );
}

export default Direction;
