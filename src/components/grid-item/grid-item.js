import React from 'react'
import GridItemDesc from '../grid-item-desc/grid-item-desc'
import SpecialOffer from '../special-offer/special-offer'
import styles from './grid-item.module.css'
import * as images from '../../images/mcb.png'

const GridItem = ({ type, title, info, imgUrl }) => {
    if (type === 'small') {
        return (
            <section className={styles['small-item']}>
                <GridItemDesc productName={title} info={info} />
                <img src={imgUrl} alt="" className={styles['small-img']} />
            </section>
        )
    } else if (type === 'big') {
        return (
            <section className={styles['big-item']}>
                <GridItemDesc productName={title} info={info} />
                <img src={imgUrl} alt="" className={styles['big-img']} />
            </section>
        )
    } else {
        <div>Loading...</div>
    }

    
}

export default GridItem