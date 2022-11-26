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
import login from "../../assets/login.jpg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import hiddenEye from "../../assets/hiddenEye.png";
import eye from "../../assets/eye.png";

const LogIn = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmailInput(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordInput(e.target.value);

  const isNameError = emailInput === "";
  const isPasswordError = passwordInput === "";

  const auth = getAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const navigateRagistration = () => {
    navigate("/signup");
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
              src={login}
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
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder='nft@raptors.com'
                  type='text'
                  value={emailInput}
                  onChange={handleEmailChange}
                />
              </FormControl>

              <FormControl isRequired={isPasswordError} w='350px'>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    value={passwordInput}
                    onChange={handlePasswordChange}
                    type={show ? "text" : "password"}
                    placeholder='******'
                  />
                  <InputRightElement>
                    {show ? (
                      <Image
                        onClick={handleClick}
                        boxSize='20px'
                        src={hiddenEye}
                      />
                    ) : (
                      <Image onClick={handleClick} boxSize='20px' src={eye} />
                    )}
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button
                onClick={handleLogin}
                h='2.50rem'
                size='md'
                bg='#2081e2'
                color='white'
                colorScheme='messenger'
              >
                Sign In
              </Button>
              <Button onClick={navigateRagistration} colorScheme='green'>
                Sign Up
              </Button>
            </Stack>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
};

export default LogIn;
