import ItemCard from "./itemCard";
import Accordions from "./accordion";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { db } from "../../firebase-config.js";
import { collection, query, where, getDocs } from "firebase/firestore";

type TNft = {
  id: string;
  img: string;
  name: string;
  currentPrice: number;
};

const Search = () => {
  const { querys } = useParams();
  const [nfts, setNfts] = useState<TNft[]>();
  const [minPrice, setMinPrice] = useState<number>(-Infinity);
  const [maxPrice, setMaxPrice] = useState<number>(+Infinity);

  let copyNfts: any;

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
        id: nft.id,
        img: nft.img,
        name: nft.name,
        currentPrice: nft.currentPrice,
      });
    });
    //@ts-ignore
    setNfts(result);
    //@ts-ignore
    copyNfts = result;
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
      <Flex display='flex' justifyContent='space-around'>
        <Box>
          <Flex display='flex'>
            <Accordions
              filterPrice={filterPrice}
              handleMin={handleMin}
              handleMax={handleMax}
            />
          </Flex>
        </Box>

        <Box>
          <Flex display='flex'>
            <ItemCard nfts={nfts} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Search;
