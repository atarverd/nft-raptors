import { Box, SimpleGrid } from "@chakra-ui/react";
import GlobCard from "../cards/globCard";

type TNfts = {
  nfts?: {
    id: string;
    img: string;
    name: string;
    currentPrice: number;
    ownerId: string;
    isForSold:boolean;
  }[];
};

const ItemCard = ({ nfts }: TNfts) => {
	return (
		<Box>
			<SimpleGrid spacing='40px' columns={[2,3,4]}>
				{nfts?.map((item) => (
					<GlobCard nft={item} key={item.id}/>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default ItemCard;
