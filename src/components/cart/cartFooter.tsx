import React from 'react';
import { Box, Flex, Text, Button, useToast, useColorMode } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { clearAllFromCart } from '../../features/cartSlice';
import { buyNft } from '../../utils/buyNft';
import { useNavigate } from 'react-router';
import { getAuth } from 'firebase/auth';

type TProps = {
	sellerId: string;
	itemId: string;
	price: number;
};

const CartFooter = () => {

	const user = getAuth();
	const toast = useToast();
	const navigate = useNavigate();
	const { colorMode } = useColorMode();
	const dispatch: AppDispatch = useDispatch();
	const { cart } = useSelector((state: RootState) => state.cart);


	const clearCartAfterPurchase = () => {
		dispatch(clearAllFromCart());
	};

	const handleBuy = () => {
		if (user?.currentUser?.uid) {
			buyNft(
				user?.currentUser?.uid as string,
				cartNfts,
				clearCartAfterPurchase,
				toast,
				navigate
			);
		} else {
			toast({
				position: 'top-right',
				duration: 3000,
				status: 'error',
				title: 'You Need To Sign In'
			});
		}
	};


	const cartNfts = cart.reduce<TProps[]>((prev, cur) => {
		prev.push({
			sellerId: cur.ownerId,
			itemId: cur.id,
			price: cur.currentPrice,
		});

		return prev;
	}, []);

	return (
		<Box position='absolute' bottom='20px' left='40px'>
			<Box mt='30px'>
				<Flex display='flex' justifyContent='space-around'>
					<Text fontSize='2xl'>Total Price</Text>
					<Text fontSize='2xl'>
						{cart.reduce((acc, curr) => {
							return acc + Number(curr.currentPrice);
						}, 0)}
					</Text>
				</Flex>
			</Box>

			<Box mt='20px'>
				<Flex display='flex' justifyContent='space-around'>
					<Button
						onClick={handleBuy}
						bg={colorMode === "dark" ? "#2051c4" : "#0078ff"}
						color='white'
						_hover={{ background: colorMode === "dark" ? 'messenger.800' : 'messenger.600' }}
						w='250px'
					>
						Buy
					</Button>
				</Flex>
			</Box>
		</Box>
	);
};

export default CartFooter;
