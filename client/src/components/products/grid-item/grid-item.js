import React, { Component } from 'react'
import styles from './grid-item.module.css'
import Button from '../../global/button/button'
import FontAwIcon from '../../global/font-awesome-icon/fontAwesomeIcon'
import PriceBox from '../../global/price-box/price-box'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router'
import UserContext from '../../../Context'
import localCard from '../../../utils/localstorage.card'



class GridItem extends Component {
    constructor(props) {
        super(props)
    }

    static contextType = UserContext

    moreInfoHandler = (e, id, category) => {
        this.props.history.push(`/products/${category}/${id}`)
    }

    handleQuickAddToCart = () => {
        const item = {
            title: this.props.title,
            deviceType: this.props.category,
            id: this.props.id,
            imageUrl: this.props.img,
            price: this.props.price,
            description: this.props.price
        }
        localCard.addToLocalCard(item)
        this.context.addToCart(item)
        this.props.history.push('/cart')
    }

    render() {
        const { title, info, img, price, isCart, id, category } = this.props
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
                            <Button content={'More info'} onClick={(e) => this.moreInfoHandler(e, id, category)} />
                            <Button content={<FontAwIcon icon={faCartPlus} size={'lg'} color={'#fff'}/>}
                            onClick={this.handleQuickAddToCart}
                            />
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