import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../global/button/button'
import styles from './create-product-container.module.css'

const CreateProductContainer = () => {

    return (
        <div className={styles.container}>
            <Link to={'/create'}>
                <Button content={'Add Product'} />
            </Link>
        </div>
    )
}

export default CreateProductContainer