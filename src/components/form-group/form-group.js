import React from 'react'
import styles from './form-group.module.css'

const FormGroup = ({ title, id, value, onChange, type }) => {



    return (
        <div className={styles['form-group']} >
            <label htmlFor={id}>{title}</label>
            <input
                type={type || 'text'}
                id={id}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default FormGroup