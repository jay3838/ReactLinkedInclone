import firebase from 'firebase';



//firbase ma authintioaction jevirite karo evi rite pan
//firrebase database ma rule ma jai write pachi nu nikali ;(semicolon) lagavi save karvu
//firestorage na rules ma jai evuj karvu database rule jevu

const firebaseConfig = {
  apiKey: "AIzaSyCdPGp1imYqpCehWmj8Hm_rkaFjhXcMbmI",
  authDomain: "linkedin-3a3b2.firebaseapp.com",
  projectId: "linkedin-3a3b2",
  storageBucket: "linkedin-3a3b2.appspot.com",
  messagingSenderId: "500939088135",
  appId: "1:500939088135:web:3e9439aef6acc152f3a5a2",
  measurementId: "G-9K8X75VHEJ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage();

  export {auth, provider,db,storage};

