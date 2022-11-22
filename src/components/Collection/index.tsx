import { collection, query, where, getDocs } from "firebase/firestore";
import CollectionHeader from './collectionHeader'
import { useEffect, useState } from "react";
import { db } from '../../firebase-config.js'
import { useParams } from 'react-router';
import GlobCard from '../globCard'
import {
  Box,
  Flex,
  SimpleGrid
} from '@chakra-ui/react'

type TNft = {
  img: string;
  name: string;
  currentPrice: number;
}

const Collection = () => {
  const { id } = useParams()
  const [nfts, setNfts] = useState<TNft[]>()

  useEffect(() => {
    const a = async () => {
      const q = query(collection(db, "nfts"), where("collectionID", "==", id));

      const querySnapshot = await getDocs(q);
      //@ts-ignore
      const result = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const nft = doc.data()
        result.push({ img: nft.img, name: nft.name, currentPrice: nft.currentPrice })
      });
      //@ts-ignore
      setNfts(result)
    }
    a()
  }, [])

  return (
    <Box>
      <CollectionHeader />
      <Flex display='flex' justifyContent='space-around'>
        <SimpleGrid spacing='40px' columns={5} m='20px'>
          {nfts?.map(item => <GlobCard nft={item} />)}

        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default Collection