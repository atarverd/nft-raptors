import { db } from '../firebase-config';
import {
	doc,
	getDoc,
	updateDoc,
	increment,
	arrayUnion,
} from 'firebase/firestore';

type TProps = {
  sellerId: string;
  itemId: string;
  price: number;
};

export const buyNft = async (
	buyerId: string,
	cartArr: TProps[],
	fn: () => void,
	toast: any,
	navigate: any
) => {
	let buyerName = '';
	const buyerRef = doc(db, 'users', buyerId);
	const buyerSnap = await getDoc(buyerRef);

	const total = cartArr.reduce((prev, cur) => {
		prev = prev + Number(cur.price);
		return prev;
	}, 0);

	if (buyerSnap.exists() && buyerSnap.data().balance >= total) {
		updateDoc(buyerRef, { balance: increment(-total) });
		buyerName = buyerSnap.data().username;

		for await (const nft of cartArr) {
			const sellerRef = doc(db, 'users', nft.sellerId);
			const nftRef = doc(db, 'nfts', nft.itemId);

			const sellerSnap = await getDoc(sellerRef);
			const nftSnap = await getDoc(nftRef);

			if (nftSnap.exists() && sellerSnap.exists()) {
				await updateDoc(sellerRef, {
					balance: increment(nft.price - (nft.price * 2.5) / 100),
				});
				await updateDoc(doc(db, 'collections', nftSnap.data().collectionId), {
					volume: increment(nft.price),
				});
				await updateDoc(doc(db, 'nfts', nft.itemId as string), {
					isForSold: false,
					currentPrice: nft.price,
					ownerId: buyerId,
					owner: buyerName,
					priceHistory: arrayUnion({
						data: new Date(),
						prevOwner: sellerSnap.data().username,
						price: nft.price,
					}),
				}).then(() => {
					fn();
				})
					.then(() => toast({
						position: 'top-right',
						duration: 3000,
						status: 'success',
						title: 'Successfully Purchased'
					}))
					.then(() => navigate('/' + buyerId));
			}
		}
	} else {
		toast({
			position: 'top-right',
			duration: 3000,
			status: 'error',
			title: 'No Enough Funds'
		});
	}
};