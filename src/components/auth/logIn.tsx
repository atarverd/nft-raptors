import { useState } from "react";
import {
  Box,
  Flex,
  Stack,
  Image,
  Input,
  Button,
  HStack,
  useToast,
  FormLabel,
  InputGroup,
  FormControl,
  useColorMode,
  InputRightElement,
} from "@chakra-ui/react";
import eye from "../../assets/eye.png";
import login from "../../assets/login.jpg";
import eyeDark from "../../assets/eyeDark.png";
import hiddenEyeDark from "../../assets/hiddenEyeDark.png";
import { useNavigate } from "react-router";
import hiddenEye from "../../assets/hiddenEye.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const LogIn = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const navigate = useNavigate();
  const toast = useToast();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmailInput(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordInput(e.target.value);

  const isNameError = emailInput === "";
  const isPasswordError = passwordInput === "";

  const auth = getAuth();
  const { colorMode } = useColorMode();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, emailInput, passwordInput)
      .then(() => {
        toast({
          title: "Logged In",
          duration: 3000,
          position: "top-right",
          variant: "subtle",
          status: "success",
        });
        navigate("/");
      })
      .catch(() => {
        toast({
          title: "Invalid Email or Password",
          duration: 3000,
          position: "top-right",
          variant: "subtle",
          status: "error",
        });
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
      boxShadow={
        colorMode === "dark"
          ? "0 0 24px 4px white"
          : "0 0 24px 4px rgba(0, 0, 0, 0.15)"
      }
      bg={colorMode === "dark" ? "#071b38" : "gray.200"}
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
                        src={colorMode === "dark" ? hiddenEyeDark : hiddenEye}
                      />
                    ) : (
                      <Image
                        onClick={handleClick}
                        boxSize='20px'
                        src={colorMode === "dark" ? eyeDark : eye}
                      />
                    )}
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button
                onClick={handleLogin}
                h='2.50rem'
                size='md'
                bg={colorMode === "dark" ? "#2051c4" : "#0078ff"}
                color='white'
                _hover={{
                  background:
                    colorMode === "dark" ? "messenger.800" : "messenger.600",
                }}
              >
                Sign In
              </Button>
              <Button
                onClick={navigateRagistration}
                bg='#38A169'
                color='white'
                _hover={{ background: "#2F855A" }}
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

export default LogIn;
