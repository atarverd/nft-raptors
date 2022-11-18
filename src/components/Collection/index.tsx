import GlobCard from '../globCard'
import CollectionHeader from './collectionHeader'
import {
  Box,
  Flex,
  SimpleGrid
} from '@chakra-ui/react'

const Collection = () => {
  return (
    <Box>
      <CollectionHeader />
      <Flex display='flex' justifyContent='space-around'>
        <SimpleGrid spacing='40px' columns={5} m='20px'>
          <GlobCard />
          <GlobCard />
          <GlobCard />
          <GlobCard />
          <GlobCard />
          <GlobCard />
          <GlobCard />
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default Collection