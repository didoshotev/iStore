import React, { Component } from 'react'
import Button from '../button/button'
import FormGroup from '../form-group/form-group'
import styles from './auth.module.css'

class Register extends Component {

    render() {

        return (
            <div className={styles.wrapper}>
                <span className={styles.private}>Private Information</span>
                <fieldset>
                    <FormGroup title={'Username'} htmlFor={'username'} />
                    <FormGroup title={'Email'} htmlFor={'email'} />
                    <FormGroup title={'Password'} htmlFor={'password'} />
                    <FormGroup title={'Repeat Password'} htmlFor={'rePassword'} />
                </fieldset>
                <div className={styles['btn-wrapper']}>
                    <Button content={'Register'} />
                </div>
            </div>
        )
    }
}

export default Register