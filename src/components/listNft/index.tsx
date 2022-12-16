import { db } from 'firebase-config';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { doc, getDoc } from 'firebase/firestore';

import ListCard from './listCard';
import ListInfo from './listInfo';


type TNft = {
	id: string;
	price: number;
	img: string;
	name: string;
}

const ListNft = () => {

	const { id } = useParams();
	const [nft, setNft] = useState<TNft>({
		id: '',
		price: 0,
		img: '',
		name: '',
	});
	useEffect(() => {
		const a = async () => {
			const snap = await getDoc(doc(db, 'nfts', id as string));

			if (snap.exists()) {
				const nftData = snap.data();
				//@ts-ignore
				setNft({ img: nftData.img, name: nftData.name, id, price: 0 });
			} else {
				console.log('No such document');
			}
		};
		a();
	}, []);

	return (
		<Box m='15px'>
			<Flex display='flex' justifyContent='center'>
				<Box>
					<Flex display='flex'>
						<ListInfo />
					</Flex>
				</Box>

				<Box ml='50px'>
					<Flex display='flex'>
						<ListCard nft={nft} />
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default ListNft;