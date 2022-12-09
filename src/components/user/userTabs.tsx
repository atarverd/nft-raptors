import {
	Tab,
	Box,
	Tabs,
	Input,
	TabList,
	TabPanel,
	TabPanels,
	InputGroup,
	SimpleGrid,
} from '@chakra-ui/react';
import { useState } from 'react';
import GlobCard from '../cards/globCard';
import { useParams } from 'react-router';
import useGetNfts from '../../hooks/useGetNfts';
import CollectionCard from '../cards/collectionCard';
import { TCollection } from '../../types/collection.types';
import useCollectionRequest from '../../hooks/useCollectionRequest';


const UserTabs = () => {

	const { id } = useParams();
	const [search, setSearch] = useState('');

	const ownedCollections = useCollectionRequest('user', id as string);
	const { nfts, isLoaded } = useGetNfts('ownerId', id as string);


	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
						color='black'
						borderRadius='10px'
					/>
				</InputGroup>

				<TabPanels mt='20px'>
					<TabPanel>
						<SimpleGrid spacing='40px' columns={[1, null, 3, 5]} m='20px'>
							{nfts
								?.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
								.map((nft, i) => (
									<GlobCard nft={nft} key={i} />
								))}
						</SimpleGrid>
					</TabPanel>

					<TabPanel>

						<SimpleGrid spacing='40px' columns={[1, 2, null, null, 3]} m='20px'>

							{ownedCollections
								?.filter((el: TCollection) => el.collectionName.toLowerCase().includes(search.toLowerCase()))
								.map((col) => (
									<CollectionCard
										collection={col}
										key={col.id} />
								))}
						</SimpleGrid>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};

export default UserTabs;
