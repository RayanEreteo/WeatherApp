import {
  Box,
  Input,
  Flex,
  Text,
  Heading,
  Button,
  InputGroup,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

function App() {
  const API_KEY = "ce86501f43804acd8bb5f670c9ff1800";
  const INPUT_REF = useRef();

  const [mainHeight, setMainHeight] = useState("100px");

  //? Info Serveur
  const [loading, setLoading] = useState(false)
  const [fetchSuccessful, setFetchSuccessful] = useState(false);
  const [error, setError] = useState("");

  //? Info Météo
  const [degree, setDegree] = useState(0);
  const [weatherInfo, setWeatherInfo] = useState();

  function fetchWeather(city) {
    // On arrête la fonction si l'input est vide
    if (city == "") {
      setError("Merci de rentrer une ville dans le champ.")
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => {
        if (res.status == 404) {
          setError("La ville entrée n'est pas valide.");
          return;
        }

        setError("");
        return res.json();
      })
      .then((data) => {
        if (data == null) return;

        setWeatherInfo(data);
        setDegree(Math.floor(data.main.temp))
        setMainHeight("400px")
        setFetchSuccessful(true)
      });
  }

  return (
    <Flex
      id="main-container"
      background={"#19191f"}
      w={"100vw"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Heading as={"h1"} color={"white"} mb={"3"}>
        Info Météo
      </Heading>
      <Flex
        id="app-container"
        padding={"6"}
        w={"500px"}
        h={mainHeight}
        overflow={"hidden"}
        background={"#fff"}
        borderRadius={"3xl"}
        transition={"all"}
        transitionDuration={"0.3s"}
        display={"flex"}
        alignItems={"flex-start"}
        flexDirection={"column"}
      >
        <Flex
          id="input-container"
          alignItems={"center"}
          justifyContent={"space-around"}
          w={"100%"}
        >
          <InputGroup w={"100%"}>
            <Input
              variant={"flushed"}
              placeholder="Rentrer une ville...."
              _placeholder={{ color: "black" }}
              ref={INPUT_REF}
            />
            <InputRightElement width="4.5rem">
              <Button
                h={"30px"}
                colorScheme="facebook"
                fontWeight={"light"}
                onClick={() => fetchWeather(INPUT_REF.current.value)}
              >
                Vérifier
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Flex
          display={fetchSuccessful ? "flex" : "none"}
          id="degrée-container"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          fontSize={"2rem"}
          m={"auto"}
        >
          <Text id="degrée">{degree}°C</Text>
          <Image src={`https://openweathermap.org/img/wn/${weatherInfo && weatherInfo.weather[0].icon}.png`}></Image>
        </Flex>
        <Flex
          display={fetchSuccessful ? "flex" : "none"}
          id="weather-info-container"
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          fontSize={"2rem"}
          w={"100%"}
        >
          <Text fontSize={"1.1rem"} id="wind-speed">
            {`Vitesse de vent : ${weatherInfo && weatherInfo.wind.speed} m/s`}
          </Text>
          <Text fontSize={"1.1rem"} id="humidity">
            {`Humidité : ${weatherInfo && weatherInfo.main.humidity}%`}
          </Text>
        </Flex>
      </Flex>
      <Box id="error-container">
        <Text
          color={"white"}
          mt={"3rem"}
          display={error ? "block" : "none"}
          background={"rgba(255, 0, 0, 0.58)"}
          padding={"1rem"}
          borderRadius={"2xl"}
        >
          {error}
        </Text>
      </Box>
    </Flex>
  );
}

export default App;
