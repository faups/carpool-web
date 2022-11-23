import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA37f8BDFALhLdLDPYasUpgSsop0-UyV8Q",
  authDomain: "carpool-fullstack.firebaseapp.com",
  projectId: "carpool-fullstack",
  storageBucket: "carpool-fullstack.appspot.com",
  messagingSenderId: "289458205081",
  appId: "1:289458205081:web:007c8bdd52c52b10ebe308",
  measurementId: "G-B6KW4JECHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);