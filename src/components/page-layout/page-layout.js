import React from 'react'
import Header from '../header/header'
import styles from './page-layout.module.css'

const PageLayout = (props) => {

    return (
        <div className={styles.app}>
            <Header />
            <div className={styles['main-content']}>
                {props.children}
            </div>
        </div>

    )
}

export default PageLayout