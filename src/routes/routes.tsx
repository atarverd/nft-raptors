import Main from "../pages/main";
import NftPage from "../pages/nftPage";
import UserPage from "../pages/userPage";
import CategoryPage from "../pages/category";
import { Routes, Route } from "react-router";
import SearchPage from "../pages/searchPage";
import LogIn from "../components/auth/logIn";
import SignUp from "../components/auth/signUp";
import ListNftPage from "../pages/listNftPage";
import AboutUsPage from "../pages/aboutUsPage";
import SettingsPage from "../pages/settingsPage";
import CreateNftPage from "../pages/createNftPage";
import CollectionPage from "../pages/collectionPage";
import CreateCollectionPage from "../pages/createCollection";

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/:id' element={<UserPage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/nft/:id' element={<NftPage />} />
      <Route path='/list/:id' element={<ListNftPage />} />
      <Route path='/about-us' element={<AboutUsPage />} />
      <Route path='/settings' element={<SettingsPage />} />
      <Route path='/create-nft' element={<CreateNftPage />} />
      <Route path='/category/:id' element={<CategoryPage />} />
      <Route path='/search/:querys' element={<SearchPage />} />
      <Route path='/collection/:id' element={<CollectionPage />} />
      <Route path='/create-collection' element={<CreateCollectionPage />} />
    </Routes>
  );
};

export default Routing;
