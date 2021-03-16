import React from 'react'
import styles from './auth-title.module.css'

const AuthTitle = ({ content }) => {

    return (
        <div className={styles.wrapper}>
            <h4 className={styles.title}>{content}</h4>
        </div>
    )
}

export default AuthTitle