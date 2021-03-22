import React, { Component } from 'react'
import Button from '../button/button'
import FormGroup from '../form-group/form-group'
import styles from './auth.module.css'

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            rePassword: '',
        }
    }

    onChange = (e, type) => {
        const newState = {}
        newState[type] = e.target.value
        this.setState(newState)
    }

    handleForm = async (e) => {
        e.preventDefault()
        console.log('form is submitted')
        const {
            username,
            password,
            email
        } = this.state
        
    }

    render() {
        const {
            username,
            email,
            password,
            rePassword,
        } = this.state

        return (
            <div className={styles.wrapper}>
                <span className={styles.private}>Private Information</span>
                <form onSubmit={this.handleForm}>
                    <fieldset>
                        <FormGroup title={'Username'} id={'username'} value={username}  onChange={(e) => this.onChange(e, 'username')}/>
                        <FormGroup title={'Email'} id={'email'} value={email} onChange={(e) => this.onChange(e, 'email')}/>
                        <FormGroup type="password" title={'Password'} id={'password'} value={password} onChange={(e) => this.onChange(e, 'password')}/>
                        <FormGroup type="password" title={'Repeat Password'} id={'rePassword'} value={rePassword} onChange={(e) => this.onChange(e, 'rePassword')}/>
                    </fieldset>
                    <div className={styles['btn-wrapper']}>
                        <Button type={'submit'} content={'Register'} />
                    </div>
                </form>
            </div>
        )
    }
}

export default Register