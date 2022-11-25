import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  Box,
  Flex,
  Image,
  Input,
  Stack,
  Radio,
  HStack,
  Button,
  FormLabel,
  InputGroup,
  RadioGroup,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import signup from "../../assets/signup.jpg";

const SignUp = () => {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleEmailChange = (e: any) => setEmailInput(e.target.value);
  const handleNameChange = (e: any) => setNameInput(e.target.value);
  const handlePasswordChange = (e: any) => setPasswordInput(e.target.value);

  const isEmailError = emailInput === "";
  const isNameError = nameInput === "";
  const isPasswordError = passwordInput === "";

  const auth = getAuth();

  const handleRegistration = () => {
    createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

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
                  onChange={handleNameChange}
                />
              </FormControl>

              <FormControl isRequired={isPasswordError} w='350px'>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    value={passwordInput}
                    onChange={handlePasswordChange}
                    type={show ? "text" : "password"}
                    placeholder='Enter password'
                  />
                  <InputRightElement>
                    <Button h='2rem' size='md' onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl isRequired={isEmailError} w='350px'>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder='Email is required'
                  type='email'
                  value={emailInput}
                  onChange={handleEmailChange}
                />
              </FormControl>

              <RadioGroup defaultValue='2'>
                <Stack spacing={5} direction='row'>
                  <Radio colorScheme='blue' value='1'>
                    Male
                  </Radio>
                  <Radio colorScheme='pink' value='2'>
                    Female
                  </Radio>
                </Stack>
              </RadioGroup>

              <Button
                onClick={handleRegistration}
                h='2.50rem'
                size='md'
                bg='#2081e2'
                color='white'
                colorScheme='messenger'
              >
                Sign Up
              </Button>
            </Stack>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
};

export default SignUp;
