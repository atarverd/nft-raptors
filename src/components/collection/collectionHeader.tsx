import {
	Box,
	Text,
	Flex,
	Image,
	HStack,
	Button,
	Collapse,
	Skeleton,
	useColorMode,
} from "@chakra-ui/react";
import { TCollection } from "../../types/collection.types";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { getAuth } from "firebase/auth";

type TProp = {
	nftCount?: number;
};


const CollectionHeader = ({ nftCount }: TProp) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [show, setShow] = useState(false);
	const [collection, setCollection] = useState<TCollection>();

	const handleToggle = () => setShow(!show);
	const navigate = useNavigate();
	const { colorMode } = useColorMode();


	const navigaetToCreateNft = () => {
		navigate("/create-nft");
	};


	const { id } = useParams();
	const user = getAuth();
	const isCreator = user?.currentUser?.uid === collection?.creatorId;
	useEffect(() => {
		const a = async () => {
			const snap = await getDoc(doc(db, "collections", id as string));

			if (snap.exists()) {
				//@ts-ignore
				setCollection(snap.data());
				setIsLoaded(true);
			} else {
				console.log("No such document");
			}
		};
		a();
	}, []);

	return (
		<Box>
			<Skeleton isLoaded={isLoaded}>
				<Box h='300px' bgImage={`url(${collection?.background})`} bgPosition="center"
					bgRepeat="no-repeat" objectFit='fill' pt='150px' backgroundSize='cover'>
					<Box
						ml='40px'
						border='4px'
						borderColor='#EDF2F7'
						borderRadius='10px'
						width='max-content'
					>
						<Image
							src={collection?.logo}
							w='200px'
							h='200px'
							borderRadius='5px'
							zIndex='1'
						/>
					</Box>
				</Box>
			</Skeleton>
			<Box mx='40px' my='20px' mt='50px'>
				<Flex justifyContent='space-between' alignItems='center'>
					<Text fontSize='4xl' mt='30px'>
						{collection?.collectionName}
					</Text>
					{isCreator &&
						<Button
							bg={colorMode === "dark" ? "#2051c4" : "#0078ff"}
							color='white'
							_hover={{ background: colorMode === "dark" ? 'messenger.800' : 'messenger.600' }}
							onClick={navigaetToCreateNft}
							w='200px'
							mt='35px'>
							Create Nft
						</Button>
					}

				</Flex>
				<Text fontSize='2xl' mt='10px'>
					by {collection?.creator}
				</Text>

				<HStack spacing={5} mt='10px'>
					<Text>Items {nftCount}</Text>
					<Text>Created </Text>
				</HStack>
				<Box maxW='30%' mt='10px'>
					<Collapse startingHeight={20} in={show}>
						{collection?.description}
					</Collapse>
					<Button size='xs' onClick={handleToggle} mt='1rem'>
						Show {show ? "Less" : "More"}
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default CollectionHeader;