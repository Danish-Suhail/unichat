import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA_b_NXpmdkDOFvMlGmJsqS-cqdrcaq_sA",
    authDomain: "unichat-c74e0.firebaseapp.com",
    projectId: "unichat-c74e0",
    storageBucket: "unichat-c74e0.appspot.com",
    messagingSenderId: "984149227007",
    appId: "1:984149227007:web:d5be28e5c5ee99ca1c23ca"
  }).auth();