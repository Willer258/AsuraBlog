//module import
import { useEffect, useState } from 'react';
//import style
import classes from './contact-form.module.css'
//import components
import Notification from '../ui/notification';
import fire from '../../fireconfig';


//fonction permettant l'eenvoi a la base de donnee  elle est connecter au fichier des api


function ContactForm() {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [notification, setNotification] = useState('');


  //function acteur de l'envoi
  async function sendMessageHandler(event) {
    event.preventDefault();

   
    
    setTimeout(() => {
      setNotification('')
    }, 2000)

    setEnteredName('');
    setEnteredEmail('');
    setEnteredMessage('');
    
    fire.firestore().collection('About').add({name:enteredName,email:enteredEmail,message:enteredMessage})
    
    setNotification('Post cree');

  }


  
  return <section className={classes.contact}>
    <h1>Que pouvons nous pour vous? </h1>
    <form className={classes.form} onSubmit={sendMessageHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required value={enteredEmail} onChange={event => setEnteredEmail(event.target.value)} />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" required value={enteredName} onChange={event => setEnteredName(event.target.value)} />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="message">Vos requetes </label>
        <textarea id="message" rows="5" required value={enteredMessage} onChange={event => setEnteredMessage(event.target.value)}></textarea>
      </div>

      <div className={classes.actions}>
        <button>Envoyer</button>
      </div>
    </form>

    {notification && <Notification  title={notification}/>}
  </section>
}
export default ContactForm;