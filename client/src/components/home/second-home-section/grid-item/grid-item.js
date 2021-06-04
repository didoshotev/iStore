import React from 'react'
import GridItemDesc from '../grid-item-desc/grid-item-desc'
import styles from './grid-item.module.css'

const GridItem = ({ type, title, info, imgUrl, category }) => {
    if (type === 'small') {
        return (
            <section className={styles['small-item']}>
                <GridItemDesc productName={title} info={info} category={category}/>
                <img src={imgUrl} alt="" className={styles['small-img']} />
            </section>
        )
    } else if (type === 'big') {
        return (
            <section className={styles['big-item']}>
                <GridItemDesc productName={title} info={info} category={category}/>
                <img src={imgUrl} alt="" className={styles['big-img']} />
            </section>
        )
    } else {
        <div>Loading...</div>
    }
}

export default GridItem