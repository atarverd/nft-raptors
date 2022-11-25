import React from "react";
import { Flex, Image, Center } from "@chakra-ui/react";

type PropsType = {
  data: { name: string; imageUrl: string };
};

const Card = ({ data }: PropsType) => {
  console.log(2);

  return (
    <Flex
      bg='#f4f6f3'
      h='250px'
      borderRadius='15px'
      cursor='pointer'
      flexDirection='column'
    >
      <Image
        w='100%'
        src={data.imageUrl}
        borderTopRadius='15px'
        transition='transform .2s;'
        _hover={{ transform: "scale(1.1)" }}
      ></Image>
      <Center mt='1rem'>{data.name}</Center>
    </Flex>
  );
};

export default Card;
