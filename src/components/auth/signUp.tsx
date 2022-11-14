import { useState } from "react";
import {
  Button,
  Box,
  Text,
  Image,
  InputGroup,
  Input,
  InputRightElement,
  Stack,
  HStack,
  VStack,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Radio,
  RadioGroup,
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

  return (
    <Box
      ml='20%'
      mr='20%'
      boxShadow='dark-lg'
      bg='white'
      mt='100px'
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
            <Stack spacing={5} p='7' rounded='md' mt='60px'>
              <FormControl isInvalid={isNameError}>
                <FormLabel>Name</FormLabel>
                <Input
                  type='text'
                  value={nameInput}
                  onChange={handleNameChange}
                />
                {!isNameError ? (
                  <FormHelperText>Enter your name.</FormHelperText>
                ) : (
                  <FormErrorMessage>Name is required.</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={isPasswordError}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    htmlSize={4}
                    width='400px'
                    pr='4.5rem'
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

              <FormControl isInvalid={isPasswordError}>
                <FormLabel>Password</FormLabel>
                <Input
                  type='text'
                  value={passwordInput}
                  onChange={handlePasswordChange}
                />
                {!isNameError ? (
                  <FormHelperText>Enter your password.</FormHelperText>
                ) : (
                  <FormErrorMessage>Password is required.</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={isEmailError}>
                <FormLabel>Email</FormLabel>
                <Input
                  type='email'
                  value={emailInput}
                  onChange={handleEmailChange}
                />
                {!isEmailError ? (
                  <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
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

              <Button h='2.50rem' size='md'>
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
