import React from 'react'
import LinkComponent from '../link/link'
import SpecialOffer from '../special-offer/special-offer'
import styles from './grid-item-desc.module.css'

const GridItemDesc = ({ productName, info, category }) => {
    
    return (
        <section className={styles.wrapper}>
            <SpecialOffer />
            <div className={styles.content}>
                <h4 className={styles['product-name']}>{productName}</h4>
                <p className={styles['p-info']}>{info}</p>
            </div>
            <LinkComponent title={'Buy Now'} isBasic={'false'} href={`/${category}`} />
        </section>
    )
}

export default GridItemDesc