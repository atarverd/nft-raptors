import { useState } from "react";
import {
  Box,
  Flex,
  Input,
  Image,
  VStack,
  Button,
  Avatar,
  HStack,
  AvatarBadge,
} from "@chakra-ui/react";

//@ts-ignore
const UploadImage = ({ size, h, w,handleLogoImage}) => {

  const [selectedFile, setSelectedFile] = useState();


  const onChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0){
      
      setSelectedFile(e.target.files[0]);
      handleLogoImage(e.target.files[0])
    }
    console.log(e.target.files[0])
  };


  const removeSelectedFile = () => {
    //@ts-ignore
    setSelectedFile();
  };

  return (

    <Box >
      <VStack spacing="2rem">

        {!size ?
          selectedFile &&
          <Image
            w={w}
            h={h}
            src={URL.createObjectURL(selectedFile)} />
          : selectedFile && (
            <Avatar
              src={URL.createObjectURL(selectedFile)}
              size={size}
            >
            </Avatar>
          )}

        <Input type="file" onChange={onChange} accept="image/*" />
        {selectedFile &&
          <HStack spacing="2rem">
            <Button colorScheme='messenger' onClick={removeSelectedFile}>
              Remove Image
            </Button>
          </HStack>}

      </VStack>
    </Box>
  );
};

export default UploadImage;