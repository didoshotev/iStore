import React from 'react'
import styles from './price-box.module.css'

const PriceBox = ( {price, isAvailable} ) => {

    return (
        <>
            <p className={styles.price}>From ${price}</p>
            {
                isAvailable ? <span className={styles.available}>Available</span> : <span className={styles['not-available']}>Not Available</span>
            }
        </>
    )
}

export default PriceBox