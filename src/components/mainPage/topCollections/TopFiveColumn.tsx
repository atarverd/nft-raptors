import { TCollection } from "../../../types/collection.types";
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
} from "@chakra-ui/react";
import {formatter} from "../../../utils/formatValue";

type TProps = {
  data: TCollection[];
  from:number
};

const TopFiveColumn = ({ data,from }: TProps) => {
	console.log(data);
	return (
		<TableContainer w={["", "70%", "45%"]} sx={{"::-webkit-scrollbar": {display: "none"}}}>
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
								<Td>
									<HStack spacing='2rem'>
										<Text>{from+i}</Text>
										<Avatar src={collection.logo} />
										<Text ml='2.2rem'>{collection.collectionName}</Text>
									</HStack>
								</Td>
								<Td>by {collection.creator}</Td>
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
