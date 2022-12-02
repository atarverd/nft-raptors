import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import signup from "../../assets/signup.jpg";
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { AppDispatch } from "../../store/store";
import { deleteFromCart } from "../../features/cartSlice";
type TItem={
  currentPrice:number;
  id:string;
  img:string;
  name:string;
}
const CartItem = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const dispatch: AppDispatch = useDispatch();

  return (
    <Box mt='30px'>
      {cart.map((cartItem) => {
        return (
          <Flex
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Image src={cartItem.img} h='80px' w='80px' borderRadius='15px' />
            <Text pl='10px'>{cartItem.name}</Text>
            <Button
              colorScheme='messenger'
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
