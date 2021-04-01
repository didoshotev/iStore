import React from 'react'
import styles from './button.module.css'

const Button = ({content, onClick, fullWidth}) => {

    return (
        !fullWidth ?
        <button type={'submit'} className={[styles.main, styles['main-primary']].join(" ")} onClick={onClick}>
            {content}
        </button>
        :
        <button type={'submit'} className={[styles.main, styles['main-primary'], styles['full-width']].join(" ")} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button