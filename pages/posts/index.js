import Head from 'next/head'
import { Fragment } from 'react';

import AllPosts from "../../components/posts/all-posts";


import { getAllPosts } from '../../lib/posts-util';

function AllPostsPage(props){

  return <Fragment>
    <Head>
        <title>Tous nos posts</title>
        <meta name="description" content="Tous les posts de mon blog"/>
    </Head>

    <AllPosts posts={props.posts} />
  </Fragment>

  
}

export function getStaticProps() {
  const AllPosts = getAllPosts();
  return {
    props: {
      posts: AllPosts
    },
    revalidate: 60
  }
}

export default AllPostsPage;