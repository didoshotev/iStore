import React from 'react'
import FontAwIcon from '../font-awesome-icon/fontAwesomeIcon'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
import styles from './footer.module.css'

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <p>
            Copyright <FontAwIcon icon={faCopyright} size={'sm'} color={'0xAAAAAA'}/>
            2020 iStore. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer