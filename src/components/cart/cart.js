import React, { Component } from 'react'
import UserContext from '../../Context'
import AuthTitle from '../auth-title/auth-title'
import CartSummary from './cart-summary/cart-summary'
import styles from './cart.module.css'
import ItemRow from './item-row/item-row'

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            subtotal: 0,
            cart: [],
        }
    }

    static contextType = UserContext
    renderRow() {
        const items = this.state.cart
        return (
            items.map((item, index) => {
                return <ItemRow key={index} product={item} onClick={(e) => this.onRemoveProduct(e, item)} />
            })
        )
    }

    onRemoveProduct(e, item) {
        e.preventDefault()
        this.context.removeFromCart(item.id)
    }

    componentDidMount() {
        const sum = this.updateSum()
        this.setState({
            subtotal: sum
        })
    }

    updateSum() {
        return this.context.cart.reduce((acc, curr) => {
            acc += curr.price
            return acc
        }, 0)
    }

    render() {
        const cart = this.context.cart
        this.state.cart = cart
        return (
            <>
                <AuthTitle content={'Cart'} />
                {
                    cart.length > 0
                        ?
                        <article className={styles['main-content']}>
                            <ul>
                                {this.renderRow()}
                            </ul>
                            <section>
                                <CartSummary subtotal={this.state.subtotal} />
                            </section>
                        </article>
                        :
                        <div>There are no products in your cart</div>
                }
            </>
        )
    }
}

export default Cart