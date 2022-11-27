import React from "react";
import { Box, Image, Center, Flex, Text } from "@chakra-ui/react";

type TProp = {
  img:string
}
const NftItemPage = ({img}:TProp) => {
  return (
    <Flex
      id='image-wrapper'
      m='10px'
      w={[300, 400, 500]}
      h={[400, 500, 600]}
      borderRadius='10px'
      align='center'
      justify='center'
      
      flexDirection='column'
    >
      <Image
      w='90%'
      h='90%'
      borderRadius='10px'
        src={img}
      />
    </Flex>
  );
};

export default NftItemPage;
