// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCOcjqRnUvn1houR-kDHe_D2MKlB3WDfCk",
  authDomain: "react-practice-f0ed3.firebaseapp.com",
  projectId: "react-practice-f0ed3",
  storageBucket: "react-practice-f0ed3.appspot.com",
  messagingSenderId: "133604329044",
  appId: "1:133604329044:web:2f812ce1a472fa208b8fc1",
  measurementId: "G-SCL5W8B7VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

// Google Authentication Function
export const googleauth = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      // Successful sign-in
      console.log("User Info: ", result.user);
    })
    .catch((error) => {
      // Handle errors
      console.error("Error during Google sign-in: ", error);
    });
};



export const db = getFirestore(app);
