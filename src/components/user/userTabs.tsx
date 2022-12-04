import {
	Tab,
	Box,
	Tabs,
	Flex,
	Input,
	TabList,
	TabPanel,
	TabPanels,
	InputGroup,
	SimpleGrid,
} from "@chakra-ui/react";
import GlobCard from "../cards/globCard";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import CollectionCard from "../cards/collectionCard";

type TNftSnap={
	id: string;
	img: string;
	name: string;
	currentPrice: number;
	ownerId: string;
}
type TColSnap={
	id: string;
	ownerId: string;
	name: string;
	imageUrl: string;
}

const UserTabs = () => {
	const { id } = useParams();
	const [ownedNfts, setOwnedNfts] = useState<TNftSnap[]>([]);
	const [ownedCollections, setOwnedCollections] = useState<TColSnap[]>([]);
	const [search, setSearch] = useState("");

	const asyncronusNft = async () => {
		const q = query(
			collection(db, "nfts"),
			where("ownerId", "==", id as string)
		);

		const querySnapshot = await getDocs(q);
		const result: TNftSnap[] = [];
		querySnapshot.forEach((doc) => {
			console.log(doc.id, " => ", doc.data());
			const nft = doc.data();
			result.push({
				id: doc.id,
				img: nft.img,
				name: nft.name,
				currentPrice: nft.currentPrice,
				ownerId: nft.ownerId,
			});
		});
		setOwnedNfts(result);
	};

	const asyncronusCollections = async () => {
		const q = query(
			collection(db, "collections"),
			where("creatorId", "==", id as string)
		);

		const querySnapShot = await getDocs(q);
		const result: TColSnap[] = [];
		querySnapShot.forEach((col) => {
			const collection = col.data();
			result.push({
				id: col.id,
				ownerId: collection.creatorId,
				name: collection.collectionName,
				imageUrl: collection.feature,
			});
		});
		setOwnedCollections(result);
	};

	useEffect(() => {
		asyncronusNft();
		asyncronusCollections();
	}, []);

	const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<Box>
			<Tabs size='md' variant='enclosed-colored' mt='20px' ml='40px'>
				<TabList>
					<Tab>Owned</Tab>
					<Tab>My Collections</Tab>
				</TabList>

				<InputGroup mt='30px' w='70%'>
					<Input
						onChange={handleChange}
						placeholder='Search by name'
						h='40px'
						bg='#fff'
						borderRadius='10px'
					/>
				</InputGroup>

				<TabPanels mt='20px'>
					<TabPanel>
						<Flex display='flex' justifyContent='space-around'>
							<SimpleGrid spacing='40px' columns={[1, 3, 5]} m='20px'>
								{ownedNfts
									?.filter((el: TNftSnap) => el.name.includes(search))
									.map((nft,i) => (
										<GlobCard nft={nft} key={i}/>
									))}
							</SimpleGrid>
						</Flex>
					</TabPanel>

					<TabPanel>
						<Flex display='flex' justifyContent='space-around'>
							<SimpleGrid spacing='40px' columns={[1, 2,null,null, 4]} m='20px'>
								{ownedCollections
									?.filter((el: TColSnap) => el.name.includes(search))
									.map((col) => (
										<CollectionCard
											collection={col}
											asyncronusCollection={asyncronusCollections} key={col.id}/>
									))}
							</SimpleGrid>
						</Flex>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};

export default UserTabs;
