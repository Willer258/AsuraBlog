//components
//module-components
import Link from 'next/link'

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
        </ul>
      </nav>
    </header>
  )

} export default MainNavigation;