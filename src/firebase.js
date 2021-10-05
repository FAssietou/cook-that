// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYo-rZfdhxF4abXMOeeQ2x1gy7MMyN5XM",
  authDomain: "cook-that-75ae8.firebaseapp.com",
  projectId: "cook-that-75ae8",
  storageBucket: "cook-that-75ae8.appspot.com",
  messagingSenderId: "330954513299",
  appId: "1:330954513299:web:91e2e5256dcc6384f62666",
  measurementId: "G-F0G1LPQL8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);