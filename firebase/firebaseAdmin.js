const admin = require("firebase-admin");
const serviceAccount = require('./secrets.json');

export const verifyIdToken = (token) =>{
  if(!admin.apps.length){
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL:'https://nextjs-with-firebase-6116f-default-rtdb.firebaseio.com/'
    })
  }
  return admin.auth().verifyIdToken(token).catch((error)=>{
    throw error;
  })
}