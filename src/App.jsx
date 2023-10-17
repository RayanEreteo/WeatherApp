import { Box, Input, Flex, Text, Heading } from "@chakra-ui/react"

function App() {

  return (
    <Flex id="main-container" background={"#19191f"} w={"100vw"} h={"100vh"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
      <Heading as={"h1"} color={"white"} mb={"3"}>Info Météo</Heading>
      <Flex id="app-container" padding={"6"} w={"500px"} background={"#fff"} borderRadius={"3xl"}>
        <form action="">
          <Input placeholder="Rentrer une ville...." background={"rgba(0,0,0,0.2)"}/>
        </form>
      </Flex>
    </Flex>
  )
}

export default App
