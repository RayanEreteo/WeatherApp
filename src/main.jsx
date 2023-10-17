import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import "@fontsource/montserrat";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat, helvetica",
    body: "Montserrat, helvetica"
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
