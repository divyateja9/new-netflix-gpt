// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC6GpvEgZVIlxGaGDTSQMsn4U-uJJcLg0",
  authDomain: "netflixgpt-2aadb.firebaseapp.com",
  projectId: "netflixgpt-2aadb",
  storageBucket: "netflixgpt-2aadb.firebasestorage.app",
  messagingSenderId: "567036736886",
  appId: "1:567036736886:web:e72cb8af1d48293bcc3657",
  measurementId: "G-3J9WL73P2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);