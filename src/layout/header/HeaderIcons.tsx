import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { FaRegUser, FaWallet } from "react-icons/fa";
import Cart from "../../components/cart/cart";
import user from "../../assets/user.png";
import { Image } from "@chakra-ui/react";

const HeaderIcons = () => {
  return (
    <Flex mr='3rem'>
      <Box ml='10px' cursor='pointer'>
        {/* <FaRegUser size='30px' /> */}
        <Image src={user} />
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
