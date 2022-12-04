import { useState } from "react";
import {
	Box,
	Input,
	Image,
	VStack,
	Button,
	Avatar,
	HStack,
} from "@chakra-ui/react";

type TProps={
	size:string;
	h:string;
	w:string;
	handleLogoImage:(set:any)=>void;
}
const UploadImage = ({ size, h, w,handleLogoImage}:TProps) => {

	const [selectedFile, setSelectedFile] = useState<File | null>();


	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0){
      
			setSelectedFile(e.target.files[0]);
			handleLogoImage(e.target.files[0]);
		}
	};


	const removeSelectedFile = () => {
		setSelectedFile(null);
	};

	return (

		<Box >
			<VStack spacing="2rem">

				{!size ?
					selectedFile &&
          <Image
          	w={w}
          	h={h}
          	src={URL.createObjectURL(selectedFile)} />
					: selectedFile && (
						<Avatar
							src={URL.createObjectURL(selectedFile)}
							size={size}
						>
						</Avatar>
					)}

				<Input type="file" onChange={onChange} accept="image/*" />
				{selectedFile &&
          <HStack spacing="2rem">
          	<Button colorScheme='messenger' onClick={removeSelectedFile}>
              Remove Image
          	</Button>
          </HStack>}

			</VStack>
		</Box>
	);
};

export default UploadImage;