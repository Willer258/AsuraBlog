import { useEffect, useState } from "react";
import  'tailwindcss/tailwind.css'
import classes from './create-post.module.css'
import Notification from "../ui/notification";
import fire from "../../fireconfig";

const db = fire.firestore()
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
  const date = new Date().toISOString();
  const [fileUrl , setFileUrl] = useState(null)

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = fire.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl( await fileRef.getDownloadURL());
  };
  
  console.log(fileUrl)
  const handleSubmit = async (event) => {
    
    event.preventDefault();

    console.log({
      'title': enteredTitle,
      'content':enteredContent,
      'excerpt':enteredDescription,
      'file':fileUrl
      
    });
    setNotification('Post cree');
    
    setTimeout(() => {
      setNotification('')
    }, 2000)
  
    setEnteredTitle('');
    setEnteredDescription('');
    setEnteredContent('');
    setFileUrl()
    
   await fire.firestore().collection('blog').add({title:enteredTitle,excerpt:enteredDescription,content:enteredContent,date:date,file:fileUrl})
    

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
        <textarea id="description" rows="10" required value={enteredContent} onChange={event => setEnteredContent(event.target.value)}></textarea>
      </div>

      <div className={classes.control}>
      <label htmlFor="image">Image de couverture</label>
          <input type='file' onChange={onFileChange}/>
      </div>


      <div className={classes.actions}>
        {!fileUrl && <p>Patientez .....</p>}
        
       { !fileUrl && <button disabled >Envoyer</button>}
       { fileUrl && <button >Envoyer</button>}
      </div>


    </form>
    {notification && <Notification  title={notification} />}

  </section>
  }
export default CreatePost;

     