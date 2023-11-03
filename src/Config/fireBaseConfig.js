// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to useimport { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL5tdG6-f72ASTA3DaYud9QLQZMAq6jZM",
  authDomain: "vite-contact-84b03.firebaseapp.com",
  projectId: "vite-contact-84b03",
  storageBucket: "vite-contact-84b03.appspot.com",
  messagingSenderId: "655185873561",
  appId: "1:655185873561:web:175fcfeb799db79ccf4608",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
