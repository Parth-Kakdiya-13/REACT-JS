// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKIc84C7547g5JWelVHLcq5AjuUfSH2_w",
    authDomain: "portfolio-c016e.firebaseapp.com",
    projectId: "portfolio-c016e",
    storageBucket: "portfolio-c016e.appspot.com",
    messagingSenderId: "784396574499",
    appId: "1:784396574499:web:07eb6dc6a79b3f279db696",
    databaseURL: "https://portfolio-c016e-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);