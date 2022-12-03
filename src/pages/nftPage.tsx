import Loader from "../components/loading";
import { db } from "../firebase-config.js";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Box, Center, Flex } from "@chakra-ui/react";
import NftTable from "../components/nftPage/NftTable";
import NftChart from "../components/nftPage/NftChart";
import NftItemPage from "../components/nftPage/NftItemPage";
import NftBasicInfo from "../components/nftPage/NftBasicInfo";
import NftAccordion from "../components/nftPage/NftAccordian";

type THistory = {
  date: string;
  price: number;
  prevOwner: string;
};

type TNft = {
  collectionId: string;
  collectionName: string;
  currentPrice: number;
  id: string;
  isForSold: boolean;
  name: string;
  owner: string;
  img: string;
  favorite: number;
  priceHistory: THistory[];
  ownerId: string;
};

const NftPage = () => {
  const [nftInfo, setNftInfo] = useState<TNft>({
    collectionId: "string",
    collectionName: "string",
    currentPrice: 1,
    id: "string",
    isForSold: true,
    name: "asdf",
    owner: "asdf",
    img: "asdf",
    favorite: 1,
    priceHistory: [{ price: 1, date: "", prevOwner: "" }],
    ownerId: "string",
  });
  const [isLoading, setIsloading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    const a = async () => {
      const snap = await getDoc(doc(db, "nfts", id as string));

      if (snap.exists()) {
        console.log(snap.data());
        //@ts-ignore
        setNftInfo(snap.data());
        setIsloading(false);
      } else {
        console.log("No such document");
      }
    };
    a();
  }, []);

  console.log(nftInfo);

  if (isLoading) return <Loader></Loader>;

  return (
    <Box ml='20%' mr='20%' mt='2%'>
      <Center>
        <Flex id='nft-conainer'>
          <NftItemPage img={nftInfo.img} />

          <Flex id='nft-info' flexDirection='column' gap={6} mt='2' ml='5%'>
            <NftBasicInfo
              collectionId={nftInfo.collectionId}
              collectionName={nftInfo.collectionName}
              name={nftInfo.name}
              favorite={nftInfo.favorite}
              currentPrice={nftInfo.currentPrice}
              owner={nftInfo.owner}
              ownerId={nftInfo.ownerId}
              isForSold={nftInfo.isForSold}
              id={nftInfo.id}
              img={nftInfo.img}
            />

            <NftAccordion accordionName='Price Graph'>
              <NftChart priceHistory={nftInfo.priceHistory} />
            </NftAccordion>

            <NftAccordion accordionName='History'>
              <NftTable priceHistory={nftInfo.priceHistory} />
            </NftAccordion>
          </Flex>
        </Flex>
      </Center>

      <NftAccordion accordionName='More From This Collection'>
        <div>Her should be similar categories</div>
      </NftAccordion>
    </Box>
  );
};

export default NftPage;
