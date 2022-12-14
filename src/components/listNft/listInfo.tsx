import {
	Box,
	Text,
	Flex,
	Input,
	Button,
	Divider,
	useToast,
	useColorMode,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';

import { db } from 'firebase-config';
import { formatter } from 'utils/formatValue';


const ListInfo = () => {
	const [price, setPrice] = useState<number>(0);
	const { id } = useParams();
	const navigate = useNavigate();
	const toast = useToast();
	const { colorMode } = useColorMode();

	const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPrice(Number(e.target.value));
	};
	const updateList = async () => {
		updateDoc(doc(db, 'nfts', id as string), {
			isForSold: true,
			currentPrice: price
		}).then(() => navigate('/nft/' + id)).then(() => toast({ title: 'Nft listed successfully', position: 'top-right', status: 'success' }));

	};
	return (
		<Box>

			<Text fontSize='3xl'>List For Sale</Text>

			<Box mt='40px'>
				<Text fontSize='2xl'>Set a price</Text>
				<Input w='300px' mt='15px' placeholder='Ammount' onChange={handlePrice} />
			</Box>

			<Box mt='30px'>
				<Text fontSize='2xl'>Summary</Text>
				<Flex justifyContent='space-between' alignItems='center'>
					<Text mt='15px'>Listing price</Text>
					<Text pt='15px'>{formatter.format(price)} $</Text>
				</Flex>

				<Flex justifyContent='space-between' alignItems='center'>
					<Text mt='5px'>Service fee</Text>
					<Text pt='15px'>2.5 %</Text>
				</Flex>
			</Box>

			<Divider orientation='horizontal' mt='15px' color='black' />

			<Flex justifyContent='space-between' alignItems='center'>
				<Text fontSize='2xl' mt='15px'>Total earnings</Text>
				<Text fontSize='2xl' pt='15px'>{formatter.format(price - price * 2.5 / 100)} $</Text>
			</Flex>
			<Button
				bg={colorMode === 'dark' ? '#2051c4' : '#0078ff'}
				color='white'
				_hover={{ background: colorMode === 'dark' ? 'messenger.800' : 'messenger.600' }}
				mt='15px'
				w='300px'
				onClick={updateList}>
				Complete Listing
			</Button>

		</Box>
	);
};

export default ListInfo;