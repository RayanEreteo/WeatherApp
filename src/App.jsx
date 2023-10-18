import { Input, Flex, Text, Heading, Button, InputGroup, InputRightElement, Image } from "@chakra-ui/react"
import { useRef, useState } from "react"

function App() {

  const API_KEY = ""
  const INPUT_REF = useRef()
  
  const [mainHeight, setMainHeight] = useState("400px") //! Valeur defaut 100px
  const [alreadyFetched, setAlreadyFetched] = useState(false)


  function fetchWeather(city){
    // On arrête la fonction si l'input est vide
    if (INPUT_REF.current.value == null) return

    if (!alreadyFetched) {
      setMainHeight("400px")
      setAlreadyFetched(true)
    }

    console.log(city)
  }

  return (
    <Flex id="main-container" background={"#19191f"} w={"100vw"} h={"100vh"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
      <Heading as={"h1"} color={"white"} mb={"3"}>Info Météo</Heading>
      <Flex id="app-container" padding={"6"} w={"500px"} h={mainHeight} overflow={"hidden"} background={"#fff"} borderRadius={"3xl"} transition={"all"} transitionDuration={"0.3s"} display={'flex'} alignItems={"flex-start"} flexDirection={"column"}>
        <Flex id="input-container" alignItems={"center"} justifyContent={"space-around"} w={"100%"}>
          <InputGroup w={"100%"}>
            <Input variant={"flushed"} placeholder="Rentrer une ville...." _placeholder={{color: "black"}} ref={INPUT_REF}/>
            <InputRightElement width='4.5rem'>
              <Button h={"30px"} colorScheme="facebook" fontWeight={"light"} onClick={() => fetchWeather(INPUT_REF.current.value)}>Vérifier</Button >
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Flex id="degrée-container" flexDirection={"column"} alignItems={"center"} justifyContent={"center"} fontSize={"2rem"} m={"auto"}>
          <Text id="degrée">20°C</Text>
          <Image src="https://openweathermap.org/img/wn/10d@2x.png"></Image>
        </Flex>
        <Flex id="weather-info-container" flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} fontSize={"2rem"} w={"100%"}>
          <Text fontSize={"1.1rem"} id="wind-speed">Vitesse de vent : 14 km/h</Text>
          <Text fontSize={"1.1rem"} id="humidity">Humidité : 10%</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
