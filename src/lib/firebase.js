// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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