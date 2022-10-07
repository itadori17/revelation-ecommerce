// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUFLu-4-jl2KaUav-VvKvpfDKW0zDAqYo",
  authDomain: "revalation-386f6.firebaseapp.com",
  databaseURL: "https://revalation-386f6-default-rtdb.firebaseio.com",
  projectId: "revalation-386f6",
  storageBucket: "revalation-386f6.appspot.com",
  messagingSenderId: "1086064569736",
  appId: "1:1086064569736:web:70285148e0a6e34485de3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const storage = getStorage(app)