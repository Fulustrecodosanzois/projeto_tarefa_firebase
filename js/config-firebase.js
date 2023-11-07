// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnZfH09-PTXGv6jzIPzpGQQ4wgIL0aiEA",
  authDomain: "teste-3691b.firebaseapp.com",
  projectId: "teste-3691b",
  storageBucket: "teste-3691b.appspot.com",
  messagingSenderId: "641991092354",
  appId: "1:641991092354:web:643a6cc41694e5d95bec9b",
  measurementId: "G-XW23JQZK0J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)