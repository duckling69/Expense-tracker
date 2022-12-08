import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyABCetpNTFMfAWm7KzUkkCkEAeNU1vlCTc",
    authDomain: "expense-calc-b26d6.firebaseapp.com",
    projectId: "expense-calc-b26d6",
    storageBucket: "expense-calc-b26d6.appspot.com",
    messagingSenderId: "599314697833",
    appId: "1:599314697833:web:cc4c053c0ff5005424dcf8",
    measurementId: "G-FJ5SJ65C7R"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()