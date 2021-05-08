import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDwP2dDk63l1JER5Ef4P5QVwoyR3wU7BAU",
  authDomain: "wsmagencyapp-f9806.firebaseapp.com",
  projectId: "wsmagencyapp-f9806",
  storageBucket: "wsmagencyapp-f9806.appspot.com",
  messagingSenderId: "751300726688",
  appId: "1:751300726688:web:608ce1607c6cce126e1ec5",
  measurementId: "G-GBCMBH5W74"
};
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();

export const db = fb.firestore();

  /*
  apiKey: "AIzaSyAmSz95s0ztqBp0-VgvXpFmcaGcE3Lt1pA",
  authDomain: "nextplaylink.firebaseapp.com",
  projectId: "nextplaylink",
  storageBucket: "nextplaylink.appspot.com",
  messagingSenderId: "299190070422",
  appId: "1:299190070422:web:dd61377ec220ca23cfe6b7",
  measurementId: "G-376W3QMYFQ"*/