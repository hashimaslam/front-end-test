import React, { useState ,useEffect} from 'react'
import styles from "./mediacard.module.scss"

function index({title,src}) {
    
    return (
        <div className={styles.mediacard}>
            <div className={styles.mediacard__img}>
                <img src={src} alt="img"/>
                <div className={styles.overlay_content}>
                    <div className={styles.overlay_btn}>Buy</div>
                </div>
            </div>
            <div className={styles.mediacard__content}>
              <div className={styles.mediacard__content_title}>  
              {title}
              </div>
              <div className={styles.mediacard__content_small1}> 
              September 11 | 9:30PM 
              </div>
              <div className={styles.mediacard__content_small2}>  
              Watch on Zoom
              </div>
              <div className={styles.mediacard__content_price}>  
              <div className={styles.mediacard__content_rate}>
                Free
              </div>
              <div className={styles.mediacard__content_icon}>
                  <img src="/heart.png" />
              </div>
              </div>
            </div>
        </div>
    )
}

export default index
