import {
	Box,
	Flex,
	Text,
	Radio,
	Stack,
	Input,
	Textarea,
	Accordion,
	RadioGroup,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	AccordionButton,
} from '@chakra-ui/react';

type TProps = {
	setName: (e: string) => void;
	setDescription: (e: string) => void;
	setCategory: (e: string) => void;
}

const Body = ({ setName, setDescription, setCategory }: TProps) => {
	return (
		<Box>
			<Box mt='30px'>
				<Text fontSize='2xl' mt='10px'>Name</Text>
				<Input placeholder='Example: Raptor' mt='10px' onChange={(e) => setName(e.target.value)}></Input>
			</Box>

			<Box mt='30px'>
				<Text fontSize='2xl' mt='10px'>Description</Text>
				<Textarea mt='10px' onChange={(e) => setDescription(e.target.value)} />
			</Box>

			<Box mt='30px'>
				<Text fontSize='2xl' mt='10px'>Category</Text>
				<Text mt='10px'>Adding a category will help make your item discoverable on NFT Raptors</Text>
				<Accordion allowToggle defaultIndex={[0]} allowMultiple mt='10px'>
					<AccordionItem>
						<AccordionButton>
							<Box flex='1' textAlign='left'>
								<Text fontSize='2xl'>Sort By</Text>
							</Box>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel pb={4}>
							<Flex display='flex' flexDirection='column' justifyContent='center'>
								<RadioGroup defaultValue='1' onChange={(e) => setCategory(e)}>
									<Stack spacing='15px'>
										<Radio value='art' size='lg' colorScheme='messenger'>Art</Radio>
										<Radio value='trendingcars' size='lg' colorScheme='messenger'>Trending Cars</Radio>
										<Radio value='collectibles' size='lg' colorScheme='messenger'>Collectibles</Radio>
										<Radio value='photography' size='lg' colorScheme='messenger'>Photography</Radio>
										<Radio value='sports' size='lg' colorScheme='messenger'>Sports</Radio>
										<Radio value='virtualworlds' size='lg' colorScheme='messenger'>Virtual Worlds</Radio>
									</Stack>
								</RadioGroup>
							</Flex>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Box>



		</Box>
	);
};

export default Body;