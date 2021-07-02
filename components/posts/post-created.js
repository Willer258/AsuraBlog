import classes from './post-item.module.css'
import Link from 'next/link';
import Image from 'next/image'

function  PostCreated(props) {
const { title, file, excerpt, date, id }=props.post;
console.log(file)
const formattedDate = new Date(date).toLocaleDateString('en-US',{
  day:'numeric',
  month:'long',
  year:'numeric',
});

const imagePath = file;
const linkPath=`/newPosts/${id}`
  return <li className={classes.post}>
    <Link href="/newPosts/[id]" as={'/newPosts/' + id}>
      <a>
        <div className={classes.image}>
          <img src={''+imagePath} alt={title} width={600} height={200} layout='responsive' />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </a>
    </Link>
  </li>
}
export default PostCreated;