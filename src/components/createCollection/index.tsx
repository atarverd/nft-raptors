import {
  Box,
  Text,
  Flex,
<<<<<<< HEAD
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
=======
} from '@chakra-ui/react'
import Body from './body'
import UploadImage from './uploadImage'

>>>>>>> development

const CreateCollection = () => {

  return (
<<<<<<< HEAD
    <Box>
      <Text fontSize='5xl'>Create a Collection</Text>
      <Box>
        <FormControl isRequired>
          <FormLabel fontSize='3xl'>Logo Image</FormLabel>
          <Text>This image will also be used for navigation</Text>
        </FormControl>
      </Box>

      <Box></Box>

      <Box></Box>
    </Box>
  );
};
=======

    <Flex display='flex' justifyContent='center'>

      <Box maxW='600px' mb='30px'>
        <Text fontSize='4xl'>Create a Collection</Text>

        <Box mt='40px'>
          <Text fontSize='2xl'>Logo Image</Text>
          <Text>This image will also be used for navigation</Text>
          <Box mt='10px'>
            <UploadImage size='2xl' h='' w='' />
          </Box>
        </Box>

        <Box mt='30px'>
          <Text fontSize='2xl'>Featured image</Text>
          <Text>This image will be used for featuring your collection on the homepage,
            category pages, or other promotional areas of NFT Raptors
          </Text>
          <Box mt='10px'>
            <UploadImage h='200px' w='300px' size='' />
          </Box>
        </Box>

        <Box mt='30px'>
          <Text fontSize='2xl'>Banner image</Text>
          <Text>This image appearat the top of your collection page, Avoid including
            too much text in this banner image, as the dimensions change on different
            devices
          </Text>
          <Box mt='10px'>
            <UploadImage h='300px' w='600px' size='' />
          </Box>
        </Box>

        <Body />

      </Box>
    </Flex>
  )
}
>>>>>>> development

export default CreateCollection;
