// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDkiLNKLJpDmWkvEbFjrJoNkY9sJtx6IE",
  authDomain: "tripmate-aa660.firebaseapp.com",
  projectId: "tripmate-aa660",
  storageBucket: "tripmate-aa660.appspot.com",
  messagingSenderId: "905005121184",
  appId: "1:905005121184:web:8fc73ae5d0f4133d3a53c5"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export {app};