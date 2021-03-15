import React from 'react'
import styles from './first-home-section.module.css'
import '../../index.css'
import LinkComponent from '../link/link'


const FirstHomeSection = () => {

    return (
        <section className={styles['content-wrapper']}>
            <h1>iPhone 12</h1>
            <h3>Blast past fast.</h3>
            <div className={styles['offer-pricing']}>
                <p>From $29.12/mo or $699 before trade-in.</p>
                <p>Buy directly from Apple with special carrier offers</p>
            </div>
            <LinkComponent title={'Buy Now'} isBasic={true} href={'/iphone'}/>
            <img src="https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.news_app_ed.jpg" alt="" className={styles['main-img']} />
        </section>
    )
}

export default FirstHomeSection