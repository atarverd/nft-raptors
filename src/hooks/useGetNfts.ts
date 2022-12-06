import { TNft } from "../types/nft.types";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useState, useEffect } from 'react';

const useGetNfts = (filter: string, id: string) => {

  const [nfts, setNfts] = useState<TNft[]>();
  const [isLoaded, setIsLoaded] = useState(false);

  const asyncronusNft = async () => {
		const q = query(
			collection(db, 'nfts'),
			where(filter, '==', id)
		);
      
		const querySnapshot = await getDocs(q);
		const result: TNft[] = [];
		querySnapshot.forEach((doc) => {
			const nft = doc.data();
     nft.id = doc.id;
     //@ts-ignore
			result.push(nft);
      
		});
		setNfts(result);
    setIsLoaded(true);
	};

	useEffect(() => {
		asyncronusNft();
	}, []);

  return {nfts, isLoaded};
};

export default useGetNfts;