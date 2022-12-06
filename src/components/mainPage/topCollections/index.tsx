import { Flex, Heading } from '@chakra-ui/react';
import TopFiveColumn from './TopFiveColumn';
import useCollectionRequest from '../../../hooks/useCollectionRequest';

const TopCollections = () => {

	const data = useCollectionRequest('top', '');

	return (
		<>
			<Heading mb='2rem' ml='2rem'>
				Top
			</Heading>
			<Flex p='5px' justify='space-around' gap='2rem' flexWrap='wrap' h={['900px', '450px']}>
				<TopFiveColumn data={data.slice(0, 5)} from={1} />
				<TopFiveColumn data={data.slice(5)} from={6} />
			</Flex>
		</>
	);
};

export default TopCollections;
