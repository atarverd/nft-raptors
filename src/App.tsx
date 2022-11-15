import * as React from "react";
import { Routes, Route } from "react-router";
import NftPage from "./pages/nftPage";

import { ChakraProvider, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path='/' element={<NftPage />} />
    </Routes>
  </ChakraProvider>
);

