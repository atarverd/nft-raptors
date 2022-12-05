import React from "react";
import {
	Box,
	Text,
	Flex,
	Button,
	Divider,
	DrawerHeader,
	useColorMode,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { clearAllFromCart } from "../../features/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

const CartHeader = () => {
	const { cart } = useSelector((state: RootState) => state.cart);

	const { colorMode } = useColorMode();
	const dispatch: AppDispatch = useDispatch();

	return (
		<>
			<DrawerHeader fontSize='3xl'>Your Cart</DrawerHeader>
			<Divider orientation='horizontal' />

			<Box mt='20px' pl='20px' pr='20px'>
				<Flex display='flex' justifyContent='space-between' alignItems='center'>
					<Text fontSize='2xl' ml='10px' mt='10px'>
						{cart.length} Items
					</Text>
					<Button
						onClick={() => dispatch(clearAllFromCart())}
						h='30px'
						mr='10px'
						mt='10px'
						bg={colorMode === "dark" ? "#2051c4" : "#0078ff"}
						color='white'
						_hover={{ background: colorMode === "dark" ? 'messenger.800' : 'messenger.600' }}					>
						Clear All
					</Button>
				</Flex>
			</Box>
		</>
	);
};

export default CartHeader;
