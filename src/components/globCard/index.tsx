import signup from "../../assets/signup.jpg";
import { Box, Text, Stack, Image, Button, Heading, useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../features/cartSlice";
import { AppDispatch } from "../../store/store";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { RootState } from "../../store/store";
import { checkItemIsInArray } from "../../utils/checkItemInArray";

type TNft = {
  nft: {
    id: string;
    img: string;
    name: string;
    currentPrice: number;
    ownerId: string;
  };
};

const GlobCard = ({ nft }: TNft) => {

  const { colorMode } = useColorMode();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const user = getAuth();
  const { cart } = useSelector((state: RootState) => state.cart);

  const isOwner = nft.ownerId === user?.currentUser?.uid;

  const handleAddClick = () => {
    if (!checkItemIsInArray(cart, nft.id)) {
      console.log(1);
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
        boxShadow={colorMode === 'dark'
          ? '0 0 24px 4px white'
          : '0 0 24px 4px rgba(0, 0, 0, 0.15)'}
        bg='white'
      >
        <Image
          onClick={toNftPage}
          src={nft.img}
          w={[100, 150, 200]}
          h='220px'
          borderRadius='5px'
          transition='transform .2s;'
          _hover={{ transform: "scale(1.1)" }}
        />

        <Stack p='3' bg={colorMode === 'dark' ? '#071b38' : 'gray.200'}>
          <Text onClick={toNftPage} fontSize='2xl' noOfLines={1}>
            {nft.name}
          </Text>
          <Text>price: {nft.currentPrice}</Text>
          <Button
            onClick={() => dispatch(addToCart(nft))}
            bg={colorMode === 'dark' ? '#2051c4' : '#0078ff'}
            color='white'
          >
            Add To Cart
          </Button>

          {isOwner ? (
            <Button
              bg={colorMode === 'dark' ? '#2051c4' : '#0078ff'}
            color='white'
              onClick={() => navigate("/list/" + nft.id)}
            >
              List NFT
            </Button>
          ) : (
            <Button
              onClick={handleAddClick}
              bg={colorMode === 'dark' ? '#2051c4' : '#0078ff'}
              color='white'
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
