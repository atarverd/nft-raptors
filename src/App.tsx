import CreateCollectionPage from "./pages/createCollection";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import CollectionPage from "./pages/collectionPage";
import { ChakraProvider } from "@chakra-ui/react";
import CreateNftPage from "./pages/createNftPage";
import SettingsPage from "./pages/settingsPage";
import ListNftpage from "./pages/listNftPage";
import SignUp from "./components/auth/signUp";
import LiveList from "./components/liveLine";
import { Routes, Route } from "react-router";
import CategoryPage from "./pages/category";
import SearchPage from "./pages/searchPage";
import LogIn from "./components/auth/logIn";
import UserPage from "./pages/userPage";
import { Provider } from "react-redux";
import NftPage from "./pages/nftPage";
import Header from "./layout/header";
import store from "./store/store";
import Main from "./pages/main";
import theme from "./theme";


export const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/:id' element={<UserPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/nft/:id' element={<NftPage />} />
        <Route path='/list/:id' element={<ListNftpage />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/create-nft' element={<CreateNftPage />} />
        <Route path='/search/:querys' element={<SearchPage />} />
        <Route path='/collection/:id' element={<CollectionPage />} />
        <Route path='/create-collection' element={<CreateCollectionPage />} />
      </Routes>
      <LiveList />
    </ChakraProvider>
  </Provider>
);
