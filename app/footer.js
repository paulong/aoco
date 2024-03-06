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
                    <li> Tiktok</li>
                    <li>Instagram</li>
                </ul>
            </div>
            <div className={styles.footerInfoIntem}>
                <ul>
                  
                    <li> @2024 AOCO</li>
                    <li>Developed by AO.CO</li>
                </ul>
            </div>
        </div>
        </div>


     </div>
    )
}