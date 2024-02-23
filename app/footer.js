import styles from '../styles/footer.module.css'

export default function Footer() {
    return (
     <div className={styles.footerdiv}> 
        <div className={styles.footer}>
           
        
        <div className={styles.footerInfo}>
            <div className={styles.footerInfoIntem}>
                <h1>AO.CO</h1>
                <h3>Click here to subcrite to our newslatter</h3>
            </div>
            <div className={styles.footerInfoIntem}>
                <ul>
                    <li> Subscribe to our newslatter</li>
                    <li>Blog</li>
                    <li> FQs</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className={styles.footerInfoIntem}>
                <ul>
                    <li> Subscribe to our newslatter</li>
                    <li>Blog</li>
                    <li> FQs</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
        </div>


     </div>
    )
}