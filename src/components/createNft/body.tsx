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
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';

type TCollection={
  collectionName:string;
  collectionId:string
}

const Body = () => {
  const user=getAuth()
  const [collections,setCollections]=useState<TCollection[]>([])
  const asynchronus =async () => {
    console.log(user.currentUser)
    const q = query(collection(db, "collections"), where("creatorId", "==", '5E820pDzVuTFRznD6m0IooKAlUs2'));

      const querySnapshot = await getDocs(q);
      let result:any=[]
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const col=doc.data()
        result.push({collectionName:col.collectionName,collectionId:doc.id})
      });
      setCollections(result)
      console.log(result)
  }

  useEffect(()=>{asynchronus();console.log(user.currentUser)},[])
  return (
    <Box>
      <Text fontSize='4xl'>Create New Item</Text>

      <Box mt='30px'>
        <Text fontSize='2xl'>Image</Text>
        <Text>File types supported: JPG, PNG, GIF. Max size: 100mb </Text>
        <Box mt='10px'>
          <UploadImage h='200px' w='300px' size='' handleLogoImage={()=>console.log(1)}/>
        </Box>
      </Box>
      <Box mt='30px'>
        <Text fontSize='2xl' mt='10px'>Name</Text>
        <Input placeholder='Item Name' mt='10px'></Input>
      </Box>

      <Box mt='30px'>
        <Text fontSize='2xl' mt='10px'>Description</Text>
        <Textarea mt='10px' placeholder='Provide detailed description of your item' />
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
                <RadioGroup defaultValue='1'>
                  <Stack spacing='15px'>
                    
                    {collections?.map(col=><Radio value={col.collectionId} size='lg' colorScheme='messenger'>{col.collectionName}</Radio>)}
                    
                  </Stack>
                </RadioGroup>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      <Box mt='30px'>
        <Flex justifyContent='center'>
          <Button colorScheme='messenger' w='200px'>Create</Button>
        </Flex>
      </Box>

    </Box>
  )
}

export default Body