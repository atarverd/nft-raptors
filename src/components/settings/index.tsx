import {
  Box,
  Flex,
} from '@chakra-ui/react'
import Body from './body'

const Settings = () => {

  return (
    <Flex display='flex' justifyContent='center'>
      <Box maxW='600px' mb='30px'>
        <Body />
      </Box>
    </Flex>
  )
}


export default Settings;