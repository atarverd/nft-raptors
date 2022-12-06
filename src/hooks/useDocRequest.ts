import { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const useDocRequest = (itemName: string, id: string, setData: (value: any) => void) => {

  const [isLoaded, setIsLoaded] = useState(false);

  const a = async () => {
    const snap = await getDoc(doc(db, itemName, id as string));

    if (snap.exists()) {
      const data: any = snap.data();
      data.id = snap.id;
      setData(data);
      setIsLoaded(true);
    } else {
      console.log("No such document");
    }
  };
  useEffect(() => {
		a();
	}, []);
  return isLoaded;
};

export default useDocRequest;