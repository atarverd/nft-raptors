import {
	Box,
	Text,
	Flex,
	Image,
	HStack,
	Button,
	Collapse,
	Skeleton,
	useColorMode,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import useDocRequest from '../../hooks/useDocRequest';
import { TCollection } from '../../types/collection.types';

type TProp = {
	nftCount?: number;
};


const CollectionHeader = ({ nftCount }: TProp) => {

	const [data, setData] = useState<TCollection>();
	const { id } = useParams();


	const [show, setShow] = useState(false);
	const isLoaded = useDocRequest('collections', id as string, setData);


	const handleToggle = () => setShow(!show);
	const navigate = useNavigate();
	const { colorMode } = useColorMode();


	const navigaetToCreateNft = () => {
		navigate('/create-nft');
	};


	const user = getAuth();
	const isCreator = user?.currentUser?.uid === data?.creatorId;


	return (
		<Box>
			<Skeleton isLoaded={isLoaded}>
				<Box h='300px' bgImage={`url(${data?.background})`} bgPosition='center'
					bgRepeat='no-repeat' objectFit='fill' pt='150px' backgroundSize='cover'>
					<Box
						ml='40px'
						border='4px'
						borderColor='#EDF2F7'
						borderRadius='10px'
						width='max-content'
					>
						<Image
							src={data?.logo}
							w='200px'
							h='200px'
							borderRadius='5px'
							zIndex='1'
						/>
					</Box>
				</Box>
			</Skeleton>
			<Box mx='40px' my='20px' mt='50px'>
				<Flex justifyContent='space-between' alignItems='center'>
					<Text fontSize='4xl' mt='30px'>
						{data?.collectionName}
					</Text>
					{isCreator &&
						<Button
							bg={colorMode === 'dark' ? '#2051c4' : '#0078ff'}
							color='white'
							_hover={{ background: colorMode === 'dark' ? 'messenger.800' : 'messenger.600' }}
							onClick={navigaetToCreateNft}
							w='200px'
							mt='35px'>
							Create Nft
						</Button>
					}

				</Flex>
				<Text fontSize='2xl' mt='10px'>
					by {data?.creator}
				</Text>

				<HStack spacing={5} mt='10px'>
					<Text>Items {nftCount}</Text>
					<Text>Created </Text>
				</HStack>
				<Box maxW='30%' mt='10px'>
					<Collapse startingHeight={20} in={show}>
						{data?.description}
					</Collapse>
					<Button size='xs' onClick={handleToggle} mt='1rem'>
						Show {show ? 'Less' : 'More'}
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default CollectionHeader;