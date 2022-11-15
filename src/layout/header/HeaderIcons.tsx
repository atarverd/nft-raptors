import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { FaRegUser, FaWallet, FaShoppingCart } from "react-icons/fa";

const style = {
  height: "50px",
  width: "40px",
  color: "FFF",
  background: "#333",
  "border-radius": "50%",
  margin: "10px",
};

const HeaderIcons = () => {
  return (
    <Flex mr='3rem'>
      <Box ml='10px' cursor='pointer'>
        <FaRegUser size='30px' />
      </Box>
      <Box ml='10px' cursor='pointer'>
        <FaWallet size='30px' />
      </Box>
      <Box ml='10px' cursor='pointer'>
        <FaShoppingCart size='30px' />
      </Box>
    </Flex>
  );
};

export default HeaderIcons;
