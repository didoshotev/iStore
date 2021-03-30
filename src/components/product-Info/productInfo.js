import React, { Component } from 'react'
import { withRouter } from 'react-router'
import UserContext from '../../Context'
import Button from '../button/button'
import PriceBox from '../small-utils/price-box/price-box'
import styles from './productInfo.module.css'

class ProductInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: null,
            price: null,
            info: null,
            isAvailable: null,
            imageUrl: null,
            category: null,
        }
    }

    static contextType = UserContext

    componentDidMount() {
        this.getItem(this.props.id)
    }

    getItem = async (id) => {
        const promise = await fetch(`http://localhost:5000/api/products/${this.props.category}/${id}`)
        const product = await promise.json()
        console.log(product);
        this.setState({
            title: product.title,
            description: product.description,
            deviceType: product.deviceType,
            isActive: product.isActive,
            price: product.price,
            imageUrl: product.imageUrl,
            id: product._id
        })
    }

    handleEditRedirect = (e, state) => {
        e.preventDefault()
        this.props.history.push({
            pathname: `/edit/${state.id}`,
            state: { data: state }
        })
    }

    render() {
        const { user, loggedIn, role } = this.context
        const {
            title,
            price,
            description,
            isActive,
            deviceType,
            imageUrl,
            id
        } = this.state

        return (
            <section className={styles.container}>
                <div className={styles['img-wrapper']}>
                    <img src={imageUrl} alt="" />
                </div>
                <div className={styles['info-wrapper']}>
                    <h3>{title}</h3>
                    <p className={styles.category}>Category: {deviceType}</p>
                    <div className={styles['info-desc']}>
                        <h5>More about the product</h5>
                        <p>{description}</p>
                    </div>
                    <div className={styles['btn-price-wrapper']}>
                        {/* <span className={styles.price}>${price}.00</span> */}
                        <div>
                            <PriceBox price={price} isAvailable={isActive} />
                        </div>
                        <div>
                            <Button content={'Buy Now'} />
                        </div>
                    </div>
                    {
                        role === 'admin'
                        &&
                        <div className={styles.admin}>
                            <Button content={'Edit'} onClick={(e) => this.handleEditRedirect(e, this.state)}/>
                            <Button content={'Delete'} />
                        </div>
                }
                </div>
            </section>
        )
    }

}

export default withRouter(ProductInfo)