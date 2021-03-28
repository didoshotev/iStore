import React, { Component } from 'react'
import AuthTitle from '../auth-title/auth-title'
import styles from './item.module.css'

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

    componentDidMount() {
        this.getItem(this.props.id)
    }

    getItem = async(id) => {
        const promise = await fetch(`http://localhost:5000/api/products/${this.props.category}/${id}`)
        const product = await promise.json()
        console.log(product);
        this.setState({
            title: product.title,
            description: product.description,
            deviceType: product.deviceType,
            isActive: product.isActive,
            price: product.price,
            imageUrl: product.imageUrl
        })
    }

    render() {

        const {
            title,
            price,
            info,
            isAvailable,
            deviceType,
            imageUrl,
        } = this.state

        return (
            <div className={styles.container}>
                <h3>{title}</h3>
            </div>
        )
    }

}

export default ProductInfo