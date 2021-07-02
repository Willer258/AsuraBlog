import firebase from 'firebase';
import 'firebase/storage'
var firebaseConfig = {
  apiKey: "AIzaSyCiOISkNAq8sEOmEQxW8ysMQvMXAiiBigg",
  authDomain: "nextjs-with-firebase-6116f.firebaseapp.com",
  databaseURL: "https://nextjs-with-firebase-6116f-default-rtdb.firebaseio.com",
  projectId: "nextjs-with-firebase-6116f",
  storageBucket: "nextjs-with-firebase-6116f.appspot.com",
  messagingSenderId: "133541193555",
  appId: "1:133541193555:web:f05c197ccb45a3471ae3a6"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;

export default fire;