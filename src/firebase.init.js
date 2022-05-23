// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_Mz_Iw5__XHMtrfpTprMSODRZRXQrii8",
  authDomain: "market-your-business.firebaseapp.com",
  projectId: "market-your-business",
  storageBucket: "market-your-business.appspot.com",
  messagingSenderId: "1046093590812",
  appId: "1:1046093590812:web:61747dc310d585187b8ad9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;