import {
  Box,
  Text,
  Stack,
  Image,
  Heading
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type TNft = {
  nft: {
    id: string;
    img: string;
    name: string;
    currentPrice: number;
  };
};

const ListCard = ({ nft }: TNft) => {
  const navigate = useNavigate();

  const toNftPage = () => {
    navigate("/nft/" + nft.id);
  };


  return (
    <Box>
      <Box
        maxW='300px'
        borderRadius='8px'
        overflow='hidden'
        boxShadow='0 0 24px 4px rgba(0, 0, 0, 0.15)'
      >
        <Image
          onClick={toNftPage}
          src={nft.img}
          w='300px'
          h='250px'
          borderRadius='5px'
          transition='transform .2s;'
          _hover={{ transform: "scale(1.1)" }}
        />

        <Stack p='3' bg='#EBF8FF'>
          <Heading onClick={toNftPage} fontSize='1xl'>
            {nft.name} Name: Raptors
          </Heading>
          <Text>price: {nft.currentPrice}</Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default ListCard;
