import {
	Box,
	Flex,
	Text,
	Button,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../utils/updateUser";
import UploadImage from "../createCollection/uploadImage";


const SettingsBody = () => {

	const [bio, setBio] = useState<string>();
	const [logoImage, setLogoImage] = useState<File>();
	const [backgroundImage, setBackgroundImage] = useState<File>();

	const user = getAuth();
	const toast = useToast();
	const navigate = useNavigate();

	const handleUpdate = () => {
		updateUser(user?.currentUser?.uid as string, logoImage, backgroundImage, bio)
			.then(() => toast({
				title: "Successfully Updated",
				status: "success",
				duration: 3000,
				position: "top-right"
			}))
			.then(() => navigate("/" + user?.currentUser?.uid));
	};

	return (
		<Box>
			<Text fontSize='4xl'>Profile Details</Text>

			<Box mt='30px'>
				<Text fontSize='2xl'>Profile Image</Text>
				<Box mt='10px'>
					<UploadImage
						h=''
						w=''
						size='2xl'
						handleLogoImage={setLogoImage}
					/>
				</Box>
			</Box>

			<Box mt='30px'>
				<Text fontSize='2xl'>Profile Banner</Text>
				<Box mt='10px'>
					<UploadImage
						h='200px'
						w='300px'
						size=''
						handleLogoImage={setBackgroundImage}
					/>
				</Box>
			</Box>

			<Box mt='30px'>
				<Text fontSize='2xl' mt='10px'>
          Bio
				</Text>
				<Textarea
					mt='10px'
					placeholder='Provide detailed description of your item'
					onChange={(e) => setBio(e.target.value)}
				/>
			</Box>


			<Box mt='30px'>
				<Flex justifyContent='center'>
					<Button colorScheme='messenger' w='200px' onClick={handleUpdate}>
            Update
					</Button>
				</Flex>
			</Box>
		</Box>
	);
};

export default SettingsBody;
