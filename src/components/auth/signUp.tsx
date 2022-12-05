import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase-config";
import { setDoc, doc } from "firebase/firestore";
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
	useColorMode
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

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmailInput(e.target.value);
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setNameInput(e.target.value);
	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPasswordInput(e.target.value);
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
					userLogo: "https://www.biiainsurance.com/wp-content/uploads/2015/05/no-image.jpg",
					userBackground: "https://tse1.mm.bing.net/th?id=OIP.qdXw46RAz1BXbH0KmzD1GAHaEK&pid=Api&P=0"
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
			.catch(() => {
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
								bg={colorMode === "dark" ? "#2051c4" : "#0078ff"}
								color='white'
								_hover={{ background: colorMode === "dark" ? 'messenger.800' : 'messenger.600' }}
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
