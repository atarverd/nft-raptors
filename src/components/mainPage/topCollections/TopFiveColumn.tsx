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
import {formatter} from '../../../utils/formatValue'

type PropsType = {
  data: collectionObjFrame[];
  from:number
};

const TopFiveColumn = ({ data,from }: any) => {
  console.log(data)
  return (
    <TableContainer w={['', '70%', '45%']}>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Collection</Th>
            <Th>Creator</Th>
            <Th isNumeric>Volume</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((collection: any, i: number) => {
            return (
              <Tr cursor='pointer'>
                <Td>
                  <HStack spacing='2rem'>
                    <Text>{from+i}</Text>
                    <Avatar src={collection.logo} />
                    <Text ml='2.2rem'>{collection.collectionName}</Text>
                  </HStack>
                </Td>
                <Td>by {collection.creator}</Td>
                <Td isNumeric>{formatter.format(collection.volume)}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TopFiveColumn;
