import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Input,
  Stack,
  Radio,
  HStack,
  Button,
  useToast,
  FormLabel,
  InputGroup,
  RadioGroup,
  FormControl,
  useColorMode,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import eye from "../../assets/eye.png";
import { db } from "../../firebase-config";
import signup from "../../assets/signup.jpg";
import eyeDark from "../../assets/eyeDark.png";
import hiddenEyeDark from "../../assets/hiddenEyeDark.png";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import hiddenEye from "../../assets/hiddenEye.png";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const male =
  "https://firebasestorage.googleapis.com/v0/b/nft-raptors.appspot.com/o/male.jpg?alt=media&token=809545dd-69db-40d0-ad3a-25694836960d";
const female =
  "https://firebasestorage.googleapis.com/v0/b/nft-raptors.appspot.com/o/female.jpg?alt=media&token=0cbb8501-6a32-46d7-9d00-c58bbf4fbf71";
const bgArr: string[] = [
  "https://firebasestorage.googleapis.com/v0/b/nft-raptors.appspot.com/o/wp8283854.jpg?alt=media&token=28a932bc-cc6e-4f2f-acd0-b82492dce416",
  "https://firebasestorage.googleapis.com/v0/b/nft-raptors.appspot.com/o/wp8283835.png?alt=media&token=47787e91-40c4-4153-8de6-58587d332c4d",
  "https://firebasestorage.googleapis.com/v0/b/nft-raptors.appspot.com/o/wp8283823.jpg?alt=media&token=324b24fe-0e3f-443e-9bcd-c66256423508",
  "https://firebasestorage.googleapis.com/v0/b/nft-raptors.appspot.com/o/wp8283756.jpg?alt=media&token=1c563926-2394-4581-b6fc-558bd6ebfea9",
  "https://firebasestorage.googleapis.com/v0/b/nft-raptors.appspot.com/o/wp8283653.jpg?alt=media&token=3687f95e-f749-45f0-bdd3-8d39209cceee",
];

const SignUp = () => {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [show, setShow] = useState(false);

  const [gender, setGender] = useState("Male");
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => setShow(!show);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmailInput(e.target.value);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNameInput(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordInput(e.target.value);
  const handleGender = (e: string) => setGender(e);

  const isEmailError = emailInput === "";
  const isNameError = nameInput === "";
  const isPasswordError = passwordInput === "";

  const auth = getAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

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
    setIsClicked(true);
    createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        const user = userCredential.user;
        setDoc(doc(db, "users", user.uid), {
          username: nameInput,
          email: emailInput,
          gender,
          isPaymentConnected: false,
          paymentMethod: {},
          balance: 0,
          favorites: [],
          bio: "",
          userLogo: gender === "male" ? male : female,
          userBackground: bgArr[Math.floor(Math.random() * 5) + 1],
        }).then(() => {
          toast({
            title: "Account Created and Logged In",
            duration: 3000,
            position: "top-right",
            variant: "subtle",
            status: "success",
          });
          navigate("/");
        });
      })
      .catch((e) => {
        console.log(e.message);
        toast({
          title: "Something Went Wrong",
          duration: 3000,
          position: "top-right",
          variant: "subtle",
          status: "error",
        });
      });
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
                  <Radio colorScheme='blue' value='male'>
                    Male
                  </Radio>
                  <Radio colorScheme='pink' value='female'>
                    Female
                  </Radio>
                </Stack>
              </RadioGroup>

              <Button
                onClick={validateRegistration}
                h='2.50rem'
                size='md'
                bg={colorMode === "dark" ? "#2051c4" : "#0078ff"}
                color='white'
                _hover={{
                  background:
                    colorMode === "dark" ? "messenger.800" : "messenger.600",
                }}
                disabled={isClicked}
              >
                {isClicked ? <Spinner /> : "Sign up"}
              </Button>
            </Stack>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
};

export default SignUp;
