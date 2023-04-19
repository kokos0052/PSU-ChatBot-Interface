import { Box, Button, useDisclosure, Modal } from "@chakra-ui/react";
import CreateModal from "../CreateModal/CreateModal";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  function changePage(path) {
    navigate(path);
  }

  return (
    <Box
      h="100vh"
      w="100%"
      background="gray.100"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={5}
    >
      <Button
        pos="absolute"
        top={30}
        right={30}
        padding="25px 20px"
        backgroundColor="#00AC97"
        color="white"
        fontWeight={700}
        _hover={{ bg: "rgba(0, 172, 151, 0.7)" }}
        borderRadius="25px"
        fontSize={16}
        onClick={onOpen}
      >
        Создать ответ
      </Button>
      <Box display="flex" flexDir="column" alignItems="center"  p={5}>
        <Box fontSize={22} fontWeight={700} color="#00AC97">
          Добро пожаловать
        </Box>
        <Box fontSize={60} fontWeight={700} color="#14261C" mt={5}>
          Выберите нужную вам опцию
        </Box>
        <Button
          padding="30px 20px"
          backgroundColor="#00AC97"
          color="white"
          fontWeight={700}
          _hover={{ bg: "rgba(0, 172, 151, 0.7)" }}
          borderRadius="25px"
          fontSize={22}
          marginTop={7}
          onClick={() => changePage("/answers")}
        >
          Посмотреть ответы
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <CreateModal onClose={onClose} />
      </Modal>
    </Box>
  );
}

export default AdminPage;
