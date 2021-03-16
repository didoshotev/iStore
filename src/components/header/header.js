import React from 'react'
import styles from './header.module.css'
import LinkComponent from '../link/link'
import getNavigation from '../../utils/navigation'
import HeaderLi from '../header-li/header-li'
import { Link } from 'react-router-dom'

const Header = () => {
    const links = getNavigation()

    return (
        <header className={styles['header-background']}>
            <ul className={styles.header}>
                <Link to="/">
                    <img src="https://istyle.bg/media/logo/stores/11/iSTYLE-logo-white-red.svg" alt="" className={styles.logo} />
                </Link>
                {
                    links.map((item, index) => <HeaderLi
                        key={index}
                        href={item.link}
                        title={item.title}

                    />)
                }
            </ul>
        </header>
    )
}

export default Header