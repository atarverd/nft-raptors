import React from "react";
import { Flex, Image, Text, Input } from "@chakra-ui/react";
import logoImage from "../../assets/logo.svg";

const HeaderLogoAndSearch = () => {
  return (
    <Flex align='center' ml='5rem' w='70%'>
      <Image src={logoImage} borderRadius='full' boxSize='40px' />
      <Text as='b' ml='0.6rem' mr='3rem' fontSize='1.2rem'>
        OpenSea
      </Text>

      <Input
        placeholder='Search items, collections, and accounts'
        h='2.8rem'
        w='600px'
        bg='#fff'
        borderRadius='15px'
      />
    </Flex>
  );
};

export default HeaderLogoAndSearch;
