import React from "react";
import { Box, Image, Center, Flex, Text } from "@chakra-ui/react";

const NftItemPage = () => {
  return (
    <Flex
      id='image-wrapper'
      m='10px'
      w='300px'
      h='400px'
      borderRadius='10px'
      border='1px'
      borderColor='gray'
      align='center'
      justify='center'
      pt='15px'
      flexDirection='column'
    >
      <Image
        w='100%'
        h='100%'
        borderBottomRightRadius='10px'
        borderBottomLeftRadius='10px'
        src='https://i.seadn.io/gae/7SPzkCiCzVk67hRGBPmFPg0mZc5lnLiud1mOor1dfMBSXo66Oex8kA50Iy1qsUENKDIs7BkTWkfNPU5IeZCTbcEz6XZ6lSXwUj7lEQ?auto=format&w=1920'
      />
    </Flex>
  );
};

export default NftItemPage;
