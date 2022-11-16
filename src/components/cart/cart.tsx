import React from 'react';
import signup from '../../assets/signup.jpg'
import { AiOutlineDelete } from 'react-icons/ai'
import {
  Box,
  Text,
  Flex,
  Image,
  Drawer,
  Button,
  Divider,
  Container,
  DrawerHeader,
  DrawerContent,
  useDisclosure,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerBody,
} from '@chakra-ui/react';

const Cart = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container position='relative'>
      <Button colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg='#EBF8FF' margin='20px' borderRadius='15px'>
          <DrawerCloseButton />
          <DrawerHeader fontSize='3xl'>Your Cart</DrawerHeader>
          <Divider orientation='horizontal' />

          <Box mt='30px'>
            <Flex display='flex' justifyContent='space-between'>
              <Text fontSize='2xl' ml='10px' mt='10px'>1 Item</Text>
              <Button w='70px' h='30px' mr='10px' mt='10px'>Clear All</Button>
            </Flex>
          </Box>

          <DrawerBody maxH='310px'>
            <Box mt='30px'>
              <Flex display='flex' justifyContent='space-between' alignItems='center'>
                <Image src={signup} h='80px' w='80px' borderRadius='15px' />
                <Text pl='10px'>Rare Apepe #2975</Text>
                <Button><AiOutlineDelete /></Button>
              </Flex>
            </Box>
            <Box mt='30px'>
              <Flex display='flex' justifyContent='space-around' alignItems='center'>
                <Image src={signup} h='80px' w='80px' borderRadius='15px' />
                <Text pl='10px'>Rare Apepe #2975</Text>
                <Button><AiOutlineDelete /></Button>
              </Flex>
            </Box>
            <Box mt='30px'>
              <Flex display='flex' justifyContent='space-around' alignItems='center'>
                <Image src={signup} h='80px' w='80px' borderRadius='15px' />
                <Text pl='10px'>Rare Apepe #2975</Text>
                <Button><AiOutlineDelete /></Button>
              </Flex>
            </Box>
            <Box mt='30px'>
              <Flex display='flex' justifyContent='space-around' alignItems='center'>
                <Image src={signup} h='80px' w='80px' borderRadius='15px' />
                <Text pl='10px'>Rare Apepe #2975</Text>
                <Button><AiOutlineDelete /></Button>
              </Flex>
            </Box>
          </DrawerBody>

          <Divider orientation='horizontal' />

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

        </DrawerContent>
      </Drawer>
    </Container >
  )
}

export default Cart;