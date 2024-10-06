// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByM5eqMROcLfGUU1_Rk1WbliW11Y0GWxE",
  authDomain: "oronix-ef991.firebaseapp.com",
  projectId: "oronix-ef991",
  storageBucket: "oronix-ef991.appspot.com",
  messagingSenderId: "664056348668",
  appId: "1:664056348668:web:a3269cff5014455bb1fc79",
  measurementId: "G-9P63Z9MLDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()