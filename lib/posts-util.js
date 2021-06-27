import fs from 'fs';
import path from 'path'

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

 export function getPostFiles(){
  return fs.readdirSync(postsDirectory);
}

//Fonction permmettan de formater des donnees sous un fichier .md en donnee pour du javascript
export function getPostData(postIdentifer){
  const postSlug = postIdentifer.replace(/\.md$/, ''); //Ca permet d'effacer l'extension .md
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent =   fs.readFileSync(filePath, 'utf-8');
  const {data, content} = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts(){


  const postFiles = getPostFiles();
  
 const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  });

  const sortedPosts  = allPosts.sort((postA, postB) =>  postA.date > postB.date ? -1 : 1);
  return sortedPosts;
}

export function getFeaturedPosts(){
  const AllPosts = getAllPosts();

  const featuredPosts = AllPosts.filter(post => post.isFeatured); 

  return featuredPosts;
}

