import signup from "../../assets/signup.jpg";
import { Box, Text, Stack, Image, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../features/cartSlice";
import { AppDispatch } from "../../store/store";
import { useState } from "react";
import { getAuth } from "firebase/auth";

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
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const user = getAuth();

  const isOwner = nft.ownerId === user?.currentUser?.uid;

  console.log(isOwner);

  const handleAddClick = () => {
    setIsAddedToCart((prev) => {
      return !prev;
    });

    if (!isAddedToCart) {
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
        boxShadow='0 0 24px 4px rgba(0, 0, 0, 0.15)'
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

        <Stack p='3' bg='#EBF8FF'>
          <Text onClick={toNftPage} fontSize='2xl' noOfLines={1}>
            {nft.name}
          </Text>
          <Text>price: {nft.currentPrice}</Text>

          {isOwner ? (
            <Button
              colorScheme='messenger'
              onClick={() => navigate("/list/" + nft.id)}
            >
              List NFT
            </Button>
          ) : (
            <Button
              onClick={handleAddClick}
              colorScheme={isAddedToCart ? "red" : "messenger"}
            >
              {!isAddedToCart ? "Add To Cart" : "Remove"}
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default GlobCard;
