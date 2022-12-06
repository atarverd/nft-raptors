import Loader from "../loading";
import { useParams } from "react-router";
import GlobCard from "../cards/globCard";
import useGetNfts from "../../hooks/useGetNfts";
import CollectionHeader from "./collectionHeader";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";


const Collection = () => {
	const { id } = useParams();

	const { nfts, isLoaded } = useGetNfts('collectionId', id as string);

	return (
		<Box>
			<CollectionHeader nftCount={nfts?.length} />
			{!isLoaded ? (
				<Loader />
			) : (
				<Flex display='flex' justifyContent='space-around'>
					<SimpleGrid spacing='40px' columns={[1, 3, 5]} m='20px'>
						{nfts?.map((item) => (
							<GlobCard nft={item} key={item.id} />
						))}
					</SimpleGrid>
				</Flex>
			)}
		</Box>
	);
};

export default Collection;
