import React, { Component } from 'react'
import { withRouter } from 'react-router'
import UserContext from '../../Context'
import authenticate from '../../utils/authenticate'
import localCard from '../../utils/localstorage.card'
import Button from '../global/button/button'
import FormError from '../global/form/form-error/form-error'
import FormGroup from '../global/form/form-group/form-group'
import styles from './auth.module.css'
import { API_URL } from "../../config"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            errorFlag: false
        }
    }
    static contextType = UserContext

    onChange = (e, type) => {
        const newState = {}
        newState[type] = e.target.value
        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {
            username,
            password
        } = this.state

        await authenticate(
            `${API_URL}/api/user/login`,
            {
                username,
                password
            },
            (user) => {
                localCard.initialize()
                this.context.logIn(user)
                this.props.history.push('/')
            },
            (err) => {
                this.setState({
                    errorFlag: true
                })
                console.log('ERROR in login', err);
            }
        )
    }

    render() {
        const {
            username,
            password,
            errorFlag
        } = this.state
        return (
            <div className={styles.wrapper}>
                <span className={styles.private}>Private Information</span>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <FormGroup
                            title={'Username'}
                            htmlFor={'username'}
                            id={'username'}
                            value={username}
                            onChange={(e) => this.onChange(e, 'username')}
                        />
                        <FormGroup
                            title={'Password'}
                            htmlFor={'password'}
                            id={'password'}
                            value={password}
                            type={'password'}
                            onChange={(e) => this.onChange(e, 'password')}
                        />
                    </fieldset>
                    {
                        errorFlag &&
                        <FormError errorMessage={'Invalid credentials'} /> 
                    }
                    <div className={styles['btn-wrapper']}>
                        <Button content={'Login'} />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Login)