
function CommentList(props) {
  const { items } = props;

  return (<div className='bg-indigo-400 pt-5'>
    <h3>Commentaires</h3>
    <ul className={' flex-col space-y-5 p-5 divide-y divide-light-blue-400 '}  >
      {items.map((item) => (
        <li key={item.id} className={' flex space-x-5 p-5 justify-between '} >
          <div>{item.comment}</div>
          <div>
             <address>{item.name}</address>
          </div>
        </li>
        
      ))}
    </ul>
  </div>
  );
}

export default CommentList;