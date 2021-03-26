import React from 'react'
import GridItem from '../grid-item/grid-item'
import styles from './second-home-section.module.css'
import getSpecialOffers from '../../utils/special-offers'

const SecondHomeSection = () => {
    const offers = getSpecialOffers()
    return (
        <article className={styles.wrapper}>
            {
                offers.map((item, index) => {
                    return (
                        <div className={styles[`gr-${index + 1}`]} key={index + 1}>
                            <GridItem
                                type={item.type} title={item.title} info={item.info} imgUrl={item.imgUrl} key={index} category={item.category}
                            />
                        </div>
                    )
                })
            }
        </article>
    )

}

export default SecondHomeSection