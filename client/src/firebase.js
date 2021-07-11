import firebase from "firebase";
import "firebase/auth";
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDr0xMQdvzFElTthI39m1R4RuQDrDJahCw",
  authDomain: "aura-meet.firebaseapp.com",
  databaseURL: "https://aura-meet-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aura-meet",
  storageBucket: "aura-meet.appspot.com",
  messagingSenderId: "618045375039",
  appId: "1:618045375039:web:f8cc31fc9f0132dadeae8a",
});

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebaseConfig;
