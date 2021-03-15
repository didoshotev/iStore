import React from 'react'
import styles from './link.module.css'
import { Link } from 'react-router-dom'

const LinkComponent = ({ title, isBasic, href }) => {

    return (
        !isBasic ? <Link to={href} className={[styles.a, styles['a--white']].join(" ")}>{title}</Link>
        : <Link to={href} className={[styles.a, styles['a--blue']].join(" ")}>{title}</Link>
    )
}

export default LinkComponent