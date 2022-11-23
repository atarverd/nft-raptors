import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { FaRegUser, FaWallet } from "react-icons/fa";
import Cart from "../../components/cart/cart";
import { useNavigate } from "react-router";

const style = {
  height: "50px",
  width: "40px",
  color: "FFF",
  background: "#333",
  "border-radius": "50%",
  margin: "10px",
};

const HeaderIcons = () => {

  const navigate = useNavigate()

  const handleUserPage = () => {
    navigate("/MsnQm8QFZUHDEJ8QrYfQ");
  };

  return (
    <Flex mr='3rem'>
      <Box ml='10px' cursor='pointer' onClick={handleUserPage}>
        <FaRegUser size='30px' />
      </Box>
      <Box ml='10px' cursor='pointer'>
        <FaWallet size='30px' />
      </Box>
      <Box ml='10px' cursor='pointer'>
        <Cart />
      </Box>
    </Flex>
  );
};

export default HeaderIcons;
