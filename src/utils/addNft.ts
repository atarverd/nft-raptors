import { db } from "../firebase-config";
import { collection, doc, getDoc, addDoc } from "firebase/firestore";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";

type TChoosed = {
	collectionName: string,
	collectionId: string
}

export const addNft = async (
  name: string,
   image: File,
    description: string,
    choosedCollection: TChoosed,
    id: string, ) => {

const storage = getStorage();

  if (image) {
    const userRef = doc(db, "users", id);
    const userSnap = await getDoc(userRef);

    const imageRef = ref(storage, image.name);
    let addedImageRef = "";
    await uploadBytes(imageRef, image);
    await getDownloadURL(imageRef).then((url) => (addedImageRef = url));

    addDoc(collection(db, "nfts"), {
      name,
      currentPrice: 0,
      img: addedImageRef,
      ...choosedCollection,
      ownerId: id,
      priceHistory: [],
      description,
      isForSold: false,
      owner: userSnap?.data()?.username,
    });

  }
};
