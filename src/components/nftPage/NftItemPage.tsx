import React from "react";
import { Box, Image, Center, Flex, Text } from "@chakra-ui/react";

const NftItemPage = () => {
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
        src='https://i.seadn.io/gae/7SPzkCiCzVk67hRGBPmFPg0mZc5lnLiud1mOor1dfMBSXo66Oex8kA50Iy1qsUENKDIs7BkTWkfNPU5IeZCTbcEz6XZ6lSXwUj7lEQ?auto=format&w=1920'
      />
    </Flex>
  );
};

export default NftItemPage;
