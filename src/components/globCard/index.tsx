import signup from "../../assets/signup.jpg";
import { Box, Text, Stack, Image, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type TNft = {
  nft: {
    id: string;
    img: string;
    name: string;
    currentPrice: number;
  };
};

const GlobCard = ({ nft }: TNft) => {
  const navigate = useNavigate();

  const toNftPage = () => {
    navigate("/nft/" + nft.id);
  };


  return (
    <Box>
      <Box
        maxW='200px'
        borderRadius='8px'
        overflow='hidden'
        boxShadow='0 0 24px 4px rgba(0, 0, 0, 0.15)'
        bg='white'
      >
        <Image
          onClick={toNftPage}
          src={nft.img}
          w={[100,150,200]}
          h='220px'
          borderRadius='5px'
          transition='transform .2s;'
          _hover={{ transform: "scale(1.1)" }}
        />

        <Stack p='3' bg='#EBF8FF'>
          <Text onClick={toNftPage} fontSize='2xl'  noOfLines={1}>
            {nft.name}
          </Text>
          <Text>price: {nft.currentPrice}</Text>
          <Button colorScheme='messenger'>Add To Cart</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default GlobCard;
