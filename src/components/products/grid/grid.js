import React, { Component } from 'react'
import UserContext from '../../../Context'
import GridItem from '../grid-item/grid-item'
import styles from './grid.module.css'


class Grid extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [],
            path: this.props.pageType.substring(1)
        }
    }

    static contextType = UserContext

    getProducts = async () => {
        let promise;
            // decide whether to load products or products/mac(ipad,phone)
        if (this.state.path !== 'products') {
            promise = await fetch(`http://localhost:5000/api/products/${this.state.path}`)
        } else {
            promise = await fetch('http://localhost:5000/api/products')
        }
        const products = await promise.json()
        this.setState({
            products
        })
    }

    renderProducts(loggedIn) {
        const products = this.state.products
        return (
            products.map(item => {
                return (
                    <GridItem
                        key={item._id}
                        title={item.title}
                        info={item.description}
                        img={item.imageUrl}
                        price={item.price}
                        isCart={loggedIn}
                        isNew={true}
                        id={item._id}
                        category={item.deviceType}
                    />
                )
            })
        )
    }

    componentDidMount() {
        this.getProducts()
    }

    render() {
        const {
            loggedIn
        } = this.context
        
        return (
            <article className={styles.grid}>
                {this.renderProducts(loggedIn)}

            </article>
        )

    }
}

export default Grid