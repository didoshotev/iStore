import React from 'react'
import styles from './form-group.module.css'

const FormGroup = ({ title, htmlFor }) => {

    return (
        <div className={styles['form-group']}>
            <label htmlFor={htmlFor}>{title}</label>
            <input type="text" id={htmlFor} name={htmlFor} required />
        </div>
    )
}

export default FormGroup