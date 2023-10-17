import { Box, Input, Flex, Text, Heading, Button } from "@chakra-ui/react"

function App() {

  return (
    <Flex id="main-container" background={"#19191f"} w={"100vw"} h={"100vh"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
      <Heading as={"h1"} color={"white"} mb={"3"}>Info Météo</Heading>
      <Flex id="app-container" padding={"6"} w={"500px"} background={"#fff"} borderRadius={"3xl"}>
        <Flex id="input-container" alignItems={"center"} justifyContent={"space-around"} w={"100%"}>
          <Input variant={"flushed"} placeholder="Rentrer une ville...." w={"200px"}/>
          <Button>Vérifier la météo</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
