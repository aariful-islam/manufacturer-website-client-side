// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyvJ1enmlP1C_Bxj5389aEwTUszUemxIc",
  authDomain: "manufacturer-website-9bd63.firebaseapp.com",
  projectId: "manufacturer-website-9bd63",
  storageBucket: "manufacturer-website-9bd63.appspot.com",
  messagingSenderId: "884438239444",
  appId: "1:884438239444:web:41635747b8ae00a2841341"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;