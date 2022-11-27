import React from "react";
import { Flex, Box, Image, useToast } from "@chakra-ui/react";
import { FaRegUser, FaWallet } from "react-icons/fa";
import Cart from "../../components/cart/cart";
import user from "../../assets/user.png";
import wallet from "../../assets/wallet.png";
import { useNavigate } from "react-router";
import { getAuth, signOut } from "firebase/auth";
import logOut from "../../assets/logOut.png";

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

  const toast = useToast();

  const handleUserPage = () => {
    if (loggedUser.currentUser) navigate("/" + loggedUser.currentUser?.uid);
    else navigate("/login");
  };

  const auth = getAuth();
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
        <Image boxSize='35px' src={user} onClick={handleUserPage} />
      </Box>
      <Box ml='15px' cursor='pointer'>
        <Image src={wallet} boxSize='35px' />
      </Box>
      <Box ml='15px' cursor='pointer'>
        <Cart />
      </Box>
      {auth.currentUser ? (
        <Box ml='15px' cursor='pointer'>
          <Image src={logOut} boxSize='30px' onClick={logout} />
        </Box>
      ) : null}
    </Flex>
  );
};

export default HeaderIcons;
