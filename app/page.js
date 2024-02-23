import Image from 'next/image'
import styles from '../styles/page.module.css'
import Head from 'next/head'
import Footer from './footer'


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
           "We <span className={styles.SmallFont}> Build &#8594; </span>  websites
       
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
  <div className={styles.centerText}> 
      <h1> 
         Don't waste <br/>
        any more time, <br/> 
        let's get it built! <span className={styles.SmallFont}> &#x2661;</span>
      </h1>
  </div>
  
      <div className={styles.containerinfo} >
          <div className={styles.info}>
            <h3 >  Landing Page</h3>
            <p>One-way street to conversions: Focused page captures leads with targeted action.</p>
            <img src="/right-arrow.png" alt="test"></img>
          </div>
          <div className={styles.info}>
          <h3> Websites</h3>
          <p>Digital hub: interlinked pages on a domain, sharing info & goals..</p>
          <img src="/right-arrow.png" alt="test"></img>
          </div>
          <div className={styles.info}>
          <h3>Ecommerce</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img src="/right-arrow.png" alt="test"></img>
          </div>
          <div className={styles.info}>
          <h3>Social media</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img src="/right-arrow.png" alt="test"></img>
          </div>
      </div>
</div>

<div className={styles.titles}>
  <h2>About <span className={styles.titleRed}>AO.CO </span> </h2>
</div>
<div className={styles.sectionAbout}>
  <div className={styles.sectionAboutItem}>
    <p>
      "For over 3 years, we've been helping businesses of all sizes unlock their
    online potential. Our team of seasoned professionals brings a wealth of
    experience and expertise to the table, backed by a data-driven approach 
    that delivers measurable results. We're not just about making websites 
    pretty, we're about making them work for you."
    </p>
    <button className={styles.buttons1} href="form"> Contact Us</button>
  </div>
    <img src="/paulo.png" alt="test"></img>
</div>

<div className={styles.titles}>
  <h2> How we work</h2>
</div>
<div className={styles.process}>

  <div className={styles.processItem}>
    <h1>01</h1>
    <p>
      We're not just about making websites 
      pretty, we're about making them work for you."
    </p>
  </div>

  <div className={styles.processItem}>
     <h1>02</h1>
     <p>
      We're not just about making websites 
      pretty, we're about making them work for you."
    </p>
  </div>

  <div className={styles.processItem}> 
  <h1>03</h1>
  <p>
    We're not just about making websites 
    pretty, we're about making them work for you."
    </p>
  </div>

  <div className={styles.processItem}> 
    <h1>04</h1>
    <p>
      We're not just about making websites 
      pretty, we're about making them work for you."
    </p>
  </div>

</div>



{/*  brand tha we use */}


<div className={styles.tecno}>
  <img src="/wordpress.png" alt="test"></img>
  <img src="/wix.png" alt="test"></img>
  <img src="/elementor.png" alt="test"></img>
  <img src="/html5.png" alt="test"></img>
  <img src="/php.png" alt="test"></img>
  <img src="/mail.png" alt="test"></img>
  

</div>



<div className={styles.titles}>
  <h2>Services</h2>
</div>

<div className={styles.etiquetas}>
  <h1>
    We offer several 
    <br/>
    services for you 
  </h1>
  <p> 
    Struggling to navigate the online world? Whether you're a small business 
    just starting out, a medium-sized company looking to expand, or a large 
    organization seeking to optimize your digital presence, AO.CO has 
    the perfect solution for you. We offer three comprehensive
    plans: Starter, Growth, and Enterprise
  </p>
</div>

<div className={styles.ContainerExitos}>
  <div className={styles.Exitos}  >
    <h1>Starter Plan</h1>
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
    <h1>Growth Plan</h1>
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
    <h1>Enterprise Plan</h1>
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


<div className={styles.titles}>
  <h2>Selected projects </h2>
</div>

<div className={styles.portfolio}>
  <div className={styles.portfolioIntem}>
    <h3> AO.CO</h3>
    <img src="/test.jpg" alt="test"></img>
    <p> firma de arquitectura especializada es remodelaciones locales tal ver ga eto y lo otro </p>
    <a href=''> See the websites</a>
  </div>

  <div className={styles.portfolioIntem}>
    <h3> Snug Land</h3>
    <img src="/test.jpg" alt="test"></img> 
    <p> firma de arquitectura especializada es remodelaciones locales tal ver ga eto y lo otro </p>
    <a href=''> See the websites</a>
  </div>

  <div className={styles.portfolioIntem}>
    <h3> Coming soon</h3>
    <img src="/test.jpg" alt="test"></img>
    <p> firma de arquitectura especializada es remodelaciones locales tal ver ga eto y lo otro </p>
    <a href=''> See the websites</a>
  </div>

  <div className={styles.portfolioIntem}>
    <h3>Coming soon</h3>
    <img src="/test.jpg" alt="test"></img>
    <p> firma de arquitectura especializada es remodelaciones locales tal ver ga eto y lo otro </p>
    <a href=''> See the websites</a>
  </div>

</div>

<div className={styles.titles}>
  <h2>Contact us </h2>
</div>
<div className={styles.contact}>

  <div className={styles.contactItem}>
    <h1>Let's get <br/>
    started.</h1>
  </div>
  
  <div className={styles.contactItem} id="  form">
      
        <label className={styles.contactLabel}> Hello, my name is </label>
        <input
          name="name" 
          defaultValue="awsome"
        />
       
        <label className={styles.contactLabel}> and I have a   </label> 
        <input
          name="company" 
          maxLength="100"
          defaultValue="the greates company ever"
        /> 
          
        <label className={styles.contactLabel}>   that need help. you can reach me at </label>
        <input  
          name="email"
          defaultValue="youremail@example.com"
        /> 
        .
        <br/>
        <label className={styles.contactLabel}>  I would like to know more about    </label>
        <input  
          name="email"
          
        /> 
 <br></br>
<button className={styles.buttons1}> Send info  &#8594;</button>
      

  </div>
  

</div>


    <Footer /> 
    </main>
    </>
  )
}
