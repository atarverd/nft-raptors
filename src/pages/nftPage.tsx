import { useState } from 'react';
import { TNft } from '../types/nft.types';
import Loader from '../components/loading';
import { useParams } from 'react-router-dom';
import useDocRequest from '../hooks/useDocRequest';
import { Box, Center, Flex } from '@chakra-ui/react';
import NftTable from '../components/nftPage/NftTable';
import NftChart from '../components/nftPage/NftChart';
import NftItemPage from '../components/nftPage/NftItemPage';
import NftBasicInfo from '../components/nftPage/NftBasicInfo';
import NftAccordion from '../components/nftPage/NftAccordian';

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
		description:'',
	});
	const {isLoaded} = useDocRequest('nfts', id as string, setData);

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
							description={data?.description}
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
		</Box>
	);
};

export default NftPage;
