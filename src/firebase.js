import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBfWt4ElCOEmsy1OyQYGYxyCNHSz3cawkg",
  authDomain: "clone-1b306.firebaseapp.com",
  databaseURL: "https://clone-1b306.firebaseio.com",
  projectId: "clone-1b306",
  storageBucket: "clone-1b306.appspot.com",
  messagingSenderId: "137681406068",
  appId: "1:137681406068:web:9e840458ad0bf00c866921",
  measurementId: "G-ZTMNNRVWFZ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
