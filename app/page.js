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
    

      <div className={styles.menu}>
        <h1> By ao.co</h1>
      </div>
      {/*
      <div className={styles.Hero}>
          <h1> AO.CO</h1>
      </div> 
  */}
      <div className={styles.gate}>
        <h2>
           "We 
        <span className={styles.SmallFont}> Build &#8594; </span> websites
        <span className={styles.LargeFont}> for you &#x2661; </span>"
        </h2>   
      </div>

    
     
{/*
      <div className={styles.headerNewsContainer}>
        <div className={styles.headerNewsContainerItem}>
        <h2>Services</h2>
        <img src="/home.png" alt="test"></img>
      
        </div>
        <div className={styles.headerNewsContainerItem}>
        <h2>Plans</h2>
        <img src="/right-arrow.png" alt="test"></img>
        
        </div>
        <div className={styles.headerNewsContainerItem}>
        <h2>Fqa's</h2>
        <img src="/mail.png" alt="test"></img>
        </div>
        <div className={styles.headerNewsContainerItem}>
        <h2>About us</h2>
        <img src="/link.png" alt="test"></img>
        </div>
      </div>
  */}    

     
<div className={styles.SubHeader}>
  <div>
      <h1> You don't  have to <br/>
      <span className={styles.SmallFont} > waisting time </span><br/> 
        we can build it for you  <span className={styles.SmallFont}> &#x2661;</span>
       </h1>
  </div>
  
      <div className={styles.containerinfo} >
          <div className={styles.info}>
            <h3 >  Landing Page</h3>
          </div>
          <div className={styles.info}>
          <h3> Websites</h3>
          <img src="/right-arrow.png" alt="test"></img>
          </div>
          <div className={styles.info}>
          <h3>Social media</h3>
          <img src="/right-arrow.png" alt="test"></img>
          </div>
          <div className={styles.info}>
          <h3>Ecommerce</h3>
          <img src="/right-arrow.png" alt="test"></img>
          </div>
          
          <div className={styles.info}>
          <h3>Social Link</h3>
          <img src="/right-arrow.png" alt="test"></img>
          </div>
          <div className={styles.info}>
          <img src="/right-arrow.png" alt="test"></img>
          </div>
          


      </div>
</div>

<div className={styles.etiquetas}>
  <h1>
    We offer several <br/>
    services for you 
</h1>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisi turpis, 
  posuere nec mi et, consequat rutrum metus. Phasellus ut nibh massa. Aenean arcu risus, 
  condimentum quis mattis at, auctor eget justo. 
  </p>

</div>

<div className={styles.ContainerExitos}>
  <div className={styles.Exitos}  >
    <h1>Small plan</h1>
    <h2 > $20/month</h2>
    <ul>
      <li>landing page</li>
      <li>social media links</li>
      <li>website</li>
      <li>social media links</li>
      <li>Contact form</li> 
      
    </ul>
    <a href='' className={styles.buyButtom}> More info </a>
  </div>
  <div className={styles.Exitos}  >
    <h1>midium plan</h1>
    <h2 > $20/month</h2>
    <ul>
      <li>website</li>
      <li>social media links</li>
      <li>Contact form</li>
      <li>website</li>
      <li>social media links</li>
     
     
    </ul>
    <a href='' className={styles.buyButtom}> More info </a>
  </div>
  <div className={styles.Exitos}  >
    <h1>large plan</h1>
    <h2 > $20/month</h2>
    <ul>
      <li>website</li>
      <li>social media links</li>
      <li>Contact form</li>
      <li>website</li>
      <li>social media links</li>    
    </ul>
    <a href='' className={styles.buyButtom}> More info </a>
  </div>


  
</div>

      
    </main>
    </>
  )
}
