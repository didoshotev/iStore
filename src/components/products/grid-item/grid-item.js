import React from 'react'
import styles from './grid-item.module.css'
import mac from '../../../images/mcb-pro.png'
import Button from '../../button/button'
import CartIcon from '../../cart-icon/cart-icon'
import PriceBox from '../../small-utils/price-box/price-box'


const GridItem = ({ isNew, title, info, img, price, isCart }) => {

    return (
        <section className={styles['item-wrapper']}>
            <div className={styles['content-wrapper']}>
                <img src={img} alt="" className={styles['product-img']} />
                <div className={styles.info}>
                    <h4>{title}</h4>
                    <p>{info}</p>
                    <div className={styles['price-box']}>
                        <PriceBox price={price} isAvailable />
                    </div>
                </div>

            </div>

            {
                !isCart ?
                    <div className={styles['btn-cart-wrapper']}>
                        <Button content={'More info'} />
                        <Button content={<CartIcon />} />
                    </div>
                    :
                    <div className={styles['btn-wrapper']}>
                        <Button content={'More info'} />
                    </div>
            }

        </section>
    )
}

export default GridItem