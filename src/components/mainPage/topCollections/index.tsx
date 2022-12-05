import { useEffect, useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import TopFiveColumn from "./TopFiveColumn";
import { db } from "../../../firebase-config";
import { query, orderBy,limit,collection, getDocs } from "firebase/firestore";  
import { TCollection } from "../../../types/collection.types";

const TopCollections = () => {
	const [data,setData]=useState<TCollection[]>([]);

	const topCol =async () => {
		const q = query(collection(db,"collections"),orderBy("volume","desc"),  limit(10));
		const topSnapshot = await getDocs(q);
		const results:TCollection[]=[];
		topSnapshot.forEach((col) => {
			//@ts-ignore
			results.push(col.data());
		});
		setData(results);
	};

	useEffect(()=>{
		topCol();
	},[]);
	return (
		<>
			<Heading mb='2rem' ml='2rem'>
        Top
			</Heading>
			<Flex p='5px' justify='space-around' gap='2rem' flexWrap='wrap' h={["900px","450px"]}>
				<TopFiveColumn data={data.slice(0, 5)} from={1} />
				<TopFiveColumn data={data.slice(5)}  from={6}/>
			</Flex>
		</>
	);
};

export default TopCollections;
