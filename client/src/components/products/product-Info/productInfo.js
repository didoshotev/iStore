import React, { Component } from 'react'
import { withRouter } from 'react-router'
import UserContext from '../../../Context'
import apiCall from '../../../utils/apiCall'
import localCard from '../../../utils/localstorage.card'
import Button from '../../global/button/button'
import PriceBox from '../../global/price-box/price-box'
import styles from './productInfo.module.css'
import { API_URL } from "../../../config"

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
        const promise = await fetch(`${API_URL}/api/products/${this.props.category}/${id}`)
        const product = await promise.json()
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

    handleDelete = async (e, id) => {
        e.preventDefault()
        await apiCall(
            `http://localhost:5000/api/products/${id}`,
            {},
            'DELETE',
            (product) => {
                this.props.history.push('/')
            },
            (err) => {
                console.log('ERROR in deleting product', err);
            }
        )
    }

    handleBuy = (e, state) => {
        e.preventDefault()
        if (!this.context.loggedIn) {
            this.props.history.push('/login')
        } else {
            const { title, deviceType, id, imageUrl, price, description } = this.state
            localCard.addToLocalCard({title, deviceType, id, imageUrl, price, description})
            this.context.addToCart({ title, deviceType, id, imageUrl, price, description })
            this.props.history.push('/')
        }
    }

    render() {
        const { role } = this.context
        const {
            title,
            price,
            description,
            isActive,
            deviceType,
            imageUrl,
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
                        <div>
                            <PriceBox price={price} isAvailable={isActive} />
                        </div>
                        <div>
                            <Button content={'Buy Now'} onClick={(e) => this.handleBuy(e, this.state)} />
                        </div>
                    </div>
                    {
                        role === 'admin'
                        &&
                        <div className={styles.admin}>
                            <Button content={'Edit'} onClick={(e) => this.handleEditRedirect(e, this.state)} />
                            <Button content={'Delete'} onClick={(e) => this.handleDelete(e, this.state.id)} />
                        </div>
                    }
                </div>
            </section>
        )
    }

}

export default withRouter(ProductInfo)