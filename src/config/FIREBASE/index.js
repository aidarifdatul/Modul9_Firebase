import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyCS6vpxcyKPvzBN2B-EBujCzJujmliVuX4",
  authDomain: "noteapp-d4fbf.firebaseapp.com",
  projectId: "noteapp-d4fbf",
  storageBucket: "noteapp-d4fbf.appspot.com",
  messagingSenderId: "778279904016",
  appId: "1:778279904016:web:4ed6e7296bc5fbb322bb95"
});

const FIREBASE = firebase;

export default FIREBASE;