// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYFxNBYgW7kILy22BK4FIfIczpq4oBrcc",
  authDomain: "sorsho-268ba.firebaseapp.com",
  projectId: "sorsho-268ba",
  storageBucket: "sorsho-268ba.appspot.com",
  messagingSenderId: "1068565904805",
  appId: "1:1068565904805:web:1b33376d7efce2e5e8fc4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
