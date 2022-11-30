import {
  Box,
  Text,
  Image,
  Menu,
  Flex,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Collapse,
  SkeletonText,
} from "@chakra-ui/react";
import UserTabs from "./userTabs";
import { db } from "../../firebase-config";
import login from "../../assets/login.jpg";
import { useEffect, useState } from "react";
import signup from "../../assets/signup.jpg";
import { doc, getDoc } from "firebase/firestore";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useParams, useNavigate } from "react-router";

type TUserData = {
  balance: number;
  email: string;
  favorites: string[];
  gender: string;
  isPaymentConnected: boolean;
  paymentMethod: string;
  username: string;
  bio: string
}

const UserHeader = () => {

  const [show, setShow] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false)

  const [userData, setUserData] = useState<TUserData>({
    "paymentMethod": '',
    "favorites": [],
    "isPaymentConnected": false,
    "email": "11@mail.com",
    "balance": 0,
    "username": "user1",
    "gender": "Male",
    bio: 'asdfasd'
  })

  const { id } = useParams()
  const navigate = useNavigate()
  const handleToggle = () => setShow(!show);

  const asynch = async () => {
    const docRef = doc(db, "users", id as string);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const data = docSnap.data()
      //@ts-ignore
      setUserData(data)
      setIsLoaded(true)
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => { asynch() }, [])

  const navigateSettings = () => {
    navigate('/settings')
  }

  const navigateCreateCollection = () => {
    navigate('/create-collection')
  }

  return (
    <Box>

     <Box h='300px' bgImage={`url(${signup})`}bgPosition="center"
  bgRepeat="no-repeat" objectFit='fill' pt='150px' backgroundSize='cover'>
        {/* <Image src={signup} h='300px' w='full' position='absolute' /> */}
        <Box
          ml='40px'
          border='4px'
          borderColor='#EDF2F7'
          borderRadius='10px'
          width='max-content'
        >
          <Image
            src={login}
            w='200px'
            h='200px'
            borderRadius='5px'
            zIndex='1'
          />
        </Box>
      </Box>

      <Box ml='40px' my='20px' mt='50px'>

        <Box maxW='30%' mt='10px'>
          <Collapse startingHeight={20} in={show}>
            <SkeletonText isLoaded={isLoaded}>{userData?.bio}</SkeletonText>
          </Collapse>
          <Button size='xs' onClick={handleToggle} mt='1rem'>
            Show {show ? "Less" : "More"}
          </Button>
        </Box>

        <Flex justifyContent='space-between' alignItems='center'>
          <Text fontSize='4xl' mt='30px'>
            for example
          </Text>
        
        
        <Flex justifyContent='space-between' alignItems='center'>
         <Text fontSize='4xl' mt='30px'>
          {userData?.username}
        </Text>
          <Box mt='35px' mr='40px'>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem onClick={navigateSettings}>Settings</MenuItem>
                <MenuItem onClick={navigateCreateCollection}>Create a Collection</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
        <Box maxW='30%' mt='10px'>
          <Collapse startingHeight={20} in={show}>
            {userData?.bio}
          </Collapse>
          <Button size='xs' onClick={handleToggle} mt='1rem'>
            Show {show ? "Less" : "More"}
          </Button>
        </Box>
        <UserTabs />
      </Box>
     
    </Box >
  );
};

export default UserHeader;
