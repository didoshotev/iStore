import React, { Component } from 'react'
import { withRouter } from 'react-router'
import UserContext from '../../Context'
import authenticate from '../../utils/authenticate'
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

    static contextType = UserContext

    onChange = (e, type) => {
        const newState = {}
        newState[type] = e.target.value
        this.setState(newState)
    }

    handleForm = async (e) => {
        e.preventDefault()
        const {
            username,
            password,
            email
        } = this.state

        

        await authenticate(
            'http://localhost:5000/api/user/register',
            {
                username,
                email,
                password
            },
            (user) => {
                console.log('Register successfull')
                this.context.logIn(user)
                this.props.history.push('/')
            },
            (err) => {
                console.log('ERROR in register', err);
            }
        )
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

export default withRouter(Register)