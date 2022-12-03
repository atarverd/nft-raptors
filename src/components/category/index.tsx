import React from "react";
import { useParams } from "react-router";
import { db } from "../../firebase-config";
import { useState, useEffect } from 'react';
import CollectionCard from "../cards/collectionCard";
import { SimpleGrid, Center } from "@chakra-ui/react";
import { collection, query, where, getDocs, limit } from "firebase/firestore";


const Category = () => {

  const [filteredCollections, setFilteredCollections] = useState([])

  const { id } = useParams()

  const filteredCategory = async () => {
    const q = query(
      collection(db, 'collections'),
      where('category', '==', id as string), limit(20)
    )

    const querySnapShot = await getDocs(q)
    let result: any = []
    querySnapShot.forEach((col) => {
      const collection = col.data()
      result.push({
        id: col.id,
        ownerId: collection.creatorId,
        name: collection.collectionName,
        imageUrl: collection.feature,
      })
    })
    setFilteredCollections(result)
  }

  useEffect(() => {
    filteredCategory()
  }, [])

  return (
    <Center>
      <SimpleGrid columns={[1, 3]} spacing='80px' my='4%'>
        {filteredCollections.map((category) => {
          return <CollectionCard collection={category} />;
        })}
      </SimpleGrid>
    </Center>
  )
}

export default Category