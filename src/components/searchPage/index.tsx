import ItemCard from "./itemCard";
import Accordions from "./accordion";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { db } from "../../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import Loader from "../loading";
import Empty from "./empty";

type TNft = {
  id: string;
  img: string;
  name: string;
  currentPrice: number;
  ownerId: string;
  isForSold:boolean;
};

const Search = () => {
	const { querys } = useParams();
	const [nfts, setNfts] = useState<TNft[]>([]);
	const [minPrice, setMinPrice] = useState<number>(-Infinity);
	const [maxPrice, setMaxPrice] = useState<number>(+Infinity);
	const [isLoading, setIsLoading] = useState<boolean>(true);


	const priceSort = (sortType: string) => {
		if (sortType === "lowToHigh") {
			setNfts((old:TNft[]) => [
				
				...old.sort((a, b) => a.currentPrice - b.currentPrice),
			]);
		} else if (sortType === "highToLow") {
			setNfts((old:TNft[]) => [
				...old.sort((a, b) => b.currentPrice - a.currentPrice),
			]);
		}
	};

	const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
		let event = Number(e.target.value);
		if (!event) {
			event = -Infinity;
		}
		setMinPrice(event);
	};

	const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
		let event = Number(e.target.value);
		if (!event) {
			event = +Infinity;
		}
		setMaxPrice(event);
	};

	const asyncronus = async () => {
		const question = query(collection(db, "nfts"), where("name", ">=", querys?.toUpperCase()));

		const querySnapshot = await getDocs(question);
		const result:TNft[] = [];
		querySnapshot.forEach((doc) => {
			const nft = doc.data();
			result.push({
				id: doc.id,
				img: nft.img,
				name: nft.name,
				currentPrice: nft.currentPrice,
				ownerId: nft.ownerId,
				isForSold:nft.isForSold,
			});
		});
		setNfts(result);
		setIsLoading(false);
	};

	useEffect(() => {
		asyncronus();
	}, []);

	useEffect(() => {
		asyncronus();
	}, [querys]);

	const filterPrice = async () => {
		await asyncronus();
		setNfts((prev) =>
			prev?.filter(
				(nft) => nft.currentPrice >= minPrice && nft.currentPrice <= maxPrice
			)
		);
	};

	return (
		<Box m='15px' minH="100vh">
			{isLoading ? (
				<Loader />
			) : (
				<Box display={["block","block","block", "flex"]} justifyContent='space-between'>
					<Flex display='flex'>
						<Accordions
							priceSort={priceSort}
							filterPrice={filterPrice}
							handleMin={handleMin}
							handleMax={handleMax}
						/>
					</Flex>

					<Flex display='flex'>
						{nfts?.length ? <ItemCard nfts={nfts} /> : <Empty />}
					</Flex>
				</Box>
			)}
		</Box>
	);
};

export default Search;
