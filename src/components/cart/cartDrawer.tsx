import {DrawerBody} from "@chakra-ui/react";
import CartItem from "./cartItem";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const CartDrawer = () => {
	const state = useSelector((state: RootState) => state.cart);
	console.log(state.cart);
	return (
		<DrawerBody maxH='65%'>
			<CartItem/>
		</DrawerBody>
	);
};

export default CartDrawer;