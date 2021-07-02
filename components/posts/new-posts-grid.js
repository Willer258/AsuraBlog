import postCreated from './post-created';
import classes from './posts-grid.module.css'
function PostsGrid(props){

  const {blogs} = props;
  return <ul className={classes.grid}>
    {blogs.map(blog => <postCreated key={post.slug}  blog={blog} />)}
  </ul>
}
export default PostsGrid;