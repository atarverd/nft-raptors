import {
	Flex,
	Image,
	Center,
	Text,
	useColorMode
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

type PropsType = {
  data: { name: string; imageUrl: string };
};

const Card = ({ data }: PropsType) => {

	const { colorMode } = useColorMode();
	const navigate = useNavigate();

	const navigateCategory = () => {
		navigate("/category/" + data.name.toLowerCase().replaceAll(" ",""));
	};

	return (
		<Flex
			bg={colorMode === "dark" ? "#071b38" : "gray.200"}
			// h='250px'
			borderRadius='15px'
			cursor='pointer'
			flexDirection='column'
			transition='transform .2s;'
			_hover={{ transform: "scale(1.1)" }}
			onClick={navigateCategory}
		>
			<Image
				w='100%'
				src={data.imageUrl}
				borderTopRadius='15px'

			></Image>
			<Center m='1rem'>
				<Text>
					{data.name}
				</Text>
			</Center>
		</Flex>
	);
};

export default Card;
