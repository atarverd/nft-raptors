import { db } from 'firebase-config';
import { useState, useEffect } from 'react';
import { TCollection } from 'types/collection.types';
import { getDocs, collection, query, limit, orderBy, where } from 'firebase/firestore';


	const useCollectionRequest = (type: string, id = '') => {

    const queryType = {
      carousel: query(collection(db, 'collections'), limit(10)),
      top: query(collection(db, 'collections'), orderBy('volume','desc'), limit(10)),
      category: query(
          collection(db, 'collections'),
          where('category', '==', id as string), limit(20)
        ),
      user: query(
        collection(db, 'collections'),
        where('creatorId', '==', id as string)
      ),  
    };

    const [collectionData, setCollectionData] = useState<TCollection[]>([]);

 const getCollection = async () => {
  //@ts-ignore
  const querySnapShot = await getDocs(queryType[type]);
  const result: TCollection[] = [];
  querySnapShot.forEach((doc) => {
    const col: any = doc.data();
    col.id = doc.id;
    //@ts-ignore
    result.push(col);
  });
  setCollectionData(result);
  
};
useEffect(() => {
  getCollection();
}, []);

 return  collectionData;
};

  export default useCollectionRequest;