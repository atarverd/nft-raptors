import React from "react";
import { Box, Flex, Text, Link, Button } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router";
import { getAuth } from "firebase/auth";
import {useParams} from 'react-router-dom'

type TInfo = {
  collectionId: string;
  collectionName: string;
  name: string;
  favorite: number;
  currentPrice: number;
  owner: string;
  ownerId: string;
  isForSold:boolean;
};

const NftBasicInfo = ({
  collectionId,
  collectionName,
  name,
  favorite,
  currentPrice,
  owner,
  ownerId,
  isForSold,
}: TInfo) => {
  const {id}=useParams()
  const navigate = useNavigate();
  const user=getAuth()
  const isOwner=user?.currentUser?.uid===ownerId
  console.log(isOwner)
  const navigateToUser = () => {
    navigate("/" + ownerId);
  };
  const navigateToListNft = () => {
    navigate("/list/" + id);
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
       {isOwner
        ?<Button colorScheme='messenger' w='200px' color='#fff' bg='#2081e2' onClick={navigateToListNft}>
        List Nft
      </Button>
          :isForSold && <Button colorScheme='messenger' w='200px' color='#fff' bg='#2081e2'>
          Add to Cart
        </Button>
        }
      </Box>
    </>
  );
};

export default NftBasicInfo;
