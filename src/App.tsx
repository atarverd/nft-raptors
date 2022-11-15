import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Routes, Route } from "react-router";
import SignUp from "./components/auth/signUp";
import LogIn from "./components/auth/logIn";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  </ChakraProvider>
);
