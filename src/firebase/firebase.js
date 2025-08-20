import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC4D9MXGwIaCvowbnC8_uzivMwww-4VFZc",
  authDomain: "bravo-shop-67edb.firebaseapp.com",
  projectId: "bravo-shop-67edb",
  storageBucket: "bravo-shop-67edb.firebasestorage.app",
  messagingSenderId: "735894867426",
  appId: "1:735894867426:web:4ecb176214051ee138bdbb",
  measurementId: "G-RZ5ZF2ZWFC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)