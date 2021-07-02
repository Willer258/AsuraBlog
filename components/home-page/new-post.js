import PostsGrid from '../posts/posts-grid';
import classes from './featured-post.module.css'

function NewPosts(props){
  return <section className={classes.latest}>
    <h2> Nouveau Posts </h2>

    <PostsGrid posts={props.posts}/>

  </section>
}
export default NewPosts;