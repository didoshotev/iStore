import React, { Component } from 'react'
import styles from './header.module.css'
import getNavigation from '../../../utils/navigation'
import HeaderLi from './header-li/header-li'
import { Link } from 'react-router-dom'
import UserContext from '../../../Context'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    static contextType = UserContext

    render() {
    const {
        loggedIn,
        user
    } = this.context
    const links = getNavigation(loggedIn, user && user.id);

        return (
            <header className={styles['header-background']}>
                <ul className={styles.header}>
                    <Link to="/">
                        <img src="https://istyle.bg/media/logo/stores/11/iSTYLE-logo-white-red.svg" alt="" className={styles.logo} />
                    </Link>
                    {
                        links.map((item, index) => 
                            <HeaderLi
                            key={index}
                            href={item.link}
                            title={item.title}
                        />)
                    }
                </ul>
            </header>
        )
    }

}

export default Header