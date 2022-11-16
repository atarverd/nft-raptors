import React from 'react'
import { Box,Flex,Text,Button } from '@chakra-ui/react'
const CartFooter = () => {
  return (
    <Box position='absolute' bottom='20px' left='40px'>
    <Box mt='30px'>
      <Flex display='flex'
        justifyContent='space-around'>
        <Text fontSize='2xl'>Total Price</Text>
        <Text fontSize='2xl'>300 $</Text>
      </Flex>
    </Box>

    <Box mt='20px'>
      <Flex
        display='flex'
        justifyContent='space-around'>
        <Button colorScheme='blue' w='250px'>Save</Button>
      </Flex>
    </Box>
  </Box>
  )
}

export default CartFooter