import { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Image,
  useToast,
  useColorMode,
  Button,
  Text,
} from "@chakra-ui/react";
import Cart from "../../components/cart/cart";
import userDark from "../../assets/userWhite.png";
import userLight from "../../assets/user.png";
import { useNavigate } from "react-router";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import logOutDark from "../../assets/logOutWhite.png";
import logOutLight from "../../assets/logOut.png";
import CardModal from "../../components/cardModal";

const HeaderIcons = () => {
  const navigate = useNavigate();
  const loggedUser = getAuth();
  const [user, setUser] = useState(false);

  const toast = useToast();
  const { colorMode } = useColorMode();

  const navigateUser = () => {
    if (loggedUser.currentUser) navigate("/" + loggedUser.currentUser?.uid);
    else navigate("/login");
  };

  const navigateAboutUs = () => {
    navigate("/about-us");
  };

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
      navigate("/");
      toast({
        title: "Logged Out",
        duration: 3000,
        position: "top-right",
        variant: "subtle",
      });
    });
  };
  return (
    <Flex mr='4.5rem' alignItems='center'>
      <Box ml='15px' cursor='pointer'>
        <Text onClick={navigateAboutUs} fontSize='20px' mr='10px'>
          About Us
        </Text>
      </Box>
      <Box ml='10px' cursor='pointer'>
        {/* <FaRegUser size='30px' /> */}
        <Image
          boxSize='35px'
          src={colorMode === "light" ? userLight : userDark}
          onClick={navigateUser}
        />
      </Box>
      {user && (
        <Box ml='15px' cursor='pointer'>
          <CardModal />
        </Box>
      )}
      <Box ml='15px' cursor='pointer'>
        <Cart />
      </Box>
      {user ? (
        <Box ml='15px' cursor='pointer'>
          <Image
            src={colorMode === "light" ? logOutLight : logOutDark}
            boxSize='30px'
            onClick={logout}
          />
        </Box>
      ) : null}
    </Flex>
  );
};

export default HeaderIcons;
