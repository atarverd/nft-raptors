import React, { useState } from "react";
import {
  Flex,
  Image,
  Text,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import logoImage from "../../assets/logo.png";
import { useNavigate } from "react-router";
import { TypeAnimation } from "react-type-animation";
import searchIcon from "../../assets/search.svg";


const HeaderLogoAndSearch = () => {
  const [search, setSearch] = useState("");
    const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const navigate = useNavigate();

  const searchItem = () => {
    if (search) navigate("/search/" + search);
  };

  const handleHomePage = () => {
    navigate('/') 
  };

  return (
    <Flex align='center' ml='4.5rem' w='70%'>
      <Image
        cursor='pointer'
        onClick={handleHomePage}
        src={logoImage}
        borderRadius='full'
        boxSize='100px'
      />
      {/*
      <Text as='b'  mr='3rem' fontSize='1.2rem'>
        raptors
      </Text> */}
      <Box w='300px'>
        <TypeAnimation
          sequence={[
            "Raptors", // Types 'One'
            1500, // Waits 1s
            "",
          ]}
          wrapper='div'
          speed={40}
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "1.2em" }}
        />
      </Box>

      <InputGroup>
        <Input
          onChange={(e) => handleSearch(e)}
          placeholder='Search items, collections, and accounts'
          h='3.8rem'
          bg='#fff'
          borderRadius='15px'
        />
        <InputRightElement h='50px' w='110px' m='5px'>
          <Button
            onClick={searchItem}
            width='50px'
            borderRadius='12px'
            bg='none'
          >
            <Image src={searchIcon} />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default HeaderLogoAndSearch;
