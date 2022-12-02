import { useRef, useState } from 'react'
import {
  Input,
  Modal,
  Image,
  Button,
  HStack,
  PinInput,
  FormLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormControl,
  ModalContent,
  ModalOverlay,
  useColorMode,
  PinInputField,
  useDisclosure,
  ModalCloseButton,
} from '@chakra-ui/react'
import walletDark from "../../assets/walletWhite.png";
import walletLight from "../../assets/wallet.png";


const CardModal = () => {

  const handleNameChange = (e: any) => setNameinput(e.target.value);

  const [nameInput, setNameinput] = useState('')

  const isNameError = nameInput === ''

  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  //@ts-ignore
  const mapped = [...Array(16)?.keys()]


  return (
    <>
      <Image
        onClick={onOpen}
        src={colorMode === "light" ? walletLight : walletDark}
        boxSize='35px'
      />

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Attach Your Card</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired={isNameError}>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder='Type your name please'
                onChange={handleNameChange} />
            </FormControl>

            <FormControl mt='20px'>
              <FormLabel>Card Number</FormLabel>
              <HStack mt='10px'>
                <PinInput type='alphanumeric'>
                  {mapped.map(pin => <PinInputField h='40px' w='full' />)}
                </PinInput>
              </HStack>
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CardModal