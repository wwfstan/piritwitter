import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDoNaX-RA4VrTWBYEU3Ry1e__k251_z8eg",
    authDomain: "piritwitter.firebaseapp.com",
    projectId: "piritwitter",
    storageBucket: "piritwitter.appspot.com",
    messagingSenderId: "770244438515",
    appId: "1:770244438515:web:8f4f8c7834174050070a86"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);