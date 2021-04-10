import React, { useState } from 'react'
import styles from './form-group.module.css'
import validate from '../../../../utils/validate-input'

const FormGroup = ({ title, id, value, onChange, type }) => {

    const [error, setError] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')
    const validateInput = (e, value, type, id) => {
        const error = !validate(value, type)[id]
        setError(error)
        error ? setErrorMsg(`Invalid ${id} format`) : setErrorMsg(``)
        return error
    }
    
    const onHandleChange = (e, value, type, id) => {
        validateInput(e, value, type, id)
        onChange(e)
    }

    

    return (
        <div className={styles['form-group']} >
            <label htmlFor={id}>{title}</label>
            <input
                type={type || 'text'}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={(e) => onHandleChange(e, value, type || 'text', id)}
            />
            {
               error && <div id={'quick-error'} className={styles.error}>{errorMsg}</div>
            }
        </div>
        
    )
}

export default FormGroup