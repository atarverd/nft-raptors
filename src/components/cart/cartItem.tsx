import { AiOutlineDelete } from "react-icons/ai";
import { Box, Text, Flex, Image, Button, useColorMode } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { AppDispatch } from "../../store/store";
import { deleteFromCart } from "../../features/cartSlice";

const CartItem = () => {
	const { cart } = useSelector((state: RootState) => state.cart);
	const dispatch: AppDispatch = useDispatch();
	const { colorMode } = useColorMode();

	return (
		<Box mt='30px'>
			{cart.map((cartItem) => {
				return (
					<Flex
						display='flex'
						justifyContent='space-between'
						alignItems='center'
						key={cartItem.id}
					>
						<Image src={cartItem.img} h='80px' w='80px' borderRadius='15px' />
						<Text pl='10px'>{cartItem.name}</Text>
						<Button
							bg={colorMode === "dark" ? "#2051c4" : "#0078ff"}
							color='white'
							_hover={{ background: colorMode === "dark" ? 'messenger.800' : 'messenger.600' }}
							onClick={() => dispatch(deleteFromCart(cartItem.id))}
						>
							<AiOutlineDelete />
						</Button>
					</Flex>
				);
			})}


		</Box>
	);
};

export default CartItem;
