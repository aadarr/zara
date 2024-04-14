import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
export const firebaseConfig = {
    apiKey: "AIzaSyDGKN7RUU8IpGMvi0oAS-8sadGqJd-lD2U",
    authDomain: "zara-9999.firebaseapp.com",
    databaseURL: "https://zara-9999-default-rtdb.firebaseio.com",
    projectId: "zara-9999",
    storageBucket: "zara-9999.appspot.com",
    messagingSenderId: "532676684448",
    appId: "1:532676684448:web:d5b70ba816712ceb1137c5",
    measurementId: "G-QSBCWYJE23"
  };

  const app = initializeApp(firebaseConfig);

  const fireDB = getFirestore(app);
  const auth = getAuth(app);
  
  export { fireDB, auth }