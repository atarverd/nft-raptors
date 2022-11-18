import { useState } from 'react'
import {
  Box,
  Text,
  Image,
  HStack,
  Button,
  Collapse,
} from '@chakra-ui/react'
import login from '../../assets/login.jpg'
import signup from '../../assets/signup.jpg'

const CollectionHeader = () => {

  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)

  return (
    <Box>

      <Box h='300px'>
        <Image src={login} h='300px' w='full' position='absolute' zIndex='-1' />
        <Box
          ml='40px'
          border='4px'
          borderColor='#EDF2F7'
          borderRadius='10px'
          top='180px'
          position='absolute' >
          <Image
            src={signup}
            w='200px'
            h='200px'
            borderRadius='5px'
            zIndex='1'
          />
        </Box>
      </Box>

      <Box ml='40px' my='20px' mt='30px'>
        <Text fontSize='4xl' mt='30px'>Otherdeed for Otherside</Text>
        <Text fontSize='2xl' mt='10px'>By NFT Raptors</Text>
        <HStack spacing={5} mt='10px'>
          <Text>Items 100.000</Text>
          <Text>Created Jun 2022</Text>
          <Text>Creator fee 20%</Text>
          <Text>Chain AMD</Text>
        </HStack>
        <Box maxW='300px' mt='10px'>
          <Collapse startingHeight={20} in={show} >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </Collapse>
          <Button size='xs' onClick={handleToggle} mt='1rem'>
            Show {show ? 'Less' : 'More'}
          </Button>
        </Box>
      </Box>

    </Box>
  )
}

export default CollectionHeader