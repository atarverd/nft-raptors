import {
  Box,
  Text,
  Stack,
  Image,
  Button,
  useColorMode,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

import { RootState } from "store/store";
import { AppDispatch } from "store/store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "features/cartSlice";

import { checkItemIsInArray } from "utils/checkItemInArray";

type TNft = {
  nft: {
    id: string;
    img: string;
    name: string;
    currentPrice: number;
    ownerId: string;
    isForSold: boolean;
  };
};

const GlobCard = ({ nft }: TNft) => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const user = getAuth();
  const { cart } = useSelector((state: RootState) => state.cart);
  console.log(nft);
  const isOwner = nft.ownerId === user?.currentUser?.uid;

  const handleAddClick = () => {
    if (!checkItemIsInArray(cart, nft.id)) {
      dispatch(addToCart(nft));
    } else {
      dispatch(deleteFromCart(nft.id));
    }
  };

  const toNftPage = () => {
    navigate("/nft/" + nft.id);
  };

  return (
    <Box>
      <Box
        maxW='200px'
        borderRadius='8px'
        overflow='hidden'
        // boxShadow='0 0 24px 4px white'
        boxShadow={
          colorMode === "dark"
            ? "0 0 24px 4px white"
            : "0 0 24px 4px rgba(0, 0, 0, 0.24)"
        }
        bg='white'
      >
        <Image
          onClick={toNftPage}
          src={nft.img}
          w={200}
          h='220px'
          borderRadius='5px'
          transition='transform .2s;'
          _hover={{ transform: "scale(1.1)" }}
        />

        <Stack p='3' bg={colorMode === "dark" ? "#071b38" : "gray.200"}>
          <Text onClick={toNftPage} fontSize='2xl' noOfLines={1}>
            {nft.name}
          </Text>
          <Text>
            price: {nft.currentPrice ? nft.currentPrice : "Not For Sold"} $
          </Text>

          {isOwner ? (
            <Button
              bg={colorMode === "dark" ? "#2051c4" : "#0078ff"}
              color='white'
              onClick={() => navigate("/list/" + nft.id)}
              _hover={{
                background:
                  colorMode === "dark" ? "messenger.800" : "messenger.600",
              }}
            >
              List NFT
            </Button>
          ) : (
            <Button
              disabled={!nft.isForSold}
              onClick={handleAddClick}
              bg={colorMode === "dark" ? "#2051c4" : "#0078ff"}
              color='white'
              _hover={{
                background:
                  colorMode === "dark" ? "messenger.800" : "messenger.600",
              }}
              colorScheme={
                checkItemIsInArray(cart, nft.id) ? "red" : "messenger"
              }
            >
              {checkItemIsInArray(cart, nft.id) ? "Remove" : "Add to Cart"}
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default GlobCard;
