import { Box, Heading, IconButton } from "@chakra-ui/react";
import { AppState } from "../../context";
import Answer from "../Answer/Answer";
import { useEffect } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function AnswersPage() {
  const answers = AppState().answers;
  const navigate = useNavigate();

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
      <IconButton
        position="absolute"
        top={2}
        left={2}
        pl="7px"
        colorScheme="teal"
        onClick={() => navigate(-1)}
        leftIcon={<ArrowBackIcon />}
      />
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
          <>Список ответов пока пуст</>
        )}
      </Box>
    </Box>
  );
}

export default AnswersPage;
