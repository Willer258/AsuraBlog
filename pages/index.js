//module components
import { Fragment } from "react";
import Head from 'next/head'
//component
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

//data
import { getFeaturedPosts } from '../lib/posts-util';

function MyHomePage(props){
  return(
  <Fragment>
    <Head>
      <title>Asura blog || le blog pour Otaku  </title>
      <meta name="description" content="Les posts pour les meileurs manga et jeux de mon vecu"/>
    </Head>

    <Hero/>
    <FeaturedPosts posts={props.posts}/>
  </Fragment>
  
  );

}

export function getStaticProps(){
  const FeaturedPosts = getFeaturedPosts();
  return {
    props:{
      posts: FeaturedPosts
    },
    revalidate:60
  }
}

export default MyHomePage;