import {
  Box,
  Text,
  Image,
  Menu,
  Flex,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import UserTabs from "./userTabs";
import login from "../../assets/login.jpg";
import { ChevronDownIcon } from '@chakra-ui/icons'
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
        <Flex justifyContent='space-between' alignItems='center'>
          <Text fontSize='4xl' mt='30px'>
            for example
          </Text>
          <Box mt='35px' mr='40px'>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Create a Collection</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
        <UserTabs />
      </Box>


    </Box >
  );
};

export default UserHeader;
