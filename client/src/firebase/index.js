import firebase from 'firebase/app';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL:process.env.REACT_APP_FIREBASE_DATABSEURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGESENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
  };
  console.log(process.env.REACT_APP_FIREBASE_APIKEY)
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage  = firebase.storage();


  export {
      storage, firebase as default
  }