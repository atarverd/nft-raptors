import React, { useEffect, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import TopFiveColumn from "./TopFiveColumn";
// import { data } from "../../../topCollectionsData";
import { db } from "../../../firebase-config";
import { query, orderBy,limit,collection, getDocs } from "firebase/firestore";  

const TopCollections = () => {
  const [data,setData]=useState([])

  const a =async () => {
    const q = query(collection(db,'collections'),orderBy('volume','desc'),  limit(10));
    const querySnapshot = await getDocs(q);
    const results:any=[]
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      results.push(doc.data())
    });
    setData(results)
  }

  useEffect(()=>{a()},[])
  return (
    <>
      <Heading mb='2rem' ml='2rem'>
        Top
      </Heading>
      <Flex p='5px' justify='space-around' gap='2rem' flexWrap='wrap'>
        <TopFiveColumn data={data.slice(0, 5)} />
        <TopFiveColumn data={data.slice(5)} />
      </Flex>
    </>
  );
};

export default TopCollections;
