import { db } from '../firebase-config.js'
import { doc, updateDoc, getDoc, arrayUnion, increment } from "firebase/firestore";

type TProps = {
    buyerId: string;
    sellerId: string;
    itemId: string
    price: number;
}
export const buyNft = async (buyerId: string, sellerId: string, itemId: string, price: number) => {
    let buyerName = ''
    const buyerRef = doc(db, "users", buyerId);
    const sellerRef = doc(db, "users", sellerId);
    const nftRef = doc(db, 'nfts', itemId)

    const buyerSnap = await getDoc(buyerRef);
    const sellerSnap = await getDoc(sellerRef);
    const nftSnap = await getDoc(nftRef);

    if (buyerSnap.exists() && sellerSnap.exists() && nftSnap.exists()) {
        updateDoc(buyerRef, { balance: increment(-price) })
        updateDoc(sellerRef, { balance: increment(price - price * 2.5 / 100) })
        updateDoc(doc(db, 'collections', nftSnap.data().collectionId), { volume: increment(price) })

        buyerName = buyerSnap.data().username
        updateDoc(doc(db, "nfts", itemId as string), {
            isForSold: false,
            currentPrice: price,
            ownerId: buyerId,
            owner: buyerName,
            priceHistory: arrayUnion({
                data: new Date(),
                prevOwner: sellerSnap.data().username,
                price: price
            })
        })
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }

}