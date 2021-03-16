import React, { Component } from 'react'
import Button from '../button/button'
import FormGroup from '../form-group/form-group'
import styles from './auth.module.css'

class Login extends Component {


    render() {

        return (
            <div className={styles.wrapper}>
                <span className={styles.private}>Private Information</span>
                <fieldset>
                    <FormGroup title={'Username'} htmlFor={'username'} />
                    <FormGroup title={'Password'} htmlFor={'password'} />
                </fieldset>
                <div className={styles['btn-wrapper']}>
                    <Button content={'Login'}/>
                </div>
            </div>
        )
    }
}

export default Login