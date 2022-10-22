import "../styles/globals.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

function MyApp({ Component, pageProps }) {
  const firebaseConfig = {
    apiKey: "AIzaSyA37f8BDFALhLdLDPYasUpgSsop0-UyV8Q",
    authDomain: "carpool-fullstack.firebaseapp.com",
    projectId: "carpool-fullstack",
    storageBucket: "carpool-fullstack.appspot.com",
    messagingSenderId: "289458205081",
    appId: "1:289458205081:web:007c8bdd52c52b10ebe308",
    measurementId: "G-B6KW4JECHV",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const querySnapshot = getDocs(collection(db, "users")).then((result) => {
    result.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });

  return <Component {...pageProps} />;
}

export default MyApp;
