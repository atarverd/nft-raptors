import React from 'react'
import {DrawerBody} from '@chakra-ui/react';
import CartItem from './cartItem';
const CartDrawer = () => {
  return (
    <DrawerBody maxH='65%'>
        <CartItem/>
    </DrawerBody>
  )
}

export default CartDrawer