import { useParams } from 'react-router';
import CollectionCard from '../cards/collectionCard';
import { SimpleGrid, Center } from '@chakra-ui/react';
import useCollectionRequest from '../../hooks/useCollectionRequest';


const Category = () => {

	const { id } = useParams();


	const filteredCollection = useCollectionRequest('category', id);

	return (
		<Center>
			<SimpleGrid columns={[1, 3]} spacing='80px' my='4%'>
				{filteredCollection.map((category) => {
					return <CollectionCard collection={category} key={category.id} />;
				})}
			</SimpleGrid>
		</Center>
	);
};

export default Category;