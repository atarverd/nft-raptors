import React from "react";

import NftItemPage from "../components/nftPage/NftItemPage";
import NftBasicInfo from "../components/nftPage/NftBasicInfo";
import NftAccordion from "../components/nftPage/NftAccordian";
import NftTable from "../components/nftPage/NftTable";

import { Box, Flex, Text, Link } from "@chakra-ui/react";

const NftPage = () => {
  return (
    <Box ml='15%' mr='15%'>
      <Flex id='nft-conainer'>
        <NftItemPage />

        <Flex id='nft-info' flexDirection='column' gap={6} mt='2' ml='20px'>
          <NftBasicInfo />

          <NftAccordion accordionName='Price Graph'>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.'
            </Text>
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
