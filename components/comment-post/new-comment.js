
import { useRef, useState } from 'react';
import fire from '../../fireconfig';

function NewComment(props) {
    console.log(props)
 const   id= props.itemid
 console.log(id)
  const [isInvalid, setIsInvalid] = useState(false);

  const [enteredEmail ,setEnteredEmail ] = useState('')
  
  const [enteredName ,setEnteredName ] = useState('')
  
  const [enteredComment ,setEnteredComment ] = useState('')
  
  const date = new Date().toISOString();

  function sendCommentHandler(event) {
    event.preventDefault();


    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredComment ||
      enteredComment.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    console.log({
        
      'email': enteredEmail,
      'comment':enteredComment,
      'name':enteredName,
    })

    setEnteredEmail();
    setEnteredName();
    setEnteredComment();

    fire.firestore()
      .collection('blog').doc(id).collection('comments').add({email:enteredEmail,name:enteredName,comment:enteredComment,date:date })

  }

  return (
    <form className={'bg-green-400 p-9 space-y-5 '} onSubmit={sendCommentHandler}>
      <div className='flex justify-between'>
      
        <div className={'space-x-5'}>
          <label htmlFor='email'>Your email:</label>
          <input type='email' id='email' required value={enteredEmail} onChange={event => setEnteredEmail(event.target.value)} />
        </div>
        <div className={'space-x-5'}>
          <label htmlFor='name'>Your name:</label>
          <input type='text' id='name' required value={enteredName} onChange={event => setEnteredName(event.target.value)} />
        </div>
      
      </div>
      <div className={'flex flex-col'}>
        <label htmlFor='comment'>Your comment:</label>
        <textarea id='comment' rows='5'  required value={enteredComment} onChange={event => setEnteredComment(event.target.value)}></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button className={'text-black'}>Submit</button>
    </form>
  );
}

export default NewComment;