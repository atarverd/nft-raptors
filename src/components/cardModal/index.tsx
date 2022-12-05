import { useRef, useState, useEffect } from 'react';
import {
  Modal,
  Image,
  Input,
  Button,
  HStack,
  useToast,
  PinInput,
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
import { useNavigate } from 'react-router';
import { db } from '../../firebase-config';
import walletLight from '../../assets/wallet.png';
import walletDark from '../../assets/walletWhite.png';
import { updateDoc, doc, getDoc, increment } from 'firebase/firestore';



const CardModal = () => {

  const user = getAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const id = user?.currentUser?.uid;
  const { colorMode } = useColorMode();
  const [ammount, setAmmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  //@ts-ignore
  const mapped = [...Array(16).keys()];


  const handleSave = async () => {
    if (id) {
      const userRef = doc(db, 'users', id);

      if (isConnected && ammount) {
        await updateDoc(userRef, {
          balance: increment(Number(ammount))
        }).then(() => onClose())
          .then(() => toast({
            status: 'success',
            duration: 3000,
            position: 'top-right',
            title: 'Balance Updated'
          }))
          .then(() => navigate('/' + id))
          .catch(() => toast({
            status: 'error',
            position: 'top-right',
            duration: 3000,
            title: 'Something Went Wrong'
          }));

      } else if (cardNumber.length === 16) {
        await updateDoc(userRef, {
          isPaymentConnected: true
        });
        setIsConnected(true);
      }
    }
  };

  const isAttachedCard = async () => {
    const userRef = doc(db, 'users', id as string);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      setIsConnected(userSnap.data().isPaymentConnected);

    }
  };


  useEffect(() => {
    isAttachedCard();
  }, []);

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
              onClick={handleSave}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardModal;