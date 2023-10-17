import { Input, Flex, Text, Heading, Button, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useRef, useState } from "react"

function App() {

  const API_KEY = ""
  const INPUT_REF = useRef()
  
  const [mainHeight, setMainHeight] = useState("300px") //! Valeur defaut 100px
  const [alreadyFetched, setAlreadyFetched] = useState(false)


  function fetchWeather(city){
    // On arrête la fonction si l'input est vide
    if (INPUT_REF.current.value == null) return

    if (!alreadyFetched) {
      setMainHeight("300px")
      setAlreadyFetched(true)
    }

    console.log(city)
  }

  return (
    <Flex id="main-container" background={"#19191f"} w={"100vw"} h={"100vh"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
      <Heading as={"h1"} color={"white"} mb={"3"}>Info Météo</Heading>
      <Flex id="app-container" padding={"6"} w={"500px"} h={mainHeight} background={"#fff"} borderRadius={"3xl"} transition={"all"} transitionDuration={"0.3s"} display={'flex'} alignItems={"flex-start"} flexDirection={"column"}>
        <Flex id="input-container" alignItems={"center"} justifyContent={"space-around"} w={"100%"}>
          <InputGroup w={"100%"}>
            <Input variant={"flushed"} placeholder="Rentrer une ville...." _placeholder={{color: "black"}} ref={INPUT_REF}/>
            <InputRightElement width='4.5rem'>
              <Button h={"30px"} colorScheme="facebook" fontWeight={"light"} onClick={() => fetchWeather(INPUT_REF.current.value)}>Vérifier</Button >
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Text id="degrée" fontSize={"2rem"}>20°C</Text>
      </Flex>
    </Flex>
  )
}

export default App
