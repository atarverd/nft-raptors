import {
  Box,
  Flex,
  Text,
  Button,
  Textarea,
} from "@chakra-ui/react";
import UploadImage from "../createCollection/uploadImage";


const SettingsBody = () => {

  return (
    <Box>
      <Text fontSize='4xl'>Profile Details</Text>

      <Box mt='30px'>
        <Text fontSize='2xl'>Profile Image</Text>
        <Box mt='10px'>
          <UploadImage
            h=''
            w=''
            size='2xl'
            handleLogoImage=''
          />
        </Box>
      </Box>

      <Box mt='30px'>
        <Text fontSize='2xl'>Profile Banner</Text>
        <Box mt='10px'>
          <UploadImage
            h='200px'
            w='300px'
            size=''
            handleLogoImage=''
          />
        </Box>
      </Box>

      <Box mt='30px'>
        <Text fontSize='2xl' mt='10px'>
          Bio
        </Text>
        <Textarea
          mt='10px'
          placeholder='Provide detailed description of your item'
        />
      </Box>


      <Box mt='30px'>
        <Flex justifyContent='center'>
          <Button colorScheme='messenger' w='200px'>
            Save
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default SettingsBody;
