import signup from "../../assets/signup.jpg";
import { Box, Text, Stack, Image, Button, Heading } from "@chakra-ui/react";

const GlobCard = () => {
  return (
    <Box>
      <Box
        maxW='200px'
        borderRadius='8px'
        overflow='hidden'
        boxShadow='0 0 24px 4px rgba(0, 0, 0, 0.15)'
      >
        <Image src={signup} w='200px' h='220px' borderRadius='5px' transition='transform .2s;' _hover={{'transform': 'scale(1.2)'}}/>
        <Stack p='3' bg='#EBF8FF'>
          <Heading fontSize='2xl'>Card</Heading>
          <Text>Name: AMD</Text>
          <Button colorScheme='messenger'>Add To Cart</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default GlobCard;
