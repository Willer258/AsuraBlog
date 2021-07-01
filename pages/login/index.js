import React, { useState, } from "react";
import firebaseClient from '../../firebase/firebaseClient';
import firebase from "firebase/app";
import "firebase/auth"
import classes from './login.module.css'

export default function Login() {
  firebaseClient();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState();

  return (
    <div className={classes.contact}>

      <h1>
        Login
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
      <div>
        <button minWidth="40%" variant="solid" variantColor="blue" isDisabled={email === "" || password === ""} onClick={async () => {
          await firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
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
        }} >Conception du compte</button>

      </div>
      <div>
        <button isDisabled={email === "" || password === ""} onClick={async () => {
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
        }} >Authentification</button>
      </div>
    </div>
  )
}