import styles from '../styles/footer.module.css'

export default function Footer() {
    return (
     <div className={styles.footerdiv}> 
        <div className={styles.footer}>
           

        <div className={styles.footerInfo}>
            <div className={styles.footerInfoIntem}>
                <h1>AO.CO</h1>
              
             
            </div>
            <div className={styles.footerInfoIntem}>
                <ul>
                    <li> Subscribe to our newslatter</li>
                    <li>Blog</li>
                    <li> Tiktok</li>
                    <li>Instagram</li>
                </ul>
            </div>
            <div className={styles.footerInfoIntem}>
                <ul>
                    <li> Arround the globe</li>
                    <li> We have a Blog</li>
                    <li> @2024 AOCO</li>
                    <li>Developed by AO.CO</li>
                </ul>
            </div>
        </div>
        </div>


     </div>
    )
}