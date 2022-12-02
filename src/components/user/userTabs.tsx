import {
  Tab,
  Box,
  Tabs,
  Flex,
  Input,
  Button,
  TabList,
  TabPanel,
  TabPanels,
  InputGroup,
  SimpleGrid,
  InputRightElement,
} from "@chakra-ui/react";
import GlobCard from "../globCard";
import { FaSearch } from "react-icons/fa";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";

const UserTabs = () => {
  const { id } = useParams();
  const [ownedNfts, setOwnedNfts] = useState([]);
  const [search, setSearch] = useState("");

  const asyncronus = async () => {
    const q = query(
      collection(db, "nfts"),
      where("ownerId", "==", id as string)
    );

    const querySnapshot = await getDocs(q);
    let result: any = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      const nft = doc.data();
      result.push({
        id: doc.id,
        img: nft.img,
        name: nft.name,
        currentPrice: nft.currentPrice,
        ownerId: nft.ownerId,
      });
    });
    setOwnedNfts(result);
  };

  useEffect(() => {
    asyncronus();
  }, []);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <Box>
      <Tabs size='md' variant='enclosed-colored' mt='20px' ml='40px'>
        <TabList>
          <Tab>Owned</Tab>
          <Tab>Favorited</Tab>
        </TabList>

        <InputGroup mt='30px' w='70%'>
          <Input
            onChange={handleChange}
            placeholder='Search by name'
            h='40px'
            bg='#fff'
            borderRadius='10px'
          />
        </InputGroup>

        <TabPanels mt='20px'>
          <TabPanel>
            <Flex display='flex' justifyContent='space-around'>
              <SimpleGrid spacing='40px' columns={[1, 3, 5]} m='20px'>
                {ownedNfts
                  ?.filter((el: any) => el.name.includes(search))
                  .map((nft) => (
                    <GlobCard nft={nft} />
                  ))}
              </SimpleGrid>
            </Flex>
          </TabPanel>

          <TabPanel>
            <Flex display='flex' justifyContent='space-around'>
              <SimpleGrid spacing='40px' columns={5} m='20px'>
                {/* <GlobCard
                  nft={{
                    id: "asdfasd",
                    img: "asd",
                    name: "sad",
                    currentPrice: 555,
                  }} */}
                {/* /> */}
              </SimpleGrid>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default UserTabs;
