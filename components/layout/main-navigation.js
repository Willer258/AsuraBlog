//components
//module-components
import Link from 'next/link'

import Logo from './logo'
import classes from './main-navigation.module.css'

//CSS


function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Nos posts</Link>
          </li>
          <li>
            <Link href="/contact">Nous contacter</Link>
          </li>
          <li>
            <Link href="/createPost">Creer un post</Link>
          </li>
        </ul>
      </nav>
    </header>
  )

} export default MainNavigation;