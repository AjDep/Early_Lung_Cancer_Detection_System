// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3iBXeoiFlzZFu1aSzn84Hjh9IkE8EWrY",
  authDomain: "hopefinder-99619.firebaseapp.com",
  projectId: "hopefinder-99619",
  storageBucket: "hopefinder-99619.appspot.com",
  messagingSenderId: "168368339927",
  appId: "1:168368339927:web:94a545e342b9e76c232992",
  measurementId: "G-HMB0P19E6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);