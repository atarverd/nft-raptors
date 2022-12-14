import {
	Box,
	Flex,
	Text,
	Radio,
	Stack,
  Spinner,
	Input,
	Button,
	useToast,
	Textarea,
	Accordion,
	RadioGroup,
	useColorMode,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	AccordionButton,

} from '@chakra-ui/react';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { addNft } from '../../utils/addNft';
import { useNavigate } from 'react-router-dom';
import UploadImage from '../createCollection/uploadImage';
import { TCollection } from '../../types/collection.types';
import useCollectionRequest from '../../hooks/useCollectionRequest';

type TChoosed = {
	collectionName: string,
	collectionId: string
}

const Body = () => {
	const [choosedCollection, setChoosedCollections] = useState<TChoosed>({ collectionName: '', collectionId: '' });
	const [description, setDescription] = useState<string>();
	const [image, setImage] = useState<File>();
	const [name, setName] = useState<string>();
	const [isClicked,setIsClicked] = useState(false);

	const user = getAuth();
	const id = user?.currentUser?.uid;
	const toast = useToast();
	const navigate = useNavigate();
	const { colorMode } = useColorMode();


	const handleChoosedCollection = (e: string) => {
		const id = collections?.find((el) => el.collectionName === e)?.id;
		setChoosedCollections({ collectionName: e, collectionId: id as string });
	};
	const handleDescription = (e: any) => {
		setDescription(e.target.value);
	};

	const handleImage = (img: File) => {
		setImage(img);
	};

	const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const validateNft = () => {
		const collIsVallid = Object.values(choosedCollection).every(
			(el) => el !== undefined
		);
		if (collIsVallid && description && image && name) {
			setIsClicked(true);
			addNft(name, image, description, choosedCollection, id as string)
				.then(() =>
					toast({
						title: 'Nft Created Successfully',
						duration: 3000,
						position: 'top-right',
						variant: 'subtle',
						status: 'success',
					})
				)
				.then(() => navigate('/collection/' + choosedCollection?.collectionId));
		} else {
			toast({
				title: 'Some Fields Are Empty',
				duration: 3000,
				position: 'top-right',
				variant: 'subtle',
				status: 'error',
			});
		}
	};

	const collections = useCollectionRequest('user', id);

	return (
		<Box>
			<Text fontSize='4xl'>Create New Nft</Text>

			<Box mt='30px'>
				<Text fontSize='2xl'>Image</Text>
				<Text>File types supported: JPG, PNG, GIF. Max size: 100mb </Text>
				<Box mt='10px'>
					<UploadImage
						h='200px'
						w='300px'
						size=''
						handleLogoImage={handleImage}
					/>

				</Box>
			</Box>
			<Box mt='30px'>
				<Text fontSize='2xl' mt='10px'>
					Name
				</Text>
				<Input placeholder='Item Name' mt='10px' onChange={handleName}></Input>
			</Box>

			<Box mt='30px'>
				<Text fontSize='2xl' mt='10px'>
					Description
				</Text>
				<Textarea
					mt='10px'
					placeholder='Provide detailed description of your item'
					onChange={handleDescription}
				/>
			</Box>

			<Box mt='30px'>
				<Text fontSize='2xl' mt='10px'>
					Collection
				</Text>
				<Text mt='10px'>This is the collection where your item will apear</Text>
				<Accordion allowToggle defaultIndex={[0]} allowMultiple mt='10px'>
					<AccordionItem>
						<AccordionButton>
							<Box flex='1' textAlign='left'>
								<Text fontSize='2xl'>Select Collection</Text>
							</Box>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel pb={4}>
							<Flex
								display='flex'
								flexDirection='column'
								justifyContent='center'
							>
								<RadioGroup defaultValue='1' onChange={handleChoosedCollection}>
									<Stack spacing='15px' overflowY='scroll' h='250px'>
										{collections?.map((col: TCollection, i) => (
											<Radio
												value={col.collectionName}
												size='lg'
												colorScheme='messenger'
												key={i}
											>
												{col.collectionName}
											</Radio>
										))}

									</Stack>
								</RadioGroup>
							</Flex>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Box>

			<Box mt='30px'>
				<Flex justifyContent='center'>
					<Button
						onClick={validateNft}
						bg={colorMode === 'dark' ? '#2051c4' : '#0078ff'}
						color='white'
						_hover={{ background: colorMode === 'dark' ? 'messenger.800' : 'messenger.600' }}

						w='200px'
						disabled={isClicked}
					>
						{isClicked?<Spinner/>:'Create'}
					</Button>
				</Flex>
			</Box>
		</Box>
	);
};

export default Body;
