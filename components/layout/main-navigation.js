//components
//module-components
import Link from 'next/link'
import firebase from "firebase/app";
import Logo from './logo'
import classes from './main-navigation.module.css';


//CSS
//databse components
import { useAuth } from "../../firebase/auth";


function MainNavigation() {
  const { user } = useAuth();
  let classesHidden =  user ? 'hidden' : ''
  let classesView = !user ? 'hidden' :''
    return (
      <header className={classes.header}>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
        <nav>
          <ul>
            <li className="text-white">   {` ${user ? user.email : ""}`}</li>
            <li>
              <Link href="/posts">Les  posts</Link>
            </li>
            <li>
              <Link href="/contact">Nous contacter</Link>
            </li>
            <li className={classesView}>
              <Link href="/createPost">Creer un post</Link>
            </li>
            <li></li>
            <li><button variant="solid" width='100%'  className={classesHidden+' bg-green-500 p-2'} >
              <Link href="/login">
                <a>Connexion</a>
              </Link>
            </button> <button onClick={async () => {
              await firebase.auth().signOut();
              window.location.href = "/"
            }} className={classesView+' bg-red-500 p-2'}>Deconnexion</button></li>
          </ul>
        </nav>
      </header>
    ) 

} 

export default MainNavigation;