import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../../Context'
import AuthTitle from '../auth-title/auth-title'
import CartSummary from './cart-summary/cart-summary'
import styles from './cart.module.css'
import ItemRow from './item-row/item-row'

const Cart = () => {
    const userContext = useContext(UserContext)
    const [subtotal, setSubtotal] = useState(0)

    const boughtProducts = userContext.cart
    // console.log(userContext);
    const data = [
        {
            description: "Only for 92.12/mo and $2000.00 before trade-in",
            deviceType: "mac",
            id: "6053da56a627753d88c97e99",
            imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG17.png",
            price: 1600,
            title: "MacBook 13"
        },
        {
            description: "Only for 39.12/mo",
            deviceType: "ipad",
            id: "605365a7e4dd972360438f3b",
            imageUrl: "https://www.novmak.com/cms-images/apple-ipad.jpg",
            price: 600,
            title: "iPad 10"
        }
    ]

    const renderRow = data.map((item, index) => {
        return <ItemRow key={index} product={item} />
    })

    return (
        <>
            <AuthTitle content={'Cart'} />
            <article className={styles['main-content']}>
                <ul>
                    { renderRow }
                </ul>
                <section>
                    <CartSummary />
                </section>
            </article>


        </>
    )
}

export default Cart