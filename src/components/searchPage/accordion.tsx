import {
  Box,
  Flex,
  Text,
  Stack,
  Input,
  VStack,
  Button,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
} from '@chakra-ui/react'

// const propType = {
//   filterPrice: () => void
// }

const Accordions = ({ filterPrice, handleMin, handleMax }: any) => {
  return (
    <Box>

      <Accordion allowToggle defaultIndex={[0]} allowMultiple>

        <AccordionItem w='370px'>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              <Text fontSize='2xl'>Price</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Flex justifyContent='space-evenly' alignItems='center'>
              <Input w='90px' h='40px' placeholder='Min' onChange={handleMin}></Input>
              <Text>To</Text>
              <Input w='90px' h='40px' placeholder='Max' onChange={handleMax}></Input>
            </Flex>
            <Flex justifyContent='center' alignItems='center'>
              <Box mt='20px'>
                <Button
                  w='270px'
                  h='40px'
                  colorScheme='messenger'
                  onClick={filterPrice} >Apply</Button>
              </Box>
            </Flex>
          </AccordionPanel>
        </AccordionItem>

      </Accordion>

      <Accordion allowToggle defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              <Text fontSize='2xl'>Sort By</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Flex display='flex' flexDirection='column' justifyContent='center'>
              <VStack spacing={4}>
                <Button w='270px' h='40px' colorScheme='messenger'>Recently Created</Button>
                <Button w='270px' h='40px' colorScheme='messenger'>Price Low To High</Button>
                <Button w='270px' h='40px' colorScheme='messenger'>Price High To Low</Button>
                <Button w='270px' h='40px' colorScheme='messenger'>Oldest</Button>
              </VStack>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion allowToggle defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              <Text fontSize='2xl'>Category</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Flex display='flex' flexDirection='column'>
              <Stack spacing='10px'>
                <Checkbox size='lg' colorScheme='blue' pl='40px'>
                  Surrealism
                </Checkbox>
                <Checkbox size='lg' colorScheme='blue' pl='40px'>
                  Fantasy
                </Checkbox>
                <Checkbox size='lg' colorScheme='blue' pl='40px'>
                  Stranger
                </Checkbox>
              </Stack>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

    </Box>
  )
}

export default Accordions