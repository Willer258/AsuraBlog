import { useEffect, useState } from "react";
import  'tailwindcss/tailwind.css'
import classes from './create-post.module.css'
import Notification from "../ui/notification";

async function CreateNewPost(postDetails){
  const response = await fetch('/api/post',{
    method:'POST',
    body: JSON.stringify(postDetails),
    headers:{
      'Content-type':'application/json',
    }
  });
  const data = await response.json();
  if (!response.ok){
    throw new Error(data.message || 'Something went wrong');
  }
}

function CreatePost(){
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredContent, setEnteredContent] = useState('');
  const [requestStatus, setRequestStatus] = useState('');
  const [requestError, setRequestError] = useState('');
  
  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus])


  async function sendPostHandler(event) {
    event.preventDefault();

    setRequestStatus('pending');
    try {

      await CreateNewPost({
        title: enteredTitle,
        description: enteredDescription,
        content: enteredContent,
      })
      setRequestStatus('success');
      setEnteredTitle('')
      setEnteredDescription('')
      setEnteredContent('')

    } catch (error) {
      setRequestError(error.message)
      setRequestStatus('error');
    }

  }

  let notification;
  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Envoi du message ...',
      message: 'Votre message est en coup d\'envoi',
    }
  }
  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Parfait',
      message: 'Votre message a ete bien envoye'
    }
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Echec :( ',
      message: requestError,
    }
  }

  return <section className={classes.contact}>
    <h1>Nouveau Post</h1>
    <form className={classes.form} onSubmit={sendPostHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required value={enteredTitle} onChange={event => setEnteredTitle(event.target.value)} />
        </div>
      
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" required value={enteredDescription} onChange={event => setEnteredDescription(event.target.value)} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea id="description" rows="5" required value={enteredContent} onChange={event => setEnteredContent(event.target.value)}></textarea>
      </div>


      <div className={classes.actions}>
        <button>Envoyer</button>
      </div>


      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
    </form>
  </section>
}
export default CreatePost;