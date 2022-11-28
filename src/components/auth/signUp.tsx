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
  useToast,
} from "@chakra-ui/react";
import signup from "../../assets/signup.jpg";
import hiddenEye from "../../assets/hiddenEye.png";
import eye from "../../assets/eye.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [show, setShow] = useState(false);
  const [gender, setGender] = useState("Male");
  const handleClick = () => setShow(!show);

  const handleEmailChange = (e: any) => setEmailInput(e.target.value);
  const handleNameChange = (e: any) => setNameInput(e.target.value);
  const handlePasswordChange = (e: any) => setPasswordInput(e.target.value);
  const handleGender = (e: any) => setGender(e.target.value);

  const isEmailError = emailInput === "";
  const isNameError = nameInput === "";
  const isPasswordError = passwordInput === "";

  const auth = getAuth();

  const toast = useToast();

  const navigate = useNavigate();

  const validateRegistration = () => {
    if (nameInput && passwordInput && emailInput) {
      handleRegistration();
    } else {
      toast({
        title: "Some Fields Are Empty",
        duration: 3000,
        position: "top-right",
        variant: "subtle",
        status: "error",
      });
    }
  };

  const handleRegistration = () => {
    createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        toast({
          title: "Account Created and Logged In",
          duration: 3000,
          position: "top-right",
          variant: "subtle",
          status: "success",
        });
        const user = userCredential.user;

        navigate("/");
      })
      .catch((error) => {
        toast({
          title: "Something Went Wrong",
          duration: 3000,
          position: "top-right",
          variant: "subtle",
          status: "error",
        });
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
                <FormLabel>Username</FormLabel>
                <Input
                  placeholder='username'
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

              <FormControl isRequired={isEmailError} w='350px'>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder='nft@raptors.com'
                  type='email'
                  value={emailInput}
                  onChange={handleEmailChange}
                />
              </FormControl>

              <RadioGroup onChange={handleGender} defaultValue='2'>
                <Stack spacing={5} direction='row'>
                  <Radio colorScheme='blue' value='Male'>
                    Male
                  </Radio>
                  <Radio colorScheme='pink' value='Female'>
                    Female
                  </Radio>
                </Stack>
              </RadioGroup>

              <Button
                onClick={validateRegistration}
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
