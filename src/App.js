import React, { Component } from 'react'
import UserContext from './Context'

function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return cookieValue ? cookieValue[2] : null;
}

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loggedIn: null,
            user: null,
            role: 'guest'
        }
    }

    logIn = (user) => {
        this.setState({
            loggedIn: true,
            user,
            role: user.role
        })
    }

    logOut = () => {
        document.cookie = 'x-auth-token= ; expires= Thu, 01 Jan 1970 00:00:00 GMT'
        this.setState({
            loggedIn: false,
            user: null,
            role: 'guest'
        })
    }

    componentDidMount() {
        const token = getCookie('x-auth-token')
        if(!token) {
            this.logOut()
            return
        }

        fetch('http://localhost:5000/api/user/verify', {
            method: 'POST',
            body: JSON.stringify({
                token
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(promise => {
            return promise.json()
        }).then(response => {
            if(response.status) {
                this.logIn({
                    username: response.user.username,
                    id: response.user._id,
                    role: response.user.role
                })
            } else {
                this.logOut()
            }
        })
    }

    render() {
        const {
            loggedIn,
            user,
            role
        } = this.state
        
        if(loggedIn === null) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <UserContext.Provider value={{
                loggedIn,
                user,
                role,
                logIn: this.logIn,
                logOut: this.logOut,
            }}>
               
                {this.props.children}
               
            </UserContext.Provider>
            
        )
    }
}

export default App