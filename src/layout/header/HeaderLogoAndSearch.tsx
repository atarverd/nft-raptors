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
import logoImage from "../../assets/logo.svg";
import { useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";

const HeaderLogoAndSearch = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const navigate = useNavigate();

  const searchItem = () => {
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
        boxSize='40px'
      />
      <Text as='b' ml='0.6rem' mr='3rem' fontSize='1.2rem'>
        OpenSea
      </Text>

      <InputGroup>
        <Input
          onChange={(e) => handleSearch(e)}
          placeholder='Search items, collections, and accounts'
          h='2.8rem'
          bg='#fff'
          borderRadius='15px'
        />
        <InputRightElement h='45px' w='90px' mr='-3px'>
          <Button onClick={searchItem} width='70px' borderRadius='12px'>
            <FaSearch />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default HeaderLogoAndSearch;
