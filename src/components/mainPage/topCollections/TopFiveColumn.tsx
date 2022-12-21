import {
  Tr,
  Th,
  Td,
  Text,
  Table,
  Thead,
  Tbody,
  Avatar,
  HStack,
  TableContainer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { formatter } from "utils/formatValue";
import { TCollection } from "types/collection.types";

type TProps = {
  data: TCollection[];
  from: number;
};

const TopFiveColumn = ({ data, from }: TProps) => {
  const navigate = useNavigate();

  return (
    <TableContainer
      w={["", "70%", "45%"]}
      sx={{ "::-webkit-scrollbar": { display: "none" } }}
    >
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Collection</Th>
            <Th>Creator</Th>
            <Th isNumeric>Volume</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((collection: TCollection, i) => {
            return (
              <Tr cursor='pointer' key={i}>
                <Td onClick={() => navigate("/collection/" + collection.id)}>
                  <HStack spacing='1rem'>
                    <Text>{from + i}</Text>
                    <Avatar src={collection.logo} />
                    <Text
                      ml='2.2rem'
                      fontSize='15px'
                      //   maxW='200px'
                      //   noOfLines={1}
                    >
                      {collection.collectionName}
                    </Text>
                  </HStack>
                </Td>
                <Td onClick={() => navigate("/" + collection.creatorId)}>
                  by {collection.creator}
                </Td>
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
