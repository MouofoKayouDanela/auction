// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZR66Qq9lj11X0Dv-thnXucHNDu1R9vtw",
  authDomain: "auctions-e4346.firebaseapp.com",
  databaseURL: "https://auctions-e4346-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "auctions-e4346",
  storageBucket: "auctions-e4346.appspot.com",
  messagingSenderId: "570960280688",
  appId: "1:570960280688:web:a94b4cc57f206f227388b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase();