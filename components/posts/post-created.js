import classes from './post-item.module.css'
import Link from 'next/link';
import Image from 'next/image'

function  PostCreated(props) {
const { title, image, excerpt, date, id }=props.post;

const formattedDate = new Date(date).toLocaleDateString('en-US',{
  day:'numeric',
  month:'long',
  year:'numeric',
});

const imagePath = `/image/posts/${image}`;
const linkPath=`/newPosts/${id}`
  return <li className={classes.post}>
    <Link href="/newPosts/[id]" as={'/newPosts/' + id}>
      <a>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} layout='responsive' />
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