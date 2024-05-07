import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA0fghnXqkvVXtGsoh5kDNER8f1lBLvwe0",
    authDomain: "projeto05-2ed73.firebaseapp.com",
    projectId: "projeto05-2ed73",
    storageBucket: "projeto05-2ed73.appspot.com",
    messagingSenderId: "464330470730",
    appId: "1:464330470730:web:73853715816cc86651bdb3"
  };


  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

  export default firebase;