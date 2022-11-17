import ItemCard from './itemCard'
import Accordions from './accordion'
import {
  Box,
  Flex
} from '@chakra-ui/react'

const Search = () => {
  return (
    <Box>
      <Flex display='flex' justifyContent='space-between'>
        <Box>
          <Flex display='flex' >
            <Accordions />
          </Flex>
        </Box>

        <Box m='15px'>
          <Flex display='flex'>
            <ItemCard />
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Search