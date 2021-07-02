import  Head from 'next/head'
import { Fragment } from 'react';
import PostContent from "../../components/posts/post-detail/post-content";
import fire from '../../fireconfig'
import Link from 'next/link'
const Blog = (props) => {
  return (
    <Fragment>
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.excerpt}/>
    </Head>

    <PostContent post={props} />
  </Fragment>

   /*  <div>
      <h2>{props.title}</h2>
      <p>
        {props.content}
      </p>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div> */
  )
}
export const getServerSideProps = async ({ query }) => {
  const content = {}
  await fire.firestore()
    .collection('blog')
    .doc(query.id)
    .get()
    .then(result => {
      content['title'] = result.data().title;
      content['content'] = result.data().content;
      content['excerpt'] =result.data().excerpt
    });
return {
    props: {
      title: content.title,
      content: content.content,
      excerpt: content.excerpt,
    }
  }
}
export default Blog