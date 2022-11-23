import React from "react";
import { Box, Flex, Text, Link, Button } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";

const NftBasicInfo = () => {
  return (
    <>
      <Box w='500px' h='120px'>
        <Flex flexDirection='column'>
          <Link _hover={{ textDecoration: "none" }} color='#2081e2'>
            Collection Name
          </Link>
          <Text as='b' fontSize='2xl'>
            Item Name
          </Text>
          <Text>
            Owned by &nbsp;
            <Link _hover={{ textDecoration: "none" }} color='#2081e2'>
              Name
            </Link>
          </Text>
          <Text>
            <FaRegHeart />
          </Text>
        </Flex>
      </Box>

      <Box w='500px' h='120px' bg='#fbfdff'>
        <Text>Current Price</Text>
        <Text>$ 700 </Text>
        <Button colorScheme='messenger' w='200px' color='#fff' bg='#2081e2'>
          Add to Cart
        </Button>
      </Box>
    </>
  );
};

export default NftBasicInfo;
