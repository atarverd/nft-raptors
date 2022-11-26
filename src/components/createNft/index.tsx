import {
  Box,
  Text,
  Flex,
} from '@chakra-ui/react'
import Body from './body'
import UploadImage from '../createCollection/uploadImage'


const CreateNft = () => {

  return (
    <Flex display='flex' justifyContent='center'>

      <Box maxW='600px' mb='30px'>
        <Text fontSize='4xl'>Create New Item</Text>

        <Box mt='30px'>
          <Text fontSize='2xl'>Image</Text>
          <Text>File types supported: JPG, PNG, GIF. Max size: 100mb </Text>
          <Box mt='10px'>
            <UploadImage h='200px' w='300px' size='' />
          </Box>
        </Box>

        <Body />

      </Box>
    </Flex>
  )
}


export default CreateNft;