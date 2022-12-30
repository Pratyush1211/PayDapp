import  firebase from "firebase";

import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDPnt29v8uMZsLk9fDNMX3ZyWwLHabnk4k",
    authDomain: "paydapp-69267.firebaseapp.com",
    projectId: "paydapp-69267",
    storageBucket: "paydapp-69267.appspot.com",
    messagingSenderId: "583230866768",
    appId: "1:583230866768:web:2eb2c263a837da375b5855",
    measurementId: "G-LLF4FD73K6"
  };

  
  let app;
  if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  }else{
    app=firebase.app();
  }

  const db =app.firestore();
  const auth= firebase.auth();

  export{db,auth};