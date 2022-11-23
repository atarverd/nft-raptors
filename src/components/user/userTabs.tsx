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
  InputRightElement
} from '@chakra-ui/react'
import GlobCard from '../globCard'
import { FaSearch } from "react-icons/fa";


const UserTabs = () => {
  return (
    <Box>
      <Tabs size='md' variant='enclosed-colored' mt='20px'>
        <TabList>
          <Tab>Collected</Tab>
          <Tab>Created</Tab>
          <Tab>Favorited</Tab>
        </TabList>

        <InputGroup mt='30px' w='70%'>
          <Input
            placeholder='Search by name'
            h='40px'
            bg='#fff'
            borderRadius='10px'
          />
          <InputRightElement h='30px' w='50px' pt='10px'>
            <Button borderRadius='12px'>
              <FaSearch />
            </Button>
          </InputRightElement>
        </InputGroup>

        <TabPanels mt='20px'>
          <TabPanel>
            <Flex display='flex' justifyContent='space-around'>
              <SimpleGrid spacing='40px' columns={5} m='20px'>
                <GlobCard nft={{ img: 'asd', name: 'sad', currentPrice: 555 }} />
              </SimpleGrid>
            </Flex>
          </TabPanel>

          <TabPanel>
            <Flex display='flex' justifyContent='space-around'>
              <SimpleGrid spacing='40px' columns={5} m='20px'>
                <GlobCard nft={{ img: 'asd', name: 'sad', currentPrice: 555 }} />
                <GlobCard nft={{ img: 'asd', name: 'sad', currentPrice: 555 }} />
              </SimpleGrid>
            </Flex>
          </TabPanel>

          <TabPanel>
            <Flex display='flex' justifyContent='space-around'>
              <SimpleGrid spacing='40px' columns={5} m='20px'>
                <GlobCard nft={{ img: 'asd', name: 'sad', currentPrice: 555 }} />
                <GlobCard nft={{ img: 'asd', name: 'sad', currentPrice: 555 }} />
                <GlobCard nft={{ img: 'asd', name: 'sad', currentPrice: 555 }} />
              </SimpleGrid>
            </Flex>
          </TabPanel>
        </TabPanels>

      </Tabs>
    </Box>
  )
}

export default UserTabs