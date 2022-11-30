import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import signup from "../../assets/signup.jpg";
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
type TItem={
  currentPrice:number;
  id:string;
  img:string;
  name:string;
}

const CartItem = ({currentPrice,id,img,name}:TItem) => {


  return (
    <Box mt='30px'>
      <Flex display='flex' justifyContent='space-between' alignItems='center'>
        <Image src={img} h='80px' w='80px' borderRadius='15px' />
        <Text pl='10px'>{name}</Text>
        <Button colorScheme='messenger'>
          <AiOutlineDelete />
        </Button>
      </Flex>
    </Box>
  );
};

export default CartItem;
