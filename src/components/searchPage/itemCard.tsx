import {
  Box,
  SimpleGrid
} from "@chakra-ui/react";
import GlobCard from "../globCard";


const ItemCard = () => {
  return (
    <Box>
      <SimpleGrid spacing='40px' columns={4}>
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