import firebase from 'firebase/app';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "AIzaSyDmJ68h6hqQ_5Sg3sJobjKEZHikm5AevCk",
    authDomain: "portfolio-projects-c1193.firebaseapp.com",
    databaseURL: "https://portfolio-projects-c1193.firebaseio.com",
    projectId: "portfolio-projects-c1193",
    storageBucket: "portfolio-projects-c1193.appspot.com",
    messagingSenderId: "794731299592",
    appId: "1:794731299592:web:d12d45640d1c7d18"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage  = firebase.storage();


  export {
      storage, firebase as default
  }