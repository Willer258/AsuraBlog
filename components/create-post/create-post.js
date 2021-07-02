import { useEffect, useState } from "react";
import  'tailwindcss/tailwind.css'
import classes from './create-post.module.css'
import Notification from "../ui/notification";
import fire from "../../fireconfig";

/*async function CreateNewPost(postDetails){
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
}*/

function CreatePost(){

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredContent, setEnteredContent] = useState('');
  const [notification, setNotification] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      'title': enteredTitle,
      'content':enteredContent,
      'excerpt':enteredDescription,
      
    });
    setNotification('Post cree');
    
    setTimeout(() => {
      setNotification('')
    }, 2000)
  
    setEnteredTitle('');
    setEnteredDescription('');
    setEnteredContent('');
    
    fire.firestore().collection('blog').add({title:enteredTitle,excerpt:enteredDescription,content:enteredContent})
    

  }

  
  return <section className={classes.contact}>
    <h1>Nouveau Post</h1>
    <form className={classes.form} onSubmit={handleSubmit}>
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
        <label htmlFor="description">Contenu</label>
        <textarea id="description" rows="5" required value={enteredContent} onChange={event => setEnteredContent(event.target.value)}></textarea>
      </div>


      <div className={classes.actions}>
        <button>Envoyer</button>
      </div>


    </form>
    {notification && <Notification  message={notification} />}

  </section>
  }
export default CreatePost;

     