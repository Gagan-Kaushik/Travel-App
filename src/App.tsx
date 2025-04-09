import React, { ReactElement } from 'react'
import AppRoutes from "./Routes/Routes";
import { ChakraProvider } from "@chakra-ui/react";
const App = (): ReactElement => {
  return (
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  )
}

export default App

