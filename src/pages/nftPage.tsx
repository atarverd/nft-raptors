import React from "react";
import { FaRegHeart } from "react-icons/fa";

import {
  Box,
  Image,
  Center,
  Flex,
  Text,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
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

const NftPage = () => {
  return (
    <Box ml='15%' mr='15%'>
      <Flex id='nft-conainer'>
        <Flex
          id='image-wrapper'
          m='10px'
          w='300px'
          h='400px'
          borderRadius='10px'
          border='1px'
          borderColor='gray'
          align='center'
          justify='center'
          pt='15px'
          flexDirection='column'
        >
          <Image
            w='100%'
            h='100%'
            borderBottomRightRadius='10px'
            borderBottomLeftRadius='10px'
            src='https://i.seadn.io/gae/7SPzkCiCzVk67hRGBPmFPg0mZc5lnLiud1mOor1dfMBSXo66Oex8kA50Iy1qsUENKDIs7BkTWkfNPU5IeZCTbcEz6XZ6lSXwUj7lEQ?auto=format&w=1920'
          />
        </Flex>

        <Flex id='nft-info' flexDirection='column' gap={6} mt='2' ml='20px'>
          <Box w='500px' h='120px'>
            <Flex flexDirection='column'>
              <Link _hover={{ textDecoration: "none" }} color='#2081e2'>
                Collection Name
              </Link>
              <Text as='b' fontSize='2xl'>
                Item Name
              </Text>
              <Text>
                Owned by &nbsp;
                <Link _hover={{ textDecoration: "none" }} color='#2081e2'>
                  Name
                </Link>
              </Text>
              <Text>
                <FaRegHeart />
              </Text>
            </Flex>
          </Box>
          <Box w='500px' h='120px' bg='#fbfdff'>
            <Text>Current Price</Text>
            <Text>$ 700 </Text>
            <Button colorScheme='messenger' w='200px' color='#fff' bg='#2081e2'>
              Add to Cart
            </Button>
          </Box>
          <Box w='500px'>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Price History
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box w='500px'>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      History
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <TableContainer>
                    <Table variant='simple'>
                      <TableCaption>
                        Imperial to metric conversion factors
                      </TableCaption>
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
                            <Link
                              color='#2081e2'
                              _hover={{ textDecoration: "none" }}
                            >
                              Higitus_Figitus
                            </Link>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
      </Flex>

      <Box mt='30px'>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  More From This Collection
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>aksdmasmdlasdmlkansdkn</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default NftPage;
