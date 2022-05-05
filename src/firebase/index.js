import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBic4_pFhBjEsF_ej52cN_6fLZM1P_UDAM",
  authDomain: "omeehsa.firebaseapp.com",
  projectId: "omeehsa",
  storageBucket: "omeehsa.appspot.com",
  messagingSenderId: "457423426657",
  appId: "1:457423426657:web:a0b9e42dbeae02adef4620",
  measurementId: "G-DXRFJPEK0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()

export default app