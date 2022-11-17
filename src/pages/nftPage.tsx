import React, { useEffect, useState } from "react";

import NftItemPage from "../components/nftPage/NftItemPage";
import NftBasicInfo from "../components/nftPage/NftBasicInfo";
import NftAccordion from "../components/nftPage/NftAccordian";
import NftTable from "../components/nftPage/NftTable";

import { Box, Flex, Text } from "@chakra-ui/react";
import NftChart from "../components/nftPage/NftChart";
import { type } from "@testing-library/user-event/dist/types/setup/directApi";

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
  isForSold: Boolean;
  name: string;
  owner: string;
  picture: string;
  favorite: number;
  priceHistory: THistory[];
};

const NftPage = () => {
  const [nftInfo, setNftInfo] = useState<TNft>({
    collectionId: "string",
    collectionName: "string",
    currentPrice: 1000,
    id: "1",
    isForSold: false,
    name: "string",
    owner: "string",
    picture: "string",
    favorite: 1,
    priceHistory: [{ price: 100, prevOwner: "Gagp", date: "Nov 1" }],
  });
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch("https://6374fb9208104a9c5f8f398c.mockapi.io/nftItem/1")
      .then((res) => res.json())
      .then((data) => setNftInfo(data));
  }, []);

  console.log(nftInfo);
  return (
    <Box ml='15%' mr='15%'>
      <Flex id='nft-conainer'>
        <NftItemPage />

        <Flex id='nft-info' flexDirection='column' gap={6} mt='2' ml='20px'>
          <NftBasicInfo
            collectionId={nftInfo.collectionId}
            collectionName={nftInfo.collectionName}
            name={nftInfo.name}
            favorite={nftInfo.favorite}
            currentPrice={nftInfo.currentPrice}
            owner={nftInfo.owner}
          />

          <NftAccordion accordionName='Price Graph'>
            <NftChart priceHistory={nftInfo.priceHistory} />
          </NftAccordion>

          <NftAccordion accordionName='History'>
            <NftTable priceHistory={nftInfo.priceHistory} />
          </NftAccordion>
        </Flex>
      </Flex>

      <NftAccordion accordionName='More From This Collection'>
        <div>Her should be similar categories</div>
      </NftAccordion>
    </Box>
  );
};

export default NftPage;
