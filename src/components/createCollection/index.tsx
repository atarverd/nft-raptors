import Body from './body';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import UploadImage from './uploadImage';
import { useNavigate } from 'react-router-dom';
import { addCollection } from '../../utils/addCollection';
import { Box, Text, Flex, Button, useToast, useColorMode, Spinner } from '@chakra-ui/react';



const CreateCollection = () => {

	const [logoImage, setLogoImage] = useState<File>();
	const [featureImage, setFeatureImage] = useState<File>();
	const [bgImage, setBgImage] = useState<File>();
	const [name, setName] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [category, setCategory] = useState<string>('');

	const [isClicked, setIsClicked] = useState(false);
	const user = getAuth();
	const id = user?.currentUser?.uid;
	const navigate = useNavigate();
	const { colorMode } = useColorMode();

	const toast = useToast();

	const createCollection = () => {
		setIsClicked(true);

		addCollection(id as string
			, logoImage as File
			, featureImage as File
			, bgImage as File
			, name
			, description
			, category
			, toast
			, navigate
		);
	};

	return (
		<Flex display='flex' justifyContent='center'>
			<Box maxW='600px' mb='30px'>
				<Text fontSize='4xl'>Create a Collection</Text>

				<Box mt='40px'>
					<Text fontSize='2xl'>Logo Image</Text>
					<Text>This image will also be used for navigation</Text>
					<Box mt='10px'>
						<UploadImage
							size='2xl'
							h=''
							w=''
							handleLogoImage={setLogoImage}
						/>
					</Box>
				</Box>

				<Box mt='30px'>
					<Text fontSize='2xl'>Featured image</Text>
					<Text>
						This image will be used for featuring your collection on the
						homepage, category pages, or other promotional areas of NFT Raptors
					</Text>
					<Box mt='10px'>
						<UploadImage
							h='200px'
							w='300px'
							size=''
							handleLogoImage={setFeatureImage}
						/>
					</Box>
				</Box>

				<Box mt='30px'>
					<Text fontSize='2xl'>Banner image</Text>
					<Text>
						This image appearat the top of your collection page, Avoid including
						too much text in this banner image, as the dimensions change on
						different devices
					</Text>
					<Box mt='10px'>
						<UploadImage
							h='300px'
							w='600px'
							size=''
							handleLogoImage={setBgImage}
						/>
					</Box>
				</Box>

				<Body
					setName={setName}
					setDescription={setDescription}
					setCategory={setCategory}
				/>
				<Box mt='30px'>
					<Flex justifyContent='center'>
						<Button
							bg={colorMode === 'dark' ? '#2051c4' : '#0078ff'}
							color='white'
							_hover={{ background: colorMode === 'dark' ? 'messenger.800' : 'messenger.600' }}
							w='300px'
							onClick={createCollection}
							disabled={isClicked}
						>
							{isClicked ? <Spinner /> : 'Create Collection'}
						</Button>
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
};

export default CreateCollection;
