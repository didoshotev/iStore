import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../../Context'
import AuthTitle from '../auth-title/auth-title'
import styles from './cart.module.css'
import ItemRow from './item-row/item-row'

const Cart = () => {
    const userContext = useContext(UserContext)
    const [subtotal, setSubtotal] = useState(0)

    const boughtProducts = userContext.cart
    console.log(userContext);
    const data = {
        description: "Only for 92.12/mo and $2000.00 before trade-in",
        deviceType: "mac",
        id: "6053da56a627753d88c97e99",
    	imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG17.png",
        price: 1600,
        title: "MacBook 13"
    }

    return (
        <>
            <AuthTitle content={'Cart'} />
            <ItemRow product={data}/>
        </>
    )
}

export default Cart