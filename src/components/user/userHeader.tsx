
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
} from "@chakra-ui/react";
import UserTabs from "./userTabs";
import login from "../../assets/login.jpg";
import { ChevronDownIcon } from '@chakra-ui/icons'
import signup from "../../assets/signup.jpg";
import { db } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

type TUserData={
  balance:number;
  email:string;
  favorites:string[];
  gender:string;
  isPaymentConnected:boolean;
  paymentMethod:string;
  username:string;
  bio:string
}

const UserHeader = () => {
    const [show, setShow] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false)

    const [userData,setUserData]=useState<TUserData>({
      
        "paymentMethod": '',
        "favorites": [],
        "isPaymentConnected": false,
        "email": "11@mail.com",
        "balance": 0,
        "username": "user1",
        "gender": "Male",
        bio:'asdfasd'
    })
    const {id} = useParams()


    const handleToggle = () => setShow(!show);

    const asynch= async () => {
      const docRef = doc(db, "users", id as string);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const data= docSnap.data()
        //@ts-ignore
        setUserData(data)
        setIsLoaded(true)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      
    }
    useEffect(()=>{asynch()},[])

  return (
    <Box>

      <Box h='300px'>
        <Image src={signup} h='300px' w='full' position='absolute' />
        <Box
          ml='40px'
          border='4px'
          borderColor='#EDF2F7'
          borderRadius='10px'
          top='27%'
          position='absolute'
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
        <Text fontSize='4xl' mt='30px'>
          {userData?.username}
        </Text>
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
          <Box mt='35px' mr='40px'>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Create a Collection</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
        <UserTabs />
      </Box>


    </Box >
  );
};

export default UserHeader;
