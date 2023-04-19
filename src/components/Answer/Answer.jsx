import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  Heading,
  IconButton,
} from "@chakra-ui/react";

function Answer({ label, input, output }) {
  return (
    <Card bg="#fff" p={15} mt={5} borderRadius={6} position="relative">
      <IconButton
        position="absolute"
        top={2}
        right={2}
        pl="7px"
        colorScheme="teal"
        leftIcon={<DeleteIcon />}
      />
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
