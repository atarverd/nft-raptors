import { db } from 'firebase-config';
import { useState,useEffect } from 'react';
import { useToast } from '@chakra-ui/toast';
import { useNavigate } from 'react-router-dom';
import { updateDoc, doc, getDoc, increment } from 'firebase/firestore';

export const useIsAttached = (id:string,ammount:string,onClose:()=>void,cardNumber:string)=>{

    const [isConnected, setIsConnected] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const checkCard = async () => {
        const userRef = doc(db, 'users', id as string);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
        setIsConnected(userSnap.data().isPaymentConnected);

        }
    };

    useEffect(() => {
        checkCard();
    }, []);
    const handleSave = async () => {
        if (id) {
          const userRef = doc(db, 'users', id);
    
          if (isConnected && ammount) {
            await updateDoc(userRef, {
              balance: increment(Number(ammount))
            }).then(() => onClose())
              .then(() => toast({
                status: 'success',
                duration: 3000,
                position: 'top-right',
                title: 'Balance Updated'
              }))
              .then(() => navigate('/' + id))
              .catch(() => toast({
                status: 'error',
                position: 'top-right',
                duration: 3000,
                title: 'Something Went Wrong'
              }));
    
          } else if (cardNumber.length === 16) {
            await updateDoc(userRef, {
              isPaymentConnected: true
            });
            setIsConnected(true);
          }
        }
      };

    return {isConnected,handleSave};
};