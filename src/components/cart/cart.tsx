import cartLight from "../../assets/cartt.png";
import cartDark from "../../assets/cartWhite.png";

import {

	Image,
	Drawer,
	Divider,
	Container,
	DrawerContent,
	useDisclosure,
	DrawerOverlay,
	DrawerCloseButton,
	useColorMode,
} from "@chakra-ui/react";
import CartFooter from "./cartFooter";
import CartDrawer from "./cartDrawer";
import CartHeader from "./cartHeader";

const Cart = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { colorMode } = useColorMode();

	return (
		<>
			<Image
				src={colorMode === "light" ? cartLight : cartDark}
				onClick={onOpen}
				boxSize='35px'
				cursor='pointer'
			/>
			<Container position='relative'>
				<Drawer isOpen={isOpen} placement='right' onClose={onClose}>
					<DrawerOverlay />
					<DrawerContent bg='#EBF8FF' margin='20px' borderRadius='15px'>
						<DrawerCloseButton />
						<CartHeader />
						<CartDrawer />
						<Divider orientation='horizontal' />
						<CartFooter />
					</DrawerContent>
				</Drawer>
			</Container>
		</>
	);
};

export default Cart;
