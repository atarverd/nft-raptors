import { Box, Text, Image } from "@chakra-ui/react";
import UserTabs from "./userTabs";
import login from "../../assets/login.jpg";
import signup from "../../assets/signup.jpg";

const UserHeader = () => {
  return (
    <Box>
      <Box h='300px'>
        <Image src={signup} h='300px' w='full' position='absolute' />
        <Box
          ml='40px'
          border='4px'
          borderColor='#EDF2F7'
          borderRadius='10px'
          top='27%'
          position='absolute'
        >
          <Image
            src={login}
            w='200px'
            h='200px'
            borderRadius='5px'
            zIndex='1'
          />
        </Box>
      </Box>

      <Box ml='40px' my='20px' mt='50px'>
        <Text fontSize='4xl' mt='30px'>
          for example
        </Text>
        <UserTabs />
      </Box>
    </Box>
  );
};

export default UserHeader;
