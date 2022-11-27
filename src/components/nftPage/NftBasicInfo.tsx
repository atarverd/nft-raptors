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
  ownerId: string;
};

const NftBasicInfo = ({
  collectionId,
  collectionName,
  name,
  favorite,
  currentPrice,
  owner,
  ownerId,
}: TInfo) => {
  const navigate = useNavigate();

  const navigateToUser = () => {
    navigate("/" + ownerId);
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
            <Flex alignItems='center'>
              <FaRegHeart size='25px' />
              <Text ml='5px'>{favorite}</Text>
            </Flex>
          </Text>
        </Flex>
      </Box>

      <Box w='500px' h='120px'>
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
