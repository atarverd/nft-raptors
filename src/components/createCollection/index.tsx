import {
  Box,
  Text,
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const CreateCollection = () => {
  return (
    <Box>
      <Text fontSize='5xl'>Create a Collection</Text>
      <Box>
        <FormControl isRequired>
          <FormLabel fontSize='3xl'>Logo Image</FormLabel>
          <Text>This image will also be used for navigation</Text>
        </FormControl>
      </Box>

      <Box></Box>

      <Box></Box>
    </Box>
  );
};

export default CreateCollection;
