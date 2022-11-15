import * as firebase from "firebase/app";
import 'firebase/firestore'
import   'firebase/auth'
import   'firebase/storage'
import   'firebase/analytics'
import   'firebase/performance'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const clientCredentials = {
    apiKey: "AIzaSyA37f8BDFALhLdLDPYasUpgSsop0-UyV8Q",
  authDomain: "carpool-fullstack.firebaseapp.com",
  projectId: "carpool-fullstack",
  storageBucket: "carpool-fullstack.appspot.com",
  messagingSenderId: "289458205081",
  appId: "1:289458205081:web:007c8bdd52c52b10ebe308",
  measurementId: "G-B6KW4JECHV"
};

 function initFirebase() {
    if (typeof window !== undefined) {
        initializeApp(clientCredentials);
        console.log("Firebase has been init successfully");
    }
}
const app = initializeApp(clientCredentials);

const db = getFirestore(app);
const querySnapshot = getDocs(collection(db, "users")).then((result) => {
    result.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });


export { initFirebase, db , querySnapshot};