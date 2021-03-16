import React from 'react'
import styles from './button.module.css'

const Button = ({content}) => {

    return (
        <button className={[styles.main, styles['main-primary']].join(" ")}>
            {content}
        </button>
    )
}

export default Button