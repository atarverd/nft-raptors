import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import Header from "./layout/header";
import SignUp from "./components/auth/signUp";
import LogIn from "./components/auth/logIn";
import NftPage from "./pages/nftPage";
import Main from "./pages/main";
import UserPage from "./pages/userPage";
import CollectionPage from "./pages/collectionPage";
import SearchPage from "./pages/searchPage";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/:id' element={<UserPage />} />
      <Route path='/collection/:id' element={<CollectionPage />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/nft/:id' element={<NftPage />} />
      <Route path='/search/:q' element={<SearchPage />} />
    </Routes>
  </ChakraProvider>
);
