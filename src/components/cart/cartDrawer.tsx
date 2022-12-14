import CartItem from './cartItem';
import { DrawerBody } from '@chakra-ui/react';

const CartDrawer = () => {
	return (
		<DrawerBody maxH='65%'>
			<CartItem />
		</DrawerBody>
	);
};

export default CartDrawer;
