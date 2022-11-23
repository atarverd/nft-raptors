import React from 'react'
import {
  Box,
  Text,
  Flex,
  Button,
  Divider,
  DrawerHeader,
} from '@chakra-ui/react';
const CartHeader = () => {
  return (
    <>
      <DrawerHeader fontSize='3xl'>Your Cart</DrawerHeader>
      <Divider orientation='horizontal' />

      <Box mt='20px' pl='20px' pr='20px'>
        <Flex display='flex' justifyContent='space-between' alignItems='center'>
          <Text fontSize='2xl' ml='10px' mt='10px'>1 Item</Text>
          <Button h='30px' mr='10px' mt='10px' colorScheme='messenger'>Clear All</Button>
        </Flex>
      </Box>
    </>
  )
}

export default CartHeader