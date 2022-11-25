// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_57x9dHlVzrsuU2UcmHvM541gmdfUEcE",
  authDomain: "nft-raptors.firebaseapp.com",
  projectId: "nft-raptors",
  storageBucket: "nft-raptors.appspot.com",
  messagingSenderId: "1077461821090",
  appId: "1:1077461821090:web:5ea8a3042e0612ccbe99fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
