import Loader from '../components/loading';
import { db } from '../firebase-config';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
import NftTable from '../components/nftPage/NftTable';
import NftChart from '../components/nftPage/NftChart';
import NftItemPage from '../components/nftPage/NftItemPage';
import NftBasicInfo from '../components/nftPage/NftBasicInfo';
import NftAccordion from '../components/nftPage/NftAccordian';
import useDocRequest from '../hooks/useDocRequest';
import { TNft } from '../types/nft.types';

type THistory = {
	date: string;
	price: number;
	prevOwner: string;
};

const NftPage = () => {

	const { id } = useParams();
	const [data, setData] = useState<TNft>({
		id: '',
		img: '',
		name: '',
		currentPrice: 0,
		ownerId: '',
		collectionId: '',
		collectionName: '',
		isForSold: false,
		owner: '',
		priceHistory: [],
	});
	const isLoaded = useDocRequest('nfts', id as string, setData);

	if (!isLoaded) return <Loader></Loader>;

	return (
		<Box ml='20%' mr='20%' mt='2%'>
			<Center>
				<Flex id='nft-conainer'>
					<NftItemPage img={data?.img} />

					<Flex id='nft-info' flexDirection='column' gap={6} mt='2' ml='5%'>
						<NftBasicInfo
							collectionId={data?.collectionId}
							collectionName={data?.collectionName}
							name={data?.name}
							currentPrice={data?.currentPrice}
							owner={data?.owner}
							ownerId={data?.ownerId}
							isForSold={data?.isForSold}
							id={data?.id}
							img={data?.img}
						/>

						<NftAccordion accordionName='Price Graph'>
							<NftChart priceHistory={data?.priceHistory} />
						</NftAccordion>

						<NftAccordion accordionName='History'>
							<NftTable priceHistory={data.priceHistory} />
						</NftAccordion>
					</Flex>
				</Flex>
			</Center>

			<NftAccordion accordionName='More From This Collection'>
				<div>Her should be similar categories</div>
			</NftAccordion>
		</Box>
	);
};

export default NftPage;
