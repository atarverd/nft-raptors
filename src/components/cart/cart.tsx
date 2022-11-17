import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

import {
  Box,
  Text,
  Flex,
  Image,
  Drawer,
  Button,
  Divider,
  Container,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  useDisclosure,
  DrawerOverlay,
  DrawerCloseButton,
} from '@chakra-ui/react';
import CartFooter from './cartFooter';
import CartDrawer from './cartDrawer';
import CartHeader from './cartHeader';

const Cart = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container position='relative'>
        <FaShoppingCart onClick={onOpen}  size='30px'  cursor='pointer'/>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg='#EBF8FF' margin='20px' borderRadius='15px'>
          <DrawerCloseButton />
          <CartHeader/>
          <CartDrawer/>
          <Divider orientation='horizontal' />
          <CartFooter/>
        </DrawerContent>
      </Drawer>
    </Container >
  )
}

export default Cart;