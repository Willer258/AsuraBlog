import firebase from 'firebase/app';


const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCiOISkNAq8sEOmEQxW8ysMQvMXAiiBigg",
  authDomain: "nextjs-with-firebase-6116f.firebaseapp.com",
  projectId: "nextjs-with-firebase-6116f",
  databaseURL:"https://nextjs-with-firebase-6116f-default-rtdb.firebaseio.com/",
  storageBucket: "nextjs-with-firebase-6116f.appspot.com",
  messagingSenderId: "133541193555",
  appId: "1:133541193555:web:f05c197ccb45a3471ae3a6"
};

export default function firebaseClient(){
  if(!firebase.apps.length){
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}