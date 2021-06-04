import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import UserContext from '../../../Context'
import GridItem from '../grid-item/grid-item'
import styles from './grid.module.css'
import * as APIService  from '../../../services/API-Service'

const Grid = (props) => {
    const context = useContext(UserContext)
    const [products, setProducts] = useState([])
    const path = props.pageType.substring(1)

    const getAllProducts = useCallback(async () => {
        const products = await APIService.getProducts(path)
        setProducts(products)
    }, [products])

    const renderProducts = useMemo(() => {
        const { loggedIn } = context
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
    }, [products])

    useEffect(() => {
        getAllProducts()
    }, [])

        return (
            <article className={styles.grid}>
                {renderProducts}
            </article>
        )
}

export default Grid