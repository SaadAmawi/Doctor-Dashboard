import { initializeApp, getApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  apiKey: "AIzaSyA8TdYBwGFy-Wkxn2tTH1OljuIlzipqoUU",
  authDomain: "sada-54c48.firebaseapp.com",
  databaseURL: "https://sada-54c48-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sada-54c48",
  storageBucket: "sada-54c48.appspot.com",
  messagingSenderId: "199900235380",
  appId: "1:199900235380:web:f1352a9a6bd1c48e103321",
  measurementId: "G-VZGYTYCWD6"
};

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
//   const app = initializeApp(firebaseConfig);


const database = getDatabase(app);

export default app;