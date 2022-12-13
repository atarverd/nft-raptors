import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { FaRegHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { Box, Flex, Text, Link, Button } from '@chakra-ui/react';
import { checkItemIsInArray } from '../../utils/checkItemInArray';
import { addToCart, deleteFromCart } from '../../features/cartSlice';

type TInfo = {
	collectionId: string;
	collectionName: string;
	name: string;
	currentPrice: number;
	owner: string;
	ownerId: string;
	isForSold: boolean;
	id: string;
	img: string;
	description:string;
};

const NftBasicInfo = ({
	collectionId,
	collectionName,
	name,
	currentPrice,
	owner,
	ownerId,
	isForSold,
	img,
	description,
}: TInfo) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const user = getAuth();
	const isOwner = user?.currentUser?.uid === ownerId;

	const dispatch: AppDispatch = useDispatch();
	const { cart } = useSelector((state: RootState) => state.cart);

	const navigateToUser = () => {
		navigate('/' + ownerId);
	};
	const navigateToListNft = () => {
		navigate('/list/' + id);
	};
	const navigateToCollection = (collectionId: string) => {
		navigate('/collection/' + collectionId);
	};

	const handleAddCart = () => {
		if (!checkItemIsInArray(cart, id as string)) {
			dispatch(
				addToCart({
					id: id as string,
					name,
					img,
					currentPrice,
					ownerId,
				})
			);
		} else {
			dispatch(deleteFromCart(id as string));
		}
	};

	return (
		<>
			<Box w='500px' h='120px'>
				<Flex flexDirection='column'>
					<Link
						onClick={() => {
							navigateToCollection(collectionId);
						}}
						_hover={{ textDecoration: 'none' }}
						color='#2081e2'
					>
						{collectionName}
					</Link>
					<Text as='b' fontSize='2xl'>
						{name}
					</Text>
					<Text>
						Owned by &nbsp;
						<Link
							onClick={navigateToUser}
							_hover={{ textDecoration: 'none' }}
							color='#2081e2'
						>
							{owner}
						</Link>
					</Text>
					<Text>Description: {description}</Text>
				</Flex>
			</Box>

			<Box w='500px' h='120px'>
				<Text>Current Price</Text>
				<Text>{currentPrice}$</Text>
				{isOwner ? (
					<Button
						colorScheme='messenger'
						w='200px'
						color='#fff'
						bg='#2081e2'
						onClick={navigateToListNft}
					>
						List Nft
					</Button>
				) : (
					isForSold && (
						<Button
							onClick={() => handleAddCart()}
							colorScheme={
								checkItemIsInArray(cart, id as string) ? 'red' : 'messenger'
							}
							w='200px'
							color='#fff'
							bg='#2081e2'
						>
							{checkItemIsInArray(cart, id as string)
								? 'Remove'
								: 'Add to Cart'}
						</Button>
					)
				)}
			</Box>
		</>
	);
};

export default NftBasicInfo;
