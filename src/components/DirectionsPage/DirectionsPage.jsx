import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import { AppState } from "../../context";
import Direction from "../Direction/Direction";

function DirectionsPage() {
  const unvercities = AppState().unvercities;
  const directions = AppState().directions;

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
        Направления нашего университета
      </Heading>
      {/* <Card mt={5} size="lg">
        <InputGroup>
          <Input placeholder="Поиск" _placeholder={{ color: "#00AC97" }} />
          <InputRightElement children={<SearchIcon color="#00AC97" />} />
        </InputGroup>
      </Card>
      <Card mt={5}>
        {unvercities.length && (
          <Select>
            {unvercities.map((univer, i) => (
              <option key={i} value={univer}>
                {univer}
              </option>
            ))}
          </Select>
        )}
      </Card> */}

      {directions.map((direction, i) => (
        <Direction
          key={i}
          name={direction.name}
          code={direction.code}
          description={direction.description}
          count={direction.count}
          specialCount={direction.specialCount}
          price={direction.price}
          score={direction.score}
          univerity={direction.univerity}
        />
      ))}
    </Box>
  );
}

export default DirectionsPage;
