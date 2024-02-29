import { initializeApp, getApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  apiKey: "AIzaSyC_MCWnKFbTY2T3wvTLtAOivlnT7hComQc",
  authDomain: "myapp-1231e.firebaseapp.com",
  databaseURL: "https://myapp-1231e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myapp-1231e",
  storageBucket: "myapp-1231e.appspot.com",
  messagingSenderId: "973416959420",
  appId: "1:973416959420:web:37b44f0f9666b6e7ce6fb9",
  measurementId: "G-07NJQNLPL8"
};

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
//   const app = initializeApp(firebaseConfig);


const database = getDatabase(app);

export default app;