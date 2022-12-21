import { db } from 'firebase-config';
import { collection, addDoc, getDoc, doc } from 'firebase/firestore';
import { ref, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage';

export const addCollection=(id:string,logoImage:File, featureImage:File, bgImage:File,name:string,description:string,category:string,toast:(val:any)=>void,navigate:(val:string)=>void)=>{
    let images:any=[];
    const storage = getStorage();
	const userRef = doc(db, 'users', id as string);

    const collectionValidator = () => {
		images = [logoImage, featureImage, bgImage];
		const imgIsValid = images.every((el:File | undefined) => el !== undefined);
		if (imgIsValid && name && description && category) {
			handleSubmit();
		} else {
			toast({
				title: 'Some Fields Are Empty',
				duration: 3000,
				position: 'top-right',
				variant: 'subtle',
				status: 'error',
			});
		}
	};

    const handleSubmit = async () => {
		const urls: string[] = [];

		const a = async () => {
			for await (const img of images) {
				if (img) {
					const imageRef = ref(storage, img.name);
					await uploadBytes(imageRef, img);
					await getDownloadURL(imageRef).then((url) => {
						urls.push(url);
					});
				}
			}
		};
		await a();
		const docSnap = await getDoc(userRef);
		addDoc(collection(db, 'collections'), {
			collectionName: name,
			description,
			category,
			logo: urls[0],
			feature: urls[1],
			background: urls[2],
			creator: docSnap?.data()?.username,
			creatorId: id,
			date: new Date(),
			volume: 0,
		}).then(docRef => navigate('/collection/' + docRef.id))
			.then(() =>
				toast({
					title: 'Successfully Created',
					duration: 3000,
					position: 'top-right',
					status: 'success',
				})
			);
	};

	collectionValidator();
};
