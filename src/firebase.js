import  firebase from "firebase";
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDhKFY1MMDjmYCP_jN9GkGmeFq0Wd3rFM4",
    authDomain: "paymentdapp.firebaseapp.com",
    projectId: "paymentdapp",
    storageBucket: "paymentdapp.appspot.com",
    messagingSenderId: "646580648864",
    appId: "1:646580648864:web:e2b37752f6c9eb243382c5"
  };


  let app;
  if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  }else{
    app=firebase.app();
  }

  const db =app.firestore();
  const auth=firebase.auth();

  export{db,auth};