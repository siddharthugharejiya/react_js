// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// const analytics = getAnalytics(app);
export const db = getFirestore(app)