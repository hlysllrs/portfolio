import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <Link href="https://www.linkedin.com/in/hailey-sellars/" target="_blank">
        <i class="devicon-linkedin-plain"></i>
      </Link>
      <Link href="https://github.com/hlysllrs" target="_blank">
        <i class="devicon-github-original"></i>
      </Link>
    </div>
  )
}
