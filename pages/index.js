//module components
import { Fragment } from "react";
import Head from 'next/head'
//component
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import NewPosts from "../components/home-page/new-post";

//data
import { getFeaturedPosts } from '../lib/posts-util';
import fire from "../fireconfig";
import { useState, useEffect } from 'react';

function MyHomePage(props) {
  
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fire.firestore()
      .collection('blogs')
      .onSnapshot(snap => {
        const blogs = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blog);
      });
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Asura blog || le blog pour Otaku  </title>
        <meta name="description" content="Les posts pour les meileurs manga et jeux de mon vecu" />
      </Head>

      <Hero />
      <FeaturedPosts posts={props.posts}/>
      <NewPosts posts={blogs}  />

      
    </Fragment>

  );

}

export function getStaticProps() {
  const FeaturedPosts = getFeaturedPosts();
  
  return {
    props: {
      posts: FeaturedPosts
      
    },
    revalidate: 60,

    

  
  }
 
}

export default MyHomePage;