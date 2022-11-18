import React from "react";
import HeaderLogoAndSearch from "./HeaderLogoAndSearch";
import HeaderIcons from "./HeaderIcons";
import { Box, Flex, Spacer } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as='header'
      h='150px'
      bgGradient='linear(to-b, #EDFDFD, #fff  )'
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
