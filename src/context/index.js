import { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext(null);

const answersData = [
  {
    label: "Приветсвие",
    input: "Привет, как дела?",
    output: "Привет, все отлично!",
  },
  {
    label: "Цель бота",
    input: "Для чего ты создан?",
    output: "Я нужен для того чтобы помогать студентам!",
  },
  {
    label: "Приветсвие",
    input: "Привет, как дела?",
    output: "Привет, все отлично!",
  },
  {
    label: "Цель бота",
    input: "Для чего ты создан?",
    output: "Я нужен для того чтобы помогать студентам!",
  },
  {
    label: "Приветсвие",
    input: "Привет, как дела?",
    output: "Привет, все отлично!",
  },
  {
    label: "Цель бота",
    input: "Для чего ты создан?",
    output: "Я нужен для того чтобы помогать студентам!",
  },
];

const directionsData = [
  {
    name: "Туризм",
    code: "43.03.02",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur sit omnis dolorem inventore! Ipsum in beatae quo delectus aspernatur enim, eaque, molestias officiis magni illum alias at qui voluptate pariatur!",
    count: "15",
    specialCount: "3",
    price: "60000",
    score: "200",
    univerity: "ВШУ",
  },
  {
    name: "Инноватика",
    code: "27.03.05",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur sit omnis dolorem inventore! Ipsum in beatae quo delectus aspernatur enim, eaque, molestias officiis magni illum alias at qui voluptate pariatur!",
    count: "15",
    specialCount: "3",
    price: "60000",
    score: "200",
    univerity: "ИРГЯИГТ",
  },
  {
    name: "Лингвистика - немецкий и английский языки",
    code: "43.03.02",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur sit omnis dolorem inventore! Ipsum in beatae quo delectus aspernatur enim, eaque, molestias officiis magni illum alias at qui voluptate pariatur!",
    count: "15",
    specialCount: "3",
    price: "60000",
    score: "200",
    univerity: "ИГРЯИГТ",
  },
  {
    name: "Менеджмент",
    code: "43.03.02",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur sit omnis dolorem inventore! Ipsum in beatae quo delectus aspernatur enim, eaque, molestias officiis magni illum alias at qui voluptate pariatur!",
    count: "15",
    specialCount: "3",
    price: "60000",
    score: "200",
    univerity: "ВШУ",
  },
  {
    name: "Психология",
    code: "43.03.02",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur sit omnis dolorem inventore! Ipsum in beatae quo delectus aspernatur enim, eaque, molestias officiis magni illum alias at qui voluptate pariatur!",
    count: "15",
    specialCount: "3",
    price: "60000",
    score: "200",
    univerity: "ВШУ",
  },
  {
    name: "Теология",
    code: "48.03.01",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur sit omnis dolorem inventore! Ipsum in beatae quo delectus aspernatur enim, eaque, molestias officiis magni illum alias at qui voluptate pariatur!",
    count: "15",
    specialCount: "3",
    price: "60000",
    score: "200",
    univerity: "ИМО",
  },
];

const univer = [
  "ИРГЯИГТ",
  "ВШДиА",
  "ВШУ",
  "ИЗОИТОП",
  "ИИЯМТ",
  "ИМО",
  "ИПРиМ",
  "ИПКВК",
  "ИРГЯИиГТ",
  "ЮИ",
];

function AppContextProvider({ children }) {
  const [answers, setAnswers] = useState(answersData || []);
  const [directions, setDirections] = useState(directionsData || []);
  const unvercities = useRef(univer || []);

  return (
    <AppContext.Provider
      value={{
        answers,
        setAnswers,
        directions,
        setDirections,
        unvercities: unvercities.current,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function AppState() {
  return useContext(AppContext);
}

export default AppContextProvider;
