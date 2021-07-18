import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam at fuga rerum cumque suscipit quis harum praesentium aspernatur! Dolores asperiores tempore, nam ipsam sequi tempora ab porro? Soluta, aperiam adipisci!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ratione rerum quod! Mollitia beatae numquam quasi nisi cum corporis labore, quas ea debitis esse nihil alias aliquam, doloribus officiis voluptatem.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  )
}
