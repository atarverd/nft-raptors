import React, { useEffect } from "react";
import { data } from "../../../topCollectionsData";
import { collectionObjFrame } from "../../../topCollectionsData";

import {
  Box,
  Flex,
  Text,
  Avatar,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
} from "@chakra-ui/react";

type PropsType = {
  data: collectionObjFrame[];
};

const TopFiveColumn = ({ data }: PropsType) => {
  return (
    <TableContainer w='50%'>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Collection</Th>
            <Th>Floor Price</Th>
            <Th isNumeric>Volume</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((collection) => {
            return (
              <Tr cursor='pointer'>
                <Td>
                  <HStack spacing='2rem'>
                    <Text>{collection.rank}</Text>
                    <Avatar src={collection.imageURL} />
                    <Text ml='2.2rem'>{collection.collectionName}</Text>
                  </HStack>
                </Td>
                <Td>{collection.floorPrice}</Td>
                <Td isNumeric>{collection.volume}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TopFiveColumn;
