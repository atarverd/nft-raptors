import { TCollection } from '../../../types/collection.types';
import {
	Text,
	Avatar,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	HStack,
} from '@chakra-ui/react';
import { formatter } from '../../../utils/formatValue';
import {useNavigate} from 'react-router-dom';

type TProps = {
	data: TCollection[];
	from: number
};

const TopFiveColumn = ({ data, from }: TProps) => {
	const navigate = useNavigate();
	return (
		<TableContainer w={['', '70%', '45%']} sx={{ '::-webkit-scrollbar': { display: 'none' } }}>
			<Table variant='simple'>
				<Thead>
					<Tr>
						<Th>Collection</Th>
						<Th>Creator</Th>
						<Th isNumeric>Volume</Th>
					</Tr>
				</Thead>
				<Tbody>
					{data.map((collection: TCollection, i) => {
						return (
							<Tr cursor='pointer' key={i}>
								<Td onClick={()=>navigate('/collection/'+collection.id)}>
									<HStack spacing='2rem'>
										<Text>{from + i}</Text>
										<Avatar src={collection.logo} />
										<Text ml='2.2rem'>{collection.collectionName}</Text>
									</HStack>
								</Td>
								<Td onClick={()=>navigate('/'+collection.creatorId)}>by {collection.creator}</Td>
								<Td isNumeric>{formatter.format(collection.volume)}</Td>
							</Tr>
						);
					})}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default TopFiveColumn;
