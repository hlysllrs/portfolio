import Link from 'next/link'
import styles from './NavBar.module.scss'

export default function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <Link href="/" className={styles.title}>
        Hailey Sellars is a Software Engineer <br />
        based in New York City.
      </Link>
      <div className={styles.links}>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
