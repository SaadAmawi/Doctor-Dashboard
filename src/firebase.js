// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWwpHslTBtBf8BpomXGIPW_WFcix_WMlU",
  authDomain: "dashboard-7c123.firebaseapp.com",
  projectId: "dashboard-7c123",
  storageBucket: "dashboard-7c123.appspot.com",
  messagingSenderId: "285554699767",
  appId: "1:285554699767:web:538764880555f7931292f2",
  measurementId: "G-78G4CGJMN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const auth = getAuth();

export {app}