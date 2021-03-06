import React from 'react'
import Button from '../../button/button'
import styles from './form-layout.module.css'

const FormLayout = (props) => (
   
    <div className={styles.wrapper}>
        <span className={styles.private}>{props.label}</span>
        <form onSubmit={props.onSubmit}>

            {props.children}
            
            <div className={styles['btn-wrapper']}>
                <Button content={'Submit'} />
            </div>
        </form>

    </div>
)

export default FormLayout