import firebase from 'firebase/app';
import 'firebase/storage';
import * as keys from '../keys';
console.log(keys.FIREBASE_APIKEY)
var firebaseConfig = {
    apiKey: keys.FIREBASE_APIKEY,
    authDomain: keys.FIREBASE_AUTHDOMAIN,
    databaseURL:keys.FIREBASE_DATABSEURL,
    projectId: keys.FIREBASE_PROJECTID,
    storageBucket: keys.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: keys.FIREBASE_MESSAGESENDERID,
    appId: keys.FIREBASE_APPID
  };
  console.log(process.env.FIREBASE_APIKEY)

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage  = firebase.storage();


  export {
      storage, firebase as default
  }