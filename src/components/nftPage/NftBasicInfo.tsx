import React from "react";
import { Box, Flex, Text, Link, Button } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router";

type TInfo = {
  collectionId: string;
  collectionName: string;
  name: string;
  favorite: number;
  currentPrice: number;
  owner: string;
};

const NftBasicInfo = ({
  collectionId,
  collectionName,
  name,
  favorite,
  currentPrice,
  owner,
}: TInfo) => {
  const navigate = useNavigate();

  const navigateToUser = () => {
    navigate("/" + owner);
  };

  const navigateToCollection = (collectionId: string) => {
    navigate("/collection/" + collectionId);
  };

  return (
    <>
      <Box w='500px' h='120px'>
        <Flex flexDirection='column'>
          <Link
            onClick={() => {
              navigateToCollection(collectionId);
            }}
            _hover={{ textDecoration: "none" }}
            color='#2081e2'
          >
            {collectionName}
          </Link>
          <Text as='b' fontSize='2xl'>
            {name}
          </Text>
          <Text>
            Owned by &nbsp;
            <Link
              onClick={navigateToUser}
              _hover={{ textDecoration: "none" }}
              color='#2081e2'
            >
              {owner}
            </Link>
          </Text>
          <Text>
            <Flex>
              <FaRegHeart />
              {favorite}
            </Flex>
          </Text>
        </Flex>
      </Box>

      <Box w='500px' h='120px' bg='#fbfdff'>
        <Text>Current Price</Text>
        <Text>{currentPrice}$</Text>
        <Button colorScheme='messenger' w='200px' color='#fff' bg='#2081e2'>
          Add to Cart
        </Button>
      </Box>
    </>
  );
};

export default NftBasicInfo;
