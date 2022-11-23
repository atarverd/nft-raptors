import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import TopFiveColumn from "./TopFiveColumn";
import { data } from "../../../topCollectionsData";

const TopCollections = () => {
  return (
    <>
      <Heading mb='2rem' ml='2rem'>
        Top
      </Heading>
      <Flex p='5px' justify='space-around'>
        <TopFiveColumn data={data.slice(0, 5)} />
        <TopFiveColumn data={data.slice(5)} />
      </Flex>
    </>
  );
};

export default TopCollections;
