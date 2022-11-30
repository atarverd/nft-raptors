import React from 'react'
import {DrawerBody} from '@chakra-ui/react';
import CartItem from './cartItem';
import store, { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

type TItem={
  currentPrice:number;
  id:string;
  img:string;
  name:string;
}
const CartDrawer = () => {
  const state = useSelector((state: RootState) => state.cart);
  console.log(state.cart)
  return (
    <DrawerBody maxH='65%'>
        {state.cart.map((item:TItem)=><CartItem {...item}/>)}
    </DrawerBody>
  )
}

export default CartDrawer