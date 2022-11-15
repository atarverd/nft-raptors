import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Routes, Route } from "react-router";
import SignUp from "./components/auth/signUp";
import LogIn from "./components/auth/logIn";
import { Routes, Route } from "react-router";
import NftPage from "./pages/nftPage";


export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/' element={<NftPage />} />
    </Routes>
  </ChakraProvider>
);
      

