import React from 'react'
import styles from './grid-item.module.css'
import Button from '../../button/button'
import FontAwIcon from '../../font-awesome-icon/fontAwesomeIcon'
import PriceBox from '../../small-utils/price-box/price-box'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'



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
                isCart ?
                    <div className={styles['btn-cart-wrapper']}>
                        <Button content={'More info'} />
                        <Button content={<FontAwIcon icon={faCartPlus} size={'lg'} color={'#fff'}/>} />
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