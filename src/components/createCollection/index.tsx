import { Box, Text, Flex, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import Body from "./body";
import UploadImage from "./uploadImage";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";



let images: any = []

const CreateCollection = () => {
  const [logoImage, setLogoImage] = useState<any>();
  const [featureImage, setFeatureImage] = useState<any>();
  const [bgImage, setBgImage] = useState<any>();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const storage = getStorage();
  const user = getAuth()
  const navigate = useNavigate()

  const handleLogoImage = (img: any) => {
    //@ts-ignore
    setImages(img);
  };

  const toast = useToast();

  const collectionValidator = () => {
    images = [logoImage, featureImage, bgImage]
    const imgIsValid = images.every((el: any) => el !== undefined);
    if (imgIsValid && name && description && category) {
      handleSubmit();
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

  const handleSubmit = async () => {
    let urls: any = [];

    const a = async () => {
      //@ts-ignore
      for await (const img of images) {
        const imageRef = ref(storage, img.name);
        //@ts-ignore
        await uploadBytes(imageRef, img);
        await getDownloadURL(imageRef).then((url) => {
          console.log(url);
          urls.push(url);
        });
      }
    };
    await a();
    addDoc(collection(db, "collections"), {
      collectionName: name,
      description,
      category,
      logo: urls[0],
      feature: urls[1],
      background: urls[2],
      creator: "atarverd",
      creatorId: user?.currentUser?.uid,
      date: new Date(),
      volume: 0,
    }).then(docRef => navigate('/collection/' + docRef.id))
      .then(() =>
        toast({
          title: "Successfully Created",
          duration: 3000,
          position: "top-right",
          status: "success",
        })
      );
  };

  return (
    <Flex display='flex' justifyContent='center'>
      <Box maxW='600px' mb='30px'>
        <Text fontSize='4xl'>Create a Collection</Text>

        <Box mt='40px'>
          <Text fontSize='2xl'>Logo Image</Text>
          <Text>This image will also be used for navigation</Text>
          <Box mt='10px'>
            <UploadImage
              size='2xl'
              h=''
              w=''
              handleLogoImage={setLogoImage}
            />
          </Box>
        </Box>

        <Box mt='30px'>
          <Text fontSize='2xl'>Featured image</Text>
          <Text>
            This image will be used for featuring your collection on the
            homepage, category pages, or other promotional areas of NFT Raptors
          </Text>
          <Box mt='10px'>
            <UploadImage
              h='200px'
              w='300px'
              size=''
              handleLogoImage={setFeatureImage}
            />
          </Box>
        </Box>

        <Box mt='30px'>
          <Text fontSize='2xl'>Banner image</Text>
          <Text>
            This image appearat the top of your collection page, Avoid including
            too much text in this banner image, as the dimensions change on
            different devices
          </Text>
          <Box mt='10px'>
            <UploadImage
              h='300px'
              w='600px'
              size=''
              handleLogoImage={setBgImage}
            />
          </Box>
        </Box>

        <Body
          setName={setName}
          setDescription={setDescription}
          setCategory={setCategory}
        />
        <Box mt='30px'>
          <Flex justifyContent='center'>
            <Button
              colorScheme='messenger'
              w='300px'
              onClick={collectionValidator}
            >
              Create Collection
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default CreateCollection;
