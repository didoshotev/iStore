import React from 'react'
import Button from '../../button/button'
import styles from './create-product-container.module.css'

const CreateProductContainer = () => {

    return (
        <div className={styles.container}>
            <Button content={'Add Product'} />
        </div>
    )
}

export default CreateProductContainer