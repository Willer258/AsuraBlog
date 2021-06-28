import Link from 'next/link'
import Image from 'next/image'
import { logout } from 'netlify-identity-widget'
import { useContext } from 'react'


import Logo from './logo'
import classes from './main-navigation.module.css'
import AuthContext from '../../stores/authContext'

export default function Navbar() {
  const { user, login, authReady } = useContext(AuthContext)
  console.log(user)
  return (
    <div className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
   
      <nav>    
        {authReady && (
          <ul>
            <li><Link href="/posts">Nos posts</Link></li>
            <li><Link href="/contact">Nous contacter</Link></li>
            {user && <li><Link href="/createPost">Creer un post</Link></li>}
            {!user && <button onClick={login} className="button"><a>Login/Signup</a></button>}
            {user && <p>Bonjour {user.user_metadata.full_name}</p>}
            {user && <button onClick={logout} className="button"><a>Log out</a></button>}
          </ul>
        )}
      </nav>
    </div>
  )
}
