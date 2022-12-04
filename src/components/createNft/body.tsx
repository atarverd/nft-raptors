import {
	Box,
	Flex,
	Text,
	Radio,
	Stack,
	Input,
	Button,
	Textarea,
	Accordion,
	RadioGroup,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	AccordionButton,
	useToast,
} from "@chakra-ui/react";
import { getAuth } from "firebase/auth";
import { db } from "../../firebase-config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadImage from "../createCollection/uploadImage";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";

type TCollection = {
  collectionName: string;
  collectionId: string;
};


const Body = () => {
	const [choosedCollection, setChoosedCollections] = useState<TCollection>({ collectionName: "",collectionId: ""});
	const [collections, setCollections] = useState<TCollection[]>([]);
	const [description, setDescription] = useState<string>();
	const [image, setImage] = useState<File>();
	const [name, setName] = useState<string>();
	
	const user = getAuth();
	const toast = useToast();
	const storage = getStorage();
	const navigate = useNavigate();


	const handleChoosedCollection = (e:  string) => {
		const id = collections?.find((el) => el.collectionName === e)?.collectionId;
		setChoosedCollections({ collectionName: e, collectionId: id as string });
	};
	const handleDescription = (e: any) => {
		console.log(e);
		setDescription(e.target.value);
	};

	const handleImage = (img: File) => {
		setImage(img);
	};

	const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const validateNft = () => {
		const collIsVallid = Object.values(choosedCollection).every(
			(el) => el !== undefined
		);
		if (collIsVallid && description && image && name) {
			handleCreate()
				.then(() =>
					toast({
						title: "Nft Created Successfully",
						duration: 3000,
						position: "top-right",
						variant: "subtle",
						status: "success",
					})
				)
				.then(() => navigate("/collection/" + choosedCollection?.collectionId));
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

	const handleCreate = async () => {

		if(image){
			const imageRef = ref(storage, image.name);
			let addedImageRef="";
			await uploadBytes(imageRef, image);
			await getDownloadURL(imageRef).then((url) => (addedImageRef = url));

			addDoc(collection(db, "nfts"), {
				name,
				currentPrice: 0,
				favourite: 0,
				img: addedImageRef,
				...choosedCollection,
				ownerId: user?.currentUser?.uid,
				priceHistory: [],
				isForSold: false,
				owner: "for example",
			})
				.then(() => console.log("true"))
				.catch((err) => console.log(err.messege));
		}
	};

	const asynchronus = async () => {
		const q = query(
			collection(db, "collections"),
			where("creatorId", "==", user.currentUser?.uid)
		);

		const ColSnapshot = await getDocs(q);
		const result: TCollection[] = [];
		ColSnapshot.forEach((doc) => {
			const col = doc.data();
			result.push({ collectionName: col.collectionName, collectionId: doc.id });
		});
		setCollections(result);
	};


	useEffect(() => {
		asynchronus();
	}, []);
	return (
		<Box>
			<Text fontSize='4xl'>Create New Nft</Text>

			<Box mt='30px'>
				<Text fontSize='2xl'>Image</Text>
				<Text>File types supported: JPG, PNG, GIF. Max size: 100mb </Text>
				<Box mt='10px'>
					<UploadImage
						h='200px'
						w='300px'
						size=''
						handleLogoImage={handleImage}
					/>

				</Box>
			</Box>
			<Box mt='30px'>
				<Text fontSize='2xl' mt='10px'>
          Name
				</Text>
				<Input placeholder='Item Name' mt='10px' onChange={handleName}></Input>
			</Box>

			<Box mt='30px'>
				<Text fontSize='2xl' mt='10px'>
          Description
				</Text>
				<Textarea
					mt='10px'
					placeholder='Provide detailed description of your item'
					onChange={handleDescription}
				/>
			</Box>

			<Box mt='30px'>
				<Text fontSize='2xl' mt='10px'>
          Collection
				</Text>
				<Text mt='10px'>This is the collection where your item will apear</Text>
				<Accordion allowToggle defaultIndex={[0]} allowMultiple mt='10px'>
					<AccordionItem>
						<AccordionButton>
							<Box flex='1' textAlign='left'>
								<Text fontSize='2xl'>Select Collection</Text>
							</Box>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel pb={4}>
							<Flex
								display='flex'
								flexDirection='column'
								justifyContent='center'
							>
								<RadioGroup defaultValue='1' onChange={handleChoosedCollection}>
									<Stack spacing='15px'>
										{collections?.map((col,i) => (
											<Radio
												value={col.collectionName}
												size='lg'
												colorScheme='messenger'
												key={i}
											>
												{col.collectionName}
											</Radio>
										))}

									</Stack>
								</RadioGroup>
							</Flex>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Box>

			<Box mt='30px'>
				<Flex justifyContent='center'>
					<Button onClick={validateNft} colorScheme='messenger' w='200px'>
            Create
					</Button>
				</Flex>
			</Box>
		</Box>
	);
};

export default Body;
