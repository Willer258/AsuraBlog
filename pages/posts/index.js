import Head from 'next/head'
import { Fragment } from 'react';
import NewPosts from "../../components/home-page/new-post";

import AllPosts from "../../components/posts/all-posts";


import { getAllPosts } from '../../lib/posts-util';

import fire from "../../fireconfig";
import { useState, useEffect } from 'react';


 
function AllPostsPage(props){
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fire.firestore()
      .collection('blog')
      .onSnapshot(snap => {
        const blogs = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogs);
      });
  }, []);

  return <Fragment>
    <Head>
        <title>Tous nos posts</title>
        <meta name="description" content="Tous les posts de mon blog"/>
    </Head>

    <AllPosts posts={props.posts} />
    <NewPosts posts={blogs}  />
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