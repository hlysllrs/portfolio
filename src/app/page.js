import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <h1>Portfolio</h1>
    </main>
  )
}
