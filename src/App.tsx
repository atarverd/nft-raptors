import { ChakraProvider, theme } from "@chakra-ui/react";
import CollectionPage from "./pages/collectionPage";
import SignUp from "./components/auth/signUp";
import { Routes, Route } from "react-router";
import SearchPage from "./pages/searchPage";
import LogIn from "./components/auth/logIn";
import UserPage from "./pages/userPage";
import NftPage from "./pages/nftPage";
import Header from "./layout/header";
import Main from "./pages/main";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/:id' element={<UserPage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/nft/:id' element={<NftPage />} />
      <Route path='/search/:q' element={<SearchPage />} />
      <Route path='/collection/:id' element={<CollectionPage />} />
    </Routes>
  </ChakraProvider>
);
