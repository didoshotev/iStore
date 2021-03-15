import React from 'react'
import Header from '../header/header'
import styles from './page-layout.module.css'

const PageLayout = () => {

    return (
        <div className={styles.app}>
            <Header />
            <div className={styles['main-content']}>
                <p>main content is here</p>
            </div>
        </div>

    )
}

export default PageLayout