import { db } from '../firebase-config';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage';


type TUpdate = {
  bio?: string;
  userLogo?: string;
  userBackground?: string;
}

export const updateUser = async (
	id: string,
	userLogo?: File,
	userBackground?: File,
	bio?: string) => {

	const storage = getStorage();

	const updatedProps = async () => {
		const result: TUpdate = {};
		if (userLogo) {
			result.userLogo = await addImage(userLogo);
		}
		if (userBackground) {
			result.userBackground = await addImage(userBackground);
		}
		if (bio) {
			result.bio = bio;
		}
		return result;
	};

	const addImage = async (img: File) => {
		const imageRef = ref(storage, img?.name);
		let addedImageRef = '';
		await uploadBytes(imageRef, img);
		await getDownloadURL(imageRef)
			.then(url => addedImageRef = url);
		return addedImageRef;
	};

	const updateObj = await updatedProps();
	updateDoc(doc(db, 'users', id as string), updateObj);
}; 