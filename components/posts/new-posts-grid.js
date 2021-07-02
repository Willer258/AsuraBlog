import PostCreated from './post-created';
import classes from './posts-grid.module.css'
function NewPostsGrid(props){

  const {posts} = props;
  return <ul className={classes.grid}>
    {posts.map(post => <PostCreated key={post.slug}  post={post} />)}
  </ul>
}
export default NewPostsGrid;