
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-app-6c7a0.firebaseapp.com",
  projectId: "react-chat-app-6c7a0",
  storageBucket: "react-chat-app-6c7a0.appspot.com",
  messagingSenderId: "399991657796",
  appId: "1:399991657796:web:dbc4fe14d7ecbf436fb311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();