import React from "react";
import { Box, Flex, Image, Center } from "@chakra-ui/react";

type PropsType = {
  data: { name: string; imageUrl: string };
};

const Card = ({ data }: PropsType) => {
  console.log(2);

  return (
    <Box bg='#f4f6f3' h='250px' w='80%' borderRadius='15px' cursor='pointer'>
      <Image
        w='100%'
        height='80%'
        src={data.imageUrl}
        borderTopRadius='15px'
      ></Image>
      <Center mt='1rem'>{data.name}</Center>
    </Box>
  );
};

export default Card;
