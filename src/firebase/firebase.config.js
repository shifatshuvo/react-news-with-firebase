// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuyyvbpqkeJTb77jjNYZw6IsyTPnF64S0",
  authDomain: "react-dragon-new-auth.firebaseapp.com",
  projectId: "react-dragon-new-auth",
  storageBucket: "react-dragon-new-auth.appspot.com",
  messagingSenderId: "328443682614",
  appId: "1:328443682614:web:1b4232f6454f90f2eb1d97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;