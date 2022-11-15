import { useState } from "react";
import {
  Box,
  Flex,
  Stack,
  Image,
  Input,
  Button,
  HStack,
  FormLabel,
  InputGroup,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import signup from "../../assets/signup.jpg";


const LogIn = () => {
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setNameInput(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPasswordInput(e.target.value);

  const isNameError = nameInput === "";
  const isPasswordError = passwordInput === "";

  return (
    <Box
      my='50px'
      ml='20%'
      mr='20%'
      boxShadow='dark-lg'
      bg='white'
      borderRadius='15px'
    >
      <Flex display='flex' align-items='flex-start'>
        <HStack>
          <Box padding='15px'>
            <Image
              src={signup}
              alt='signup'
              h='600px'
              w='450px'
              borderRadius='15px'
            />
          </Box>

          <Flex
            display='flex'
            alignItems='center'
            justify-content='center'
            flexDirection='column'
          >
            <Stack spacing={5} p='7' rounded='md' my='50px'>

              <FormControl isRequired={isNameError} w='350px'>
                <FormLabel>User Name</FormLabel>
                <Input
                  placeholder='User Name'
                  type='text'
                  value={nameInput}
                  onChange={handleNameChange} />
              </FormControl>

              <FormControl isRequired={isPasswordError} w='350px'>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    value={passwordInput}
                    onChange={handlePasswordChange}
                    type={show ? "text" : "password"}
                    placeholder='Enter password' />
                  <InputRightElement>
                    <Button h='2rem' size='md' onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button
                h='2.50rem'
                size='md'
                bg='#2081e2'
                color='white'
                colorScheme='messenger'>
                Log In
              </Button>
            </Stack>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
};

export default LogIn;
