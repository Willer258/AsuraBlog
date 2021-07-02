import React, { useState, } from "react";
import firebaseClient from '../../firebase/firebaseClient';
import firebase from "firebase/app";
import "firebase/auth"
import classes from './login.module.css'
import 'tailwindcss/tailwind.css'

export default function Login() {
  firebaseClient();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState();

  return (
    <div className={classes.contact}>

      <h1>
        Authentification
      </h1>
      <div className={classes.form}>
        <div>
          <label htmlFor="email">Adresse</label>
          <input onChange={(e) => setEmail(e.target.value)}
            type="email" id="emailAddress"
            value={email} aria-describedby="email-helper-text" />
        </div>
        <div >
          <label htmlFor="password">Mot de passe</label>
          <input onChange={(e) => setPassword(e.target.value)}
            type="password" id="password"
            value={password} aria-describedby="password-helper-text" />
        </div>
      </div>
      
     <div>
       
     </div>
    <div className='flex space-x-5 justify-center mt-5'>
  
      <div>
        <button className={'bg-green-500 p-3 focus:bg-green-600'} isDisabled={email === "" || password === ""} onClick={async () => {
          await firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
            window.location.href = "/"
          }).catch(function (error) {
            error = error.message;
            console.log({
              title: 'il y a erreur',
              description: message,
              status: 'error',
              duraton: 9000,
              isDisabled: true,
            })
          })
        }} >Connexion</button>
      </div>
      <div>
        <button className={'bg-blue-500 p-3 focus:bg-blue-600'}  isDisabled={email === "" || password === ""} onClick={async () => {
          await firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
            window.location.href = "/"
          }).catch( (error) => {
            error = error.message;
            console.log({
              title: 'il y a erreur',
              description: message,
              status: 'error',
              duraton: 9000,
              isDisabled: true,
            })
          })
        }} >Inscription</button>

      </div>
    </div>
    </div>
  )
}