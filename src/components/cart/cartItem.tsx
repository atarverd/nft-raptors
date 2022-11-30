import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import signup from "../../assets/signup.jpg";
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const CartItem = () => {
  const cart = useSelector((state: RootState) => state.cart);

  console.log(cart);

  return (
    <Box mt='30px'>
      <Flex display='flex' justifyContent='space-between' alignItems='center'>
        <Image src={signup} h='80px' w='80px' borderRadius='15px' />
        <Text pl='10px'>Rare Apepe #2975</Text>
        <Button colorScheme='messenger'>
          <AiOutlineDelete />
        </Button>
      </Flex>
    </Box>
  );
};

export default CartItem;
