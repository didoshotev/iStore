import React from 'react'
import styles from './header-li.module.css'
import LinkComponent from '../link/link'

const HeaderLi = ( {currKey, href, title} ) => {

    return (
        <li className={styles['header-li']}>
            <LinkComponent href={href} title={title}/>
        </li>
    )
}

export default HeaderLi