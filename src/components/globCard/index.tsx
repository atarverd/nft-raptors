import signup from "../../assets/signup.jpg";
import { Box, Text, Stack, Image, Button, Heading } from "@chakra-ui/react";

type TNft={
  nft:{
  img:string;
  name:string;
  currentPrice:number;
  }
}

const GlobCard = ({nft}:TNft) => {
  return (
    <Box>
      <Box
        maxW='200px'
        borderRadius='8px'
        overflow='hidden'
        boxShadow='0 0 24px 4px rgba(0, 0, 0, 0.15)'
      >

        <Image
          src={nft.img}
          w='200px'
          h='220px'
          borderRadius='5px'
          transition='transform .2s;'
          _hover={{ 'transform': 'scale(1.1)' }} />

        <Stack p='3' bg='#EBF8FF'>
          <Heading fontSize='2xl'>{nft.name}</Heading>
          <Text>price: {nft.currentPrice}</Text>
          <Button colorScheme='messenger'>Add To Cart</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default GlobCard;