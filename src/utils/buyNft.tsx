import {db} from '../firebase-config.js'
import { doc, updateDoc,getDoc } from "firebase/firestore";

type TProps={
    buyerId:string;
    sellerId:string;
    itemId:string
    price:number;
}
export const buyNft = async (buyerId:string,sellerId:string,itemId:string,price:number) => {
    let buyerName=''
    const docRef = doc(db, "users", buyerId);
    console.log(buyerId)
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
        buyerName=docSnap.data().username
        updateDoc(doc(db, "nfts", itemId as string), {
            isForSold: false,
            currentPrice: price,
            ownerId:buyerId,
            owner:buyerName
        })
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
    
}