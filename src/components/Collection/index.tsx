import GlobCard from '../globCard'
import CollectionHeader from './collectionHeader'

import {
  Box,
  Flex,
  SimpleGrid
} from '@chakra-ui/react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from 'react-router';
import  { useEffect, useState } from "react";
import {db} from '../../firebase-config.js'

type TNft={
  img:string;
  name:string;
  currentPrice:number;
}

const Collection = () => {  
  const { id } = useParams()
  const [nfts,setNfts]=useState<TNft[]>()
  useEffect(()=>{
    const a=async () => {
      const q = query(collection(db, "nfts"), where("collectionID", "==", id));

      const querySnapshot = await getDocs(q);
      //@ts-ignore
      const result=[]
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const nft=doc.data()
        result.push({img:nft.img,name:nft.name,currentPrice:nft.currentPrice})
      });
      //@ts-ignore
      setNfts(result)
    }
    a()
    
  },[])
  return (
    <Box>
      <CollectionHeader />
      <Flex display='flex' justifyContent='space-around'>
        <SimpleGrid spacing='40px' columns={5} m='20px'>
          {nfts?.map(item=><GlobCard nft={item} />)}
          
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default Collection