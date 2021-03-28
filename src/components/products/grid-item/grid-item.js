import React, { Component } from 'react'
import styles from './grid-item.module.css'
import Button from '../../button/button'
import FontAwIcon from '../../font-awesome-icon/fontAwesomeIcon'
import PriceBox from '../../small-utils/price-box/price-box'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router'



class GridItem extends Component {
    constructor(props) {
        super(props)
    }

    moreInfoHandler = (e, id, category) => {
        this.props.history.push(`/products/${category}/${id}`)
    }

    render() {
        const { isNew, title, info, img, price, isCart, id, category } = this.props
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
                            <Button content={'More info'} onClick={(e) => this.moreInfoHandler(e, id, category)}/>
                            <Button content={<FontAwIcon icon={faCartPlus} size={'lg'} color={'#fff'} />} />
                        </div>
                        :
                        <div className={styles['btn-wrapper']}>
                            <Button content={'More info'} onClick={(e) => this.moreInfoHandler(e, id, category)} />
                        </div>
                }
            </section>
        )
    }

}

export default withRouter(GridItem)