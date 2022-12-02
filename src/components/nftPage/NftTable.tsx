import React from "react";

import {
  Link,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type THistory = {
  date: string;
  price: number;
  prevOwner: string;
};
type TProp = {
  priceHistory: THistory[];
};

const NftTable = ({ priceHistory }: TProp) => {
  const navigate = useNavigate();
  const priceHistoryCopy=priceHistory?.slice()
  const cdPrewOwner = (prevOwner: string) => {
    navigate("/" + prevOwner);
  };

  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Previous Owner</Th>
            <Th>USD Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {priceHistoryCopy?.reverse().map((item) => (
            <Tr>
              <Td>
                <Link
                  onClick={() => cdPrewOwner(item.prevOwner)}
                  color='#2081e2'
                  _hover={{ textDecoration: "none" }}
                >
                  {item.prevOwner}
                </Link>
              </Td>
              <Td>{item.price}$</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default NftTable;
