import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { clearAllFromCart } from "../../features/cartSlice";
import { buyNft } from "../../utils/buyNft";
import { getAuth } from "firebase/auth";

type TProps = {
  sellerId: string;
  itemId: string;
  price: number;
};

const CartFooter = () => {
  const dispatch: AppDispatch = useDispatch();

  const clearCartAfterPurchase = () => {
    dispatch(clearAllFromCart());
  };

  const { cart } = useSelector((state: RootState) => state.cart);

  const user = getAuth();

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
            onClick={() =>
              buyNft(
                user?.currentUser?.uid as string,
                cartNfts,
                clearCartAfterPurchase
              )
            }
            colorScheme='blue'
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
