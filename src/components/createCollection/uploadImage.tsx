import {
	Box,
	Input,
	Image,
	VStack,
	Button,
	Avatar,
	HStack,
	useColorMode,
} from '@chakra-ui/react';
import { useState } from 'react';

type TProps = {
	size: string;
	h: string;
	w: string;
	handleLogoImage: (set: any) => void;
}
const UploadImage = ({ size, h, w, handleLogoImage }: TProps) => {

	const [selectedFile, setSelectedFile] = useState<File | null>();
	const { colorMode } = useColorMode();


	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {

			setSelectedFile(e.target.files[0]);
			handleLogoImage(e.target.files[0]);
		}
	};


	const removeSelectedFile = () => {
		setSelectedFile(null);
	};

	return (

		<Box >
			<VStack spacing='2rem'>

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

				<Input type='file' onChange={onChange} accept='image/*' />
				{selectedFile &&
					<HStack spacing='2rem'>
						<Button
							bg={colorMode === 'dark' ? '#2051c4' : '#0078ff'}
							color='white'
							_hover={{ background: colorMode === 'dark' ? 'messenger.800' : 'messenger.600' }}
							onClick={removeSelectedFile}>
							Remove Image
						</Button>
					</HStack>}

			</VStack>
		</Box>
	);
};

export default UploadImage;