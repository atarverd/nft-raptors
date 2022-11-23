import {
  Box,
  SimpleGrid
} from "@chakra-ui/react";
import GlobCard from "../globCard";

type TNfts = {
  nfts?: {
    id:string;
    img: string;
    name: string;
    currentPrice: number;
  }[]
}

const ItemCard = ({ nfts }: TNfts) => {

  return (
    <Box>
      <SimpleGrid spacing='40px' columns={4}>
        {nfts?.map(item => <GlobCard nft={item} />)}
        {/* <GlobCard />
        <GlobCard />
        <GlobCard />
        <GlobCard />
        <GlobCard />
        <GlobCard />
        <GlobCard /> */}
      </SimpleGrid>
    </Box>
  );
};

export default ItemCard;