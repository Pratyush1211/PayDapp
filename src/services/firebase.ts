import  firebase from "firebase";

import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
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
