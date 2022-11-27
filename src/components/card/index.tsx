import React from "react";
import { Flex, Image, Center, Text } from "@chakra-ui/react";

type PropsType = {
  data: { name: string; imageUrl: string };
};

const Card = ({ data }: PropsType) => {

  return (
    <Flex
      bg='#f4f6f3'
      // h='250px'
      borderRadius='15px'
      cursor='pointer'
      flexDirection='column'
      transition='transform .2s;'
        _hover={{ transform: "scale(1.1)" }}
    >
      <Image
        w='100%'
        src={data.imageUrl}
        borderTopRadius='15px'
        
      ></Image>
      <Center m='1rem'>
        <Text>
          {data.name}
        </Text>
      </Center>
    </Flex>
  );
};

export default Card;
