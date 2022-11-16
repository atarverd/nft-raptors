import React from "react";
import HeaderLogoAndSearch from "./HeaderLogoAndSearch";
import HeaderIcons from "./HeaderIcons";
import { Box, Flex, Spacer } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as='header'
      h='60px'
      bgGradient='repeating-linear(to-r,  #ecf2f8, #feeef2 , #ecf2f8, #feeef2)'
    >
      <Flex align='center' h='100%'>
        <HeaderLogoAndSearch />
        <Spacer />
        <HeaderIcons />
      </Flex>
    </Box>
  );
};

export default Header;
