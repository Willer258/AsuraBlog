//module import
import { useEffect, useState } from 'react';
//import style
import classes from './contact-form.module.css'
//import components
import Notification from '../ui/notification';


//fonction permettant l'eenvoi a la base de donnee  elle est connecter au fichier des api
async function sendContactData(contactDetails) {
  //add client-side validation
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-type': 'application/json',
    }
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');

  }


}

function ContactForm() {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState();
  const [requestError,setRequestError] = useState();

  useEffect(() => {
    if(requestStatus === 'success' || requestStatus === 'error'){
    const timer =   setTimeout(()=>{
        setRequestStatus(null );
        setRequestError(null);
      },3000);
      return () => clearTimeout(timer);
    }
  },[requestStatus])

  //function acteur de l'envoi
  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus('pending');
    try {

      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      })
      setRequestStatus('success');
      setEnteredEmail('')
      setEnteredName('')
      setEnteredMessage('')

    } catch (error) {
      setRequestError(error.message)
      setRequestStatus('error');
    }

  }

  let notification;
  if(requestStatus === 'pending'){
    notification = {
      status: 'pending',
      title: 'Envoi du message ...',
      message:'Votre message est en coup d\'envoi',
    }
  }
  if(requestStatus === 'success'){
    notification = {
      status:'success',
      title:'Parfait',
      message:'Votre message a ete bien envoye'
    }
  }
  if (requestStatus === 'error'){
    notification ={
      status:'error',
      title:'Echec :( ',
      message: requestError,
    }
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

    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
  </section>
}
export default ContactForm;