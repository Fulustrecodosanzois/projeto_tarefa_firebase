 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
 import {getFirestore} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDq1Xf8oRSyj0V05Qi9qx8uwh1rWy01dxE",
   authDomain: "projetotarefagertar.firebaseapp.com",
   projectId: "projetotarefagertar",
   storageBucket: "projetotarefagertar.appspot.com",
   messagingSenderId: "287152429287",
   appId: "1:287152429287:web:fdaf28fb96b61bc0d96a42"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)