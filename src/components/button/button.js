import React from 'react'
import styles from './button.module.css'

const Button = ({content, onClick, fullWidth, type}) => {

    return (
        !fullWidth ?
        <button type={ type || 'submit'} className={[styles.main, styles['main-primary']].join(" ")} onClick={onClick}>
            {content}
        </button>
        :
        <button type={ type || 'submit'} className={[styles.main, styles['main-primary'], styles['full-width']].join(" ")} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button