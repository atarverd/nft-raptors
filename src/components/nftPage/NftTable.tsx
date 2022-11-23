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

const NftTable = () => {
  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Price</Th>
            <Th>USD Price</Th>
            <Th>Previous Owner</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>0.4465 WETH</Td>
            <Td> $ 564.29</Td>
            <Td>
              <Link color='#2081e2' _hover={{ textDecoration: "none" }}>
                Higitus_Figitus
              </Link>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default NftTable;
