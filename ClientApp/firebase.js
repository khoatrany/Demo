// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcGgSWMaQNC7jKVeEl0_WqybmklO3xI7A",
  authDomain: "demofirebase-1d294.firebaseapp.com",
  projectId: "demofirebase-1d294",
  storageBucket: "demofirebase-1d294.firebasestorage.app",
  messagingSenderId: "319862690182",
  appId: "1:319862690182:web:62481a2c38b1234f215c07",
  measurementId: "G-RNRZKVZT44",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
