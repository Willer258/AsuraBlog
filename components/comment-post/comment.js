import { useEffect, useState } from 'react';
import fire from '../../fireconfig';
import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comment.module.css';

function Comments(props) {
  const id =props.id
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  console.log(id)
  useEffect(() => {
    if (showComments) {
    fire.firestore()
      .collection('blog').doc(id).collection('comments').onSnapshot(snap => {
        const comments = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setComments(comments);
      });}
  }, [showComments]);
  console.log(comments)

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }


  return (
    <section className={classes.comments + ' space-y-9'}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment itemid={id} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;