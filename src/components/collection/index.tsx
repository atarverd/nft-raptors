import { collection, query, where, getDocs } from "firebase/firestore";
import CollectionHeader from "./collectionHeader";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { useParams } from "react-router";
import GlobCard from "../cards/globCard";
import Loader from "../loading";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

type TNft = {
  id: string;
  img: string;
  name: string;
  currentPrice: number;
  ownerId: string;
};

const Collection = () => {
	const { id } = useParams();
	const [nfts, setNfts] = useState<TNft[]>();
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const a = async () => {
			const q = query(collection(db, "nfts"), where("collectionId", "==", id));

			const NftsSnapshot = await getDocs(q);
			const result: TNft[] = [];
			NftsSnapshot.forEach((doc) => {
				const nft = doc.data();
				result.push({
					id: doc.id,
					img: nft.img,
					name: nft.name,
					currentPrice: nft.currentPrice,
					ownerId:nft.ownerId
				});
			});
			setNfts(result);
			setLoading(true);
			console.log(result);
		};
		a();
	}, []);
	return (
		<Box>
			<CollectionHeader nftCount={nfts?.length} />
			{!loading ? (
				<Loader />
			) : (
				<Flex display='flex' justifyContent='space-around'>
					<SimpleGrid spacing='40px' columns={[1, 3, 5]} m='20px'>
						{nfts?.map((item) => (
							<GlobCard nft={item} key={item.id}/>
						))}
					</SimpleGrid>
				</Flex>
			)}
		</Box>
	);
};

export default Collection;
