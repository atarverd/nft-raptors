import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useParams } from "react-router";
import { db } from '../firebase-config';


const ListNft = async (price: number) => {

  const { id } = useParams()
  const navigate = useNavigate()
  const toast = useToast()

  return () => updateDoc(doc(db, "nfts", id as string), {
    isForSold: true,
    currentPrice: price
  }).then(() => navigate('/nft/' + id))
    .then(() => toast({
      title: 'Nft listed successfully',
      position: 'top-right',
      status: 'success'
    }))

}

export default ListNft