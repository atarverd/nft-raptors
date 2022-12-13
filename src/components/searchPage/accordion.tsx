import {
	Box,
	Flex,
	Text,
	Input,
	VStack,
	Button,
	Accordion,
	useColorMode,
	AccordionItem,
	AccordionIcon,
	AccordionPanel,
	AccordionButton,
} from '@chakra-ui/react';

type TProp = {
	filterPrice: () => void;
	handleMin: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleMax: (e: React.ChangeEvent<HTMLInputElement>) => void;
	priceSort: (sortType: string) => void;
}

const Accordions = ({ filterPrice, handleMin, handleMax, priceSort }: TProp) => {

	const { colorMode } = useColorMode();

	return (
		<Box>
			<Accordion allowToggle defaultIndex={[0]} allowMultiple>
				<AccordionItem w='370px'>
					<AccordionButton>
						<Box flex='1' textAlign='left'>
							<Text fontSize='2xl'>Price</Text>
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<Flex justifyContent='space-evenly' alignItems='center'>
							<Input
								w='90px'
								h='40px'
								type='number'
								placeholder='Min'
								onChange={handleMin}
							></Input>
							<Text>To</Text>
							<Input
								w='90px'
								h='40px'
								type='number'
								placeholder='Max'
								onChange={handleMax}
							></Input>
						</Flex>
						<Flex justifyContent='center' alignItems='center'>
							<Box mt='20px'>
								<Button
									w='270px'
									h='40px'
									onClick={filterPrice}
									bg={colorMode === 'dark' ? '#2051c4' : '#0078ff'}
									color='white'
									_hover={{ background: colorMode === 'dark' ? 'messenger.800' : 'messenger.600' }}
								>
									Apply
								</Button>
							</Box>
						</Flex>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>

			<Accordion allowToggle defaultIndex={[0]} allowMultiple>
				<AccordionItem>
					<AccordionButton>
						<Box flex='1' textAlign='left'>
							<Text fontSize='2xl'>Sort By</Text>
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<Flex display='flex' flexDirection='column' justifyContent='center'>
							<VStack spacing={4}>
								<Button
									bg={colorMode === 'dark' ? '#2051c4' : '#0078ff'}
									color='white'
									_hover={{ background: colorMode === 'dark' ? 'messenger.800' : 'messenger.600' }}
									onClick={() => priceSort('lowToHigh')}
									w='270px'
									h='40px'
								>
									Price Low To High
								</Button>
								<Button
									bg={colorMode === 'dark' ? '#2051c4' : '#0078ff'}
									color='white'
									_hover={{ background: colorMode === 'dark' ? 'messenger.800' : 'messenger.600' }}
									onClick={() => priceSort('highToLow')}
									w='270px'
									h='40px'
								>
									Price High To Low
								</Button>
							</VStack>
						</Flex>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Box>
	);
};

export default Accordions;
