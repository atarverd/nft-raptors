import React, { useEffect, useState, useRef } from "react";
import { Flex, Box, Image, useToast, useColorMode, useDisclosure } from "@chakra-ui/react";
import { FaRegUser, FaWallet } from "react-icons/fa";
import Cart from "../../components/cart/cart";
import userDark from "../../assets/userWhite.png";
import userLight from "../../assets/user.png";
import { useNavigate } from "react-router";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import logOutDark from "../../assets/logOutWhite.png";
import logOutLight from "../../assets/logOut.png";
import CardModal from "../../components/cardModal";


const style = {
  height: "50px",
  width: "40px",
  color: "FFF",
  background: "#333",
  "border-radius": "50%",
  margin: "10px",
};

const HeaderIcons = () => {

  const navigate = useNavigate();
  const loggedUser = getAuth();
  const [user, setUser] = useState(false);

  const toast = useToast();
  const { colorMode } = useColorMode();

  const handleUserPage = () => {
    if (loggedUser.currentUser) navigate("/" + loggedUser.currentUser?.uid);
    else navigate("/login");
  };

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(true);
        // ...
      } else {
        setUser(false)
      }
    });
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {

        navigate("/");
        toast({
          title: "Logged Out",
          duration: 3000,
          position: "top-right",
          variant: "subtle",
        });
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Flex mr='4.5rem'>
      <Box ml='10px' cursor='pointer'>
        {/* <FaRegUser size='30px' /> */}
        <Image
          boxSize='35px'
          src={colorMode === "light" ? userLight : userDark}
          onClick={handleUserPage}
        />
      </Box>
      <Box ml='15px' cursor='pointer'>
        <CardModal />
      </Box>
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
