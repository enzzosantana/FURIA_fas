// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Ps3QeegEqTmPPLJYKRWgvXDwRWos8JE",
  authDomain: "furia-back.firebaseapp.com",
  projectId: "furia-back",
  storageBucket: "furia-back.firebasestorage.app",
  messagingSenderId: "880800345944",
  appId: "1:880800345944:web:52e012a7ac55373b863f2d",
  measurementId: "G-Z7Q2D7500J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);
const storage = getStorage(app);

export { database, storage };