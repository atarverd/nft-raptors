import {
  Box,
  Flex,
  Text,
  Radio,
  Stack,
  Input,
  Button,
  Textarea,
  Accordion,
  RadioGroup,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
} from '@chakra-ui/react'


const Body = () => {
  return (
    <Box>
      <Box mt='30px'>
        <Text fontSize='2xl' mt='10px'>Name</Text>
        <Input placeholder='Item Name' mt='10px'></Input>
      </Box>

      <Box mt='30px'>
        <Text fontSize='2xl' mt='10px'>Description</Text>
        <Textarea mt='10px' placeholder='Provide detailed description of your item' />
      </Box>

      <Box mt='30px'>
        <Text fontSize='2xl' mt='10px'>Collection</Text>
        <Text mt='10px'>This is the collection where your item will apear</Text>
        <Accordion allowToggle defaultIndex={[0]} allowMultiple mt='10px'>
          <AccordionItem>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                <Text fontSize='2xl'>Select Collection</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Flex display='flex' flexDirection='column' justifyContent='center'>
                <RadioGroup defaultValue='1'>
                  <Stack spacing='15px'>
                    <Radio value='1' size='lg' colorScheme='messenger'>Music</Radio>
                    <Radio value='2' size='lg' colorScheme='messenger'>Art</Radio>
                    <Radio value='3' size='lg' colorScheme='messenger'>Sport</Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      <Box mt='30px'>
        <Flex justifyContent='center'>
          <Button colorScheme='messenger' w='200px'>Create</Button>
        </Flex>
      </Box>

    </Box>
  )
}

export default Body