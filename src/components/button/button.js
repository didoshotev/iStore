import React from 'react'
import styles from './button.module.css'

const Button = ({content, onClick}) => {

    return (
        <button type={'submit'} className={[styles.main, styles['main-primary']].join(" ")} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button