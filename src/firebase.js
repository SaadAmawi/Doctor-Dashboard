// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_MCWnKFbTY2T3wvTLtAOivlnT7hComQc",
  authDomain: "myapp-1231e.firebaseapp.com",
  databaseURL: "https://myapp-1231e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myapp-1231e",
  storageBucket: "myapp-1231e.appspot.com",
  messagingSenderId: "973416959420",
  appId: "1:973416959420:web:37b44f0f9666b6e7ce6fb9",
  measurementId: "G-07NJQNLPL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const auth = getAuth();

export {app}