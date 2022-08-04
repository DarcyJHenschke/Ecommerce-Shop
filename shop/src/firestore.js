// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB30HLMNOyzgG7R08vaGZ_wPBGzlqlXcNo",
    authDomain: "ecommerce-shop-5b94f.firebaseapp.com",
    projectId: "ecommerce-shop-5b94f",
    storageBucket: "ecommerce-shop-5b94f.appspot.com",
    messagingSenderId: "658524457932",
    appId: "1:658524457932:web:0588ab5e61d42e0509eb69",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore();
