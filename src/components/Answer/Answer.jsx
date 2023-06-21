import {
  Box,
  Card,
  Heading,
} from "@chakra-ui/react";

function Answer({ label, input, output }) {
  return (
    <Card bg="#fff" p={15} mt={5} borderRadius={6} position="relative">

      <Heading color="#00AC97" as="h3" size="lg">
        {label}
      </Heading>
      <Box>
        <Box>Вопрос: {input}</Box>
        <Box>Ответ: {output}</Box>
      </Box>
    </Card>
  );
}

export default Answer;
