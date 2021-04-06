import React, { Component } from 'react'
import { withRouter } from 'react-router'
import UserContext from '../../Context'
import authenticate from '../../utils/authenticate'
import localCard from '../../utils/localstorage.card'
import Button from '../global/button/button'
import FormError from '../global/form/form-error/form-error'
import FormGroup from '../global/form/form-group/form-group'
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
            email,
            rePassword,
            usernameError,
            emailError,
            passwordError,
            rePasswordError
        } = this.state
        if (password !== rePassword) {
            this.setState({
                errorFlag: true
            })
            return
        }
        if(usernameError || emailError || passwordError || rePasswordError) {
            this.setState({
                errorFlag: true
            })
            return
        } else {
            this.setState({
                errorFlag: false
            })
        }
        await authenticate(
            'http://localhost:5000/api/user/register',
            {
                username,
                email,
                password
            },
            (user) => {
                console.log('Register successfull')
                localCard.initialize()
                this.context.logIn(user)
                this.props.history.push('/')
            },
            (err) => {
                this.setState({
                    errorFlag: true
                })
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
            errorFlag
        } = this.state

        return (
            <div className={styles.wrapper}>
                <span className={styles.private}>Private Information</span>
                <form onSubmit={this.handleForm}>
                    <fieldset>
                        {/* onBlur */}
                        <FormGroup
                            title={'Username'} id={'username'} value={username}
                            onChange={(e) => this.onChange(e, 'username')}
                        />
                        <FormGroup
                            type={'email'} title={'Email'} id={'email'} value={email}
                            onChange={(e) => this.onChange(e, 'email')}
                        />
                        <FormGroup
                            type="password" title={'Password'} id={'password'} value={password}
                            onChange={(e) => this.onChange(e, 'password')}
                        />
                        <FormGroup
                            type="password" title={'Repeat Password'} id={'rePassword'} value={rePassword}
                            onChange={(e) => this.onChange(e, 'rePassword')}
                        />
                    </fieldset>
                    {
                        errorFlag &&
                        <FormError errorMessage={'Invalid credentials'} />
                    }
                    <div className={styles['btn-wrapper']}>
                        <Button type={'submit'} content={'Register'} />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Register)