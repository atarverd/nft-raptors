import React from "react";
import HeaderLogoAndSearch from "./HeaderLogoAndSearch";
import HeaderIcons from "./HeaderIcons";
import { Box, Flex, Spacer } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as='header'
      h='80px'
      pb='20px'
    // bgGradient='linear(to-b, #EDFDFD,  rgb(235, 240, 248) )'
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
