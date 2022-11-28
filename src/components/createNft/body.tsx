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
} from '@chakra-ui/react'
import UploadImage from '../createCollection/uploadImage'
import { db } from '../../firebase-config'
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { ref, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'

type TCollection = {
  collectionName: string;
  collectionId: string
}

const Body = () => {

  const [choosedCollection, setChoosedCollections] = useState({})
  const [description, setDescription] = useState('')
  const [image, setImage] = useState()
  const [name, setName] = useState('')
  const storage = getStorage()
  const [collections, setCollections] = useState<TCollection[]>([])

  const user = getAuth()

  const handleChoosedCollection = (e: any) => {
    let id = collections?.find(el => el.collectionName === e)?.collectionId
    setChoosedCollections({ collectionName: e, collectionId: id })
  }
  const handleDescription = (e: any) => {
    setDescription(e.target.value)
  }

  const handleImage = (img: any) => {
    setImage(img)
  }

  const handleName = (e: any) => {
    setName(e.target.value)
  }

  const check = () => {
    console.log({ choosedCollection, description, image, name })
  }

  const handleCreate = async () => {
    console.log(image)
    //@ts-ignore
    const imageRef = ref(storage, image?.name)
    let addedImageRef: any
    //@ts-ignore
    await uploadBytes(imageRef, image)
    await getDownloadURL(imageRef).then((url) => addedImageRef = (url))

    addDoc(collection(db, 'nfts'),
      {
        name,
        currentPrice: 0,
        favourite: 0,
        img: addedImageRef,
        ...choosedCollection,
        ownerId: user?.currentUser?.uid,
        priceHistory: [],
        isForSold: false,
        owner: 'for example'
      })
      .then(() => (console.log('true')))
      .catch((err) => console.log(err.messege))
  }

  const asynchronus = async () => {
    const q = query(collection(db, "collections"), where("creatorId", "==", 'CVdhOe8IdCMbDAQDWIaUkJJiYnJ2'));

    const querySnapshot = await getDocs(q);
    let result: any = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const col = doc.data()
      result.push({ collectionName: col.collectionName, collectionId: doc.id })
    });
    setCollections(result)
  }

  useEffect(() => { asynchronus(); }, [])
  return (
    <Box>
      <Text fontSize='4xl'>Create New Item</Text>

      <Box mt='30px'>
        <Text fontSize='2xl'>Image</Text>
        <Text>File types supported: JPG, PNG, GIF. Max size: 100mb </Text>
        <Box mt='10px'>
          <UploadImage h='200px' w='300px' size='' handleLogoImage={handleImage} />
        </Box>
      </Box>
      <Box mt='30px'>
        <Text fontSize='2xl' mt='10px'>Name</Text>
        <Input placeholder='Item Name' mt='10px' onChange={handleName}></Input>
      </Box>

      <Box mt='30px'>
        <Text fontSize='2xl' mt='10px'>Description</Text>
        <Textarea mt='10px' placeholder='Provide detailed description of your item' onChange={handleDescription} />
      </Box>

      <Box mt='30px'>
        <Text fontSize='2xl' mt='10px'>Collection</Text>
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
              <Flex display='flex' flexDirection='column' justifyContent='center'>
                <RadioGroup defaultValue='1' onChange={handleChoosedCollection}>
                  <Stack spacing='15px'>

                    {collections?.map(col => <Radio value={col.collectionName} size='lg' colorScheme='messenger'>{col.collectionName}</Radio>)}

                  </Stack>
                </RadioGroup>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      <Box mt='30px'>
        <Flex justifyContent='center'>
          <Button onClick={handleCreate} colorScheme='messenger' w='200px'>Create</Button>
        </Flex>
      </Box>

    </Box>
  )
}

export default Body