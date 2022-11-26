import ListCard from "./listCard";
import ListInfo from "./listInfo";
import { useParams } from "react-router";
import { useState } from 'react';
import { Box, Flex } from "@chakra-ui/react";

type TNft = {
  id: string;
  img: string;
  name: string;
  currentPrice: number;
}

const ListNft = () => {

  const { id } = useParams()
  const [nfts, setNfts] = useState<TNft[]>()


  return (
    <Box m='15px'>
      <Flex display='flex' justifyContent='center'>
        <Box>
          <Flex display='flex'>
            <ListInfo />
          </Flex>
        </Box>

        <Box ml='50px'>
          <Flex display='flex'>
            <ListCard nft={{
              id: "",
              img: "",
              name: "",
              currentPrice: 0
            }} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ListNft;