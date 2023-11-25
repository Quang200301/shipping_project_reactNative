// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTpWjPNBKUPaP1xPO5vjTnhDOuR8RnlpI",
  authDomain: "fir-reactnative-d5d43.firebaseapp.com",
  projectId: "fir-reactnative-d5d43",
  storageBucket: "fir-reactnative-d5d43.appspot.com",
  messagingSenderId: "193100277706",
  appId: "1:193100277706:web:ac465177ab6132c19f1133",
  measurementId: "G-FKSPHB7PY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);