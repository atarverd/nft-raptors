import Loader from "../loading";
import { useParams } from "react-router";
import GlobCard from "../cards/globCard";
import useGetNfts from "../../hooks/useGetNfts";
import CollectionHeader from "./collectionHeader";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

const Collection = () => {
  const { id } = useParams();

  const { nfts, isLoaded } = useGetNfts("collectionId", id as string);

  return (
    <Box>
      <CollectionHeader nftCount={nfts?.length} />
      {!isLoaded ? (
        <Loader />
      ) : (
        <SimpleGrid columns={[1, null, 3, 5]} my='50px' mx='60px'>
          {nfts?.map((item) => (
            <GlobCard nft={item} key={item.id} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Collection;
