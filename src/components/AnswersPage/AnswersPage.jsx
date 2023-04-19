import { Box, Heading } from "@chakra-ui/react";
import { AppState } from "../../context";
import Answer from "../Answer/Answer";
import { useEffect } from "react";

function AnswersPage() {
  const answers = AppState().answers;

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      flexDir="column"
      alignItems="center"
      p={10}
      background="gray.100"
    >
      <Heading as="h2" size="2xl">
        Список ответов
      </Heading>
      <Box mt={5}>
        {answers.length ? (
          answers.map((answer, i) => (
            <Answer
              key={i}
              label={answer.label}
              input={answer.input}
              output={answer.output}
            />
          ))
        ) : (
          <>Список ответ пока пуст</>
        )}
      </Box>
    </Box>
  );
}

export default AnswersPage;
