import {
  Box,
  Text,
  Flex,
  Input,
  Button,
  Divider,
} from '@chakra-ui/react'


const ListInfo = () => {
  return (
    <Box>

      <Text fontSize='3xl'>List For Sale</Text>

      <Box mt='40px'>
        <Text fontSize='2xl'>Set a price</Text>
        <Input w='300px' mt='15px' placeholder='Ammount' />
      </Box>

      <Box mt='30px'>
        <Text fontSize='2xl'>Summary</Text>
        <Flex justifyContent='space-between' alignItems='center'>
          <Text mt='15px'>Listing price</Text>
          <Text pt='15px'>0 $</Text>
        </Flex>

        <Flex justifyContent='space-between' alignItems='center'>
          <Text mt='5px'>Service fee</Text>
          <Text pt='15px'>2.5 %</Text>
        </Flex>
      </Box>

      <Divider orientation='horizontal' mt='15px' color='black' />

      <Flex justifyContent='space-between' alignItems='center'>
        <Text fontSize='2xl' mt='15px'>Total earnings</Text>
        <Text fontSize='2xl' pt='15px'>0 $</Text>
      </Flex>
      <Button colorScheme='messenger' mt='15px' w='300px'>Complete Listing</Button>

    </Box>
  )
}

export default ListInfo