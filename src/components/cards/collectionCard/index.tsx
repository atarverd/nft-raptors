import {
	Box,
	Text,
	Stack,
	Image,
	Button,
	useColorMode,
} from "@chakra-ui/react";
import { getAuth } from "firebase/auth";
import { db } from "../../../firebase-config";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";

type TNft = {
  collection: {
    id: string;
    imageUrl: string;
    name: string;
    ownerId: string;
  },
  asyncronusCollection?: () => void;
};

const CollectionCard = ({ collection, asyncronusCollection }: TNft) => {
	const { colorMode } = useColorMode();
	const navigate = useNavigate();
	const user = getAuth();

	const isOwner = collection.ownerId === user?.currentUser?.uid;
	console.log(collection.ownerId, user?.currentUser?.uid);
	const checkHover = colorMode === "dark" ? "red" : "green";

	const toCollectionPage = () => {
		navigate("/collection/" + collection.id);
	};

	const deleteCollecton = async () => {
		if (asyncronusCollection) {
			await deleteDoc(doc(db, "collections", collection.id))
				.then(() => asyncronusCollection());
		}
	};

	return (
		<Box>
			<Box
				// w='350px'
				borderRadius='8px'
				overflow='hidden'
				boxShadow={
					colorMode === "dark"
						? "0 0 24px 4px white"
						: "0 0 24px 4px rgba(0, 0, 0, 0.15)"
				}
				bg='white'
				w={[200,null,300, 350]}
			>
				<Image
					onClick={toCollectionPage}
					src={collection.imageUrl}
					w={[200,null,300, 350]}
					h='220px'
					borderRadius='5px'
					transition='transform .2s;'
					_hover={{ transform: "scale(1.1)" }}
				/>

				<Stack p='3' bg={colorMode === "dark" ? "#071b38" : "gray.200"}>
					<Text onClick={toCollectionPage} fontSize='2xl' noOfLines={1}>
						{collection.name}
					</Text>

					{isOwner && asyncronusCollection &&
            <Button
            	bg={colorMode === "dark" ? "#2051c4" : "#0078ff"}
            	color='white'
            	onClick={() => deleteCollecton()}
            	_hover={{ background: checkHover }}
            >
              Delete Collection
            </Button>}
				</Stack>

			</Box>
		</Box>
	);
};

export default CollectionCard;
