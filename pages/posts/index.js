import Head from 'next/head'
import { Fragment } from 'react';

import AllPosts from "../../components/posts/all-posts";


const DUMMY_POSTS = [
  { slug: 'ayaka-le-perso-attendu-sur-genshin', title: 'Ayaka le perso le plus attendu sur genshin ', image: 'ayakar.png', excerpt: 'Comment ne pas attendre le perso representant les terres d\'Inazuma la terre representant le japon', date: '2021-05-10' },
  { slug: 'seele-vorelei-mode-rouge', title: 'Seele le mode Aka en action  ', image: 'seele.png', excerpt: 'Enfin on peut voir la deuxiemme personnalite de Seele en action', date: '2022-06-01' },
  { slug: 'gojo-satoru-le-personnage-le-plus-charismatique-de-2021', title: 'Gojo Satoru le personnage le plus charismatique de 2020 j\'ai nommée JUJUSTU KAISEN   ', image: 'gojo.png', excerpt: 'Satoru un personnage du manga adaptee en anime en hiver 2020 ', date: '2021-05-10' },
  { slug: 'C-est-l-ete-sur-honkai-impact ', title: 'C\'est l\'ete sur Honkai impact  ', image: 'summer.png', excerpt: 'Pret a pulveriser les honkai avec des valkyries en maillot de bain ', date: '2022-07-10' },


];

function AllPostsPage(){

  return <Fragment>
    <Head>
        <title>All posts</title>
        <meta name="description" content="Tous les posts de mon blog"/>
    </Head>

    <AllPosts posts={DUMMY_POSTS} />
  </Fragment>

  
}
export default AllPostsPage;