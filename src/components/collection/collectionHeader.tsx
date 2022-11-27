import {
  Box,
  Text,
  Image,
  HStack,
  Button,
  Collapse,
  Skeleton,
} from "@chakra-ui/react";
import login from "../../assets/login.jpg";
import signup from "../../assets/signup.jpg";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config.js";

type TProp = {
  nftCount?: number;
};

type TCollection = {
  collectionName: string;
  description: string;
  creator: string;
  date: {
    seconds: number;
    nanoseconds: number;
  };
  logo: string;
  background: string;
};
const CollectionHeader = ({ nftCount }: TProp) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const [collection, setCollection] = useState<TCollection>();

  const handleToggle = () => setShow(!show);

  const { id } = useParams();

  useEffect(() => {
    const a = async () => {
      const snap = await getDoc(doc(db, "collections", id as string));

      if (snap.exists()) {
        console.log(snap.data());
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
        <Box h='300px'>
          <Image
            src={collection?.background}
            h='300px'
            w='full'
            position='absolute'
          />

          <Box
            ml='40px'
            border='4px'
            borderColor='#EDF2F7'
            borderRadius='10px'
            top='280px'
            position='absolute'
          >
            {/* <Skeleton isLoaded={isLoaded}> */}
            <Image
              src={collection?.logo}
              w='200px'
              h='200px'
              borderRadius='5px'
              zIndex='1'
            />
            {/* </Skeleton> */}
          </Box>
        </Box>
      </Skeleton>
      <Box ml='40px' my='20px' mt='30px'>
        <Text fontSize='4xl' mt='30px'>
          {collection?.collectionName}
        </Text>
        <Text fontSize='2xl' mt='10px'>
          by {collection?.creator}
        </Text>

        <HStack spacing={5} mt='10px'>
          <Text>Items {nftCount}</Text>
          //@ts-ignore
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
