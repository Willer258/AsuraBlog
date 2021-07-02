import NewPostsGrid from '../posts/new-posts-grid';
import classes from './featured-post.module.css'

function NewPosts(props){
  return <section className={classes.latest}>
    <h2> Nouveau Posts </h2>

    <NewPostsGrid posts={props.posts}/>

  </section>
}
export default NewPosts;