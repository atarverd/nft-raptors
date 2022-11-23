import React from "react";

import NftItemPage from "../components/nftPage/NftItemPage";
import NftBasicInfo from "../components/nftPage/NftBasicInfo";
import NftAccordion from "../components/nftPage/NftAccordian";
import NftTable from "../components/nftPage/NftTable";

import { Box, Flex, Text } from "@chakra-ui/react";
import NftChart from "../components/nftPage/NftChart";

const NftPage = () => {
  return (
    <Box ml='15%' mr='15%'>
      <Flex id='nft-conainer'>
        <NftItemPage />

        <Flex id='nft-info' flexDirection='column' gap={6} mt='2' ml='20px'>
          <NftBasicInfo />

          <NftAccordion accordionName='Price Graph'>
            <NftChart/>
          </NftAccordion>

          <NftAccordion accordionName='History'>
            <NftTable />
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
