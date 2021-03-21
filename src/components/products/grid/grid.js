import React, { Component } from 'react'
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

    getProducts = async () => {
        let promise;
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

    renderProducts() {
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
                        isCart={false}
                        isNew={true}
                    />
                )
            })
        )
    }

    componentDidMount() {
        this.getProducts()
    }

    render() {
        return (
            <article className={styles.grid}>
                {this.renderProducts()}

            </article>
        )

    }
}

export default Grid