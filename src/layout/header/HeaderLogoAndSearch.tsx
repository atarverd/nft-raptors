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
} from "@chakra-ui/react";
import logoImage from "../../assets/logo.png";
import { useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";

const HeaderLogoAndSearch = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const navigate = useNavigate();

  const searchItem = () => {
    if(search)
      navigate("/search/" + search);  
  };

  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <Flex align='center' ml='5rem' w='70%'>
      <Image
        cursor='pointer'
        onClick={handleHomePage}
        src={logoImage}
        borderRadius='full'
        boxSize='100px'
      />
      <Text as='b'  mr='3rem' fontSize='1.2rem'>
        raptors
      </Text>

      <InputGroup>
        <Input
          onChange={(e) => handleSearch(e)}
          placeholder='Search items, collections, and accounts'
          h='3.8rem'
          bg='#fff'
          borderRadius='15px'
        />
        <InputRightElement h='50px' w='110px' m='5px'>
          <Button onClick={searchItem} width='70px' borderRadius='12px'>
            <FaSearch />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default HeaderLogoAndSearch;
