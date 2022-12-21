import { useNavigate } from "react-router-dom";

import {
  Box,
  Text,
  Stack,
  Image,
  Button,
  useColorMode,
} from "@chakra-ui/react";

import { db } from "firebase-config";
import { getAuth } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";

import { TCollection } from "types/collection.types";

type TNft = {
  collection: TCollection;
  asyncronusCollection?: () => void;
};

const CollectionCard = ({ collection, asyncronusCollection }: TNft) => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const user = getAuth();

  const isOwner = collection.creatorId === user?.currentUser?.uid;

  const NavigateCollectionPage = () => {
    navigate("/collection/" + collection.id);
  };

  const deleteCollecton = async () => {
    if (asyncronusCollection) {
      await deleteDoc(doc(db, "collections", collection.id)).then(() =>
        asyncronusCollection()
      );
    }
  };

  return (
    <Box>
      <Box
        borderRadius='8px'
        overflow='hidden'
        boxShadow={
          colorMode === "dark"
            ? "0 0 24px 4px white"
            : "0 0 24px 4px rgba(0, 0, 0, 0.24)"
        }
        bg='white'
        w={[200, null, 300, 350]}
      >
        <Image
          onClick={NavigateCollectionPage}
          src={collection.feature}
          w={[200, null, 300, 350]}
          h='220px'
          borderRadius='5px'
          transition='transform .2s;'
          _hover={{ transform: "scale(1.1)" }}
        />

        <Stack p='3' bg={colorMode === "dark" ? "#071b38" : "gray.200"}>
          <Text onClick={NavigateCollectionPage} fontSize='2xl' noOfLines={1}>
            {collection.collectionName}
          </Text>

          {isOwner && asyncronusCollection && (
            <Button
              bg={colorMode === "dark" ? "#2051c4" : "#0078ff"}
              color='white'
              onClick={() => deleteCollecton()}
              _hover={{ background: "red" }}
            >
              Delete Collection
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default CollectionCard;
