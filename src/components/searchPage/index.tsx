import ItemCard from "./itemCard";
import Accordions from "./accordion";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { db } from "../../firebase-config.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import Loader from "../loading";
import Empty from "./empty";

type TNft = {
  id: string;
  img: string;
  name: string;
  currentPrice: number;
  ownerId: string;
};

const Search = () => {
  const { querys } = useParams();
  const [nfts, setNfts] = useState<TNft[]>();
  const [minPrice, setMinPrice] = useState<number>(-Infinity);
  const [maxPrice, setMaxPrice] = useState<number>(+Infinity);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  let copyNfts: any;

  const priceSort = (sortType: string) => {
    if (sortType === "lowToHigh") {
      setNfts((old) => [
        //@ts-ignore
        ...old?.sort((a, b) => a.currentPrice - b.currentPrice),
      ]);
    } else if (sortType === "highToLow") {
      setNfts((old) => [
        //@ts-ignore
        ...old?.sort((a, b) => b.currentPrice - a.currentPrice),
      ]);
    }
  };

  const handleMin = (e: any) => {
    let event = e.target.value;
    if (!event) {
      event = -Infinity;
    }
    setMinPrice(event);
  };

  const handleMax = (e: any) => {
    let event = e.target.value;
    if (!event) {
      event = +Infinity;
    }
    setMaxPrice(event);
  };

  const asyncronus = async () => {
    const question = query(collection(db, "nfts"), where("name", ">=", querys));

    const querySnapshot = await getDocs(question);
    //@ts-ignore
    const result = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const nft = doc.data();
      result.push({
        id: doc.id,
        img: nft.img,
        name: nft.name,
        currentPrice: nft.currentPrice,
        ownerId: nft.ownerId,
      });
    });
    //@ts-ignore
    setNfts(result);
    setIsLoading(false);
    //@ts-ignore
    console.log(result);
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
    <Box m='15px'>
      {isLoading ? (
        <Loader />
      ) : (
        <Box display={['block', 'flex']} justifyContent='space-between'>
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
