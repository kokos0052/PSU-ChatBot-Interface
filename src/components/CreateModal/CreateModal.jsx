import {
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendAnswer } from "../../mics/api";

function CreateModal({ onClose }) {
    const [label, setLabel] = useState("");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    function setField(e, fieldSetter)  {
        fieldSetter(e.target.value);
    }

    async function createAnswer() {
      const data = {
        label,
        input,
        output,
      }

      const response = await sendAnswer(data);

      if (response) {
        onClose();
      }
    }

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Добавьте новый вопрос</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Тема вопроса</FormLabel>
            <Input placeholder="Тема вопроса" value={label} onChange={(e) => setField(e, setLabel)} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Вопрос</FormLabel>
            <Input placeholder="Вопрос" value={input} onChange={(e) => setField(e, setInput)} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Ответ</FormLabel>
            <Input placeholder="Ответ" value={output} onChange={(e) => setField(e, setOutput)} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="teal"
            mr={3}
            backgroundColor="#00AC97"
            color="white"
            fontWeight={700}
            onClick={createAnswer}
            _hover={{ bg: "rgba(0, 172, 151, 0.7)" }}
          >
            Создать
          </Button>
          <Button onClick={onClose}>Отмена</Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
}

export default CreateModal;
