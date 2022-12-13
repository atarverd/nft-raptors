import { useRef, useState, useEffect } from 'react';
import {
  Modal,
  Image,
  Input,
  Button,
  HStack,
  PinInput,
  Spinner,
  FormLabel,
  ModalBody,
  InputGroup,
  ModalFooter,
  ModalHeader,
  FormControl,
  ModalContent,
  ModalOverlay,
  useColorMode,
  PinInputField,
  useDisclosure,
  ModalCloseButton,
  InputLeftElement,
} from '@chakra-ui/react';
import { getAuth } from 'firebase/auth';
import walletLight from '../../assets/wallet.png';
import walletDark from '../../assets/walletWhite.png';
import { useIsAttached } from '../../hooks/useIsAttached';


const CardModal = () => {

  const user = getAuth();
  const id = user?.currentUser?.uid;
  const { colorMode } = useColorMode();
  const [ammount, setAmmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [isClicked,setIsClicked] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  //@ts-ignore
  const mapped = [...Array(16).keys()];

  const {isConnected,handleSave} = useIsAttached(id as string,ammount,onClose,cardNumber);

  const handleAddBalance=()=>{
    setIsClicked(true);
    setAmmount('');
    handleSave().then(()=>setIsClicked(false));
  };

  return (
    <>
      <Image
        onClick={onOpen}
        src={colorMode === 'light' ? walletLight : walletDark}
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
          <ModalHeader>{isConnected ? 'Add To Balance' :
            'Attach Your Card'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

            <FormControl mt='20px'>
              <FormLabel>{isConnected ? 'Ammount' :
                'Card Number'}</FormLabel>

              <HStack mt='10px'>{isConnected ?
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>$</InputLeftElement>
                  <Input
                    value={ammount}
                    type='number'
                    placeholder='Ammount'
                    onChange={(e) => setAmmount(e.target.value)} />
                </InputGroup> :
                <PinInput type='alphanumeric' onChange={(e) => setCardNumber(e)}>
                  {mapped.map((i) => <PinInputField h='40px' w='full' key={i} />)}
                </PinInput>}
              </HStack>

            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button
              bg={colorMode === "dark" ? "#2051c4" : "#0078ff"}
              color='white'
              _hover={{ background: colorMode === "dark" ? 'messenger.800' : 'messenger.600' }}
              mr={3}
              onClick={handleAddBalance}
              disabled={isConnected && isClicked}
              >
                {isConnected && isClicked?<Spinner/>:'Save' }
              
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardModal;
