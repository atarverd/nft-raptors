import ItemCard from "./itemCard";
import Accordions from "./accordion";
import { Box, Flex } from "@chakra-ui/react";

const Search = () => {
  return (
    <Box m='15px'>
      <Flex display='flex' justifyContent='space-around'>
        <Box>
          <Flex display='flex'>
            <Accordions />
          </Flex>
        </Box>

        <Box>
          <Flex display='flex'>
            <ItemCard />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Search;
