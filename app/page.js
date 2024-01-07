import Image from 'next/image'
import styles from '../styles/page.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AOCO</title>
        <meta
          name="description"
          content="Website builder"
        />
        <meta property="og:title" content="AOCO" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content=" " />
        <meta property="og:image" content=" " />
        <meta
          property="og:description"
          content="Make your short-term rental stand out!
                    We offer interior designs that are
                    on-trend, and proven to increase
                    guest’s enjoyment during their stay."
        />
        <link rel="icon" href="..." />
      
    </Head>
    <main className={styles.main} >
      <h1>AOCO</h1>
      <h1>SOON</h1>
    </main>
    </>
  )
}
