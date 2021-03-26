import React, { Component } from 'react'
import { withRouter } from 'react-router'
import UserContext from '../../Context'
import LoginPage from '../../pages/login-page/login-page'

class Logout extends Component {
    constructor(props) {
        super(props)
    }

    static contextType = UserContext

    logOut() {
       
    }

    componentDidMount() {
        this.context.logOut()
        this.props.history.push('/login')
    }

    render() {
        return (
            <LoginPage/>
        )
    }
}

export default withRouter(Logout)