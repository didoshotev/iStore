import React, { Component } from 'react'
import UserContext from './Context'
import localCard from './utils/localstorage.card';
import * as APIService from './services/API-Service'

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
            role: 'guest',
            cart: []
        }
    }

    addToCart = (product) => {
        const newCart = [...this.state.cart, product]
        this.setState({
            cart: newCart
        })
    }

    removeFromCart = (productID) => {
        localCard.removeFromLocalCard(productID)
        const newCart = this.state.cart.filter((item) => item.id !== productID)
        this.setState({
            cart: newCart
        })
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
        localCard.clear()
        this.setState({
            loggedIn: false,
            user: null,
            role: 'guest',
            cart: []
        })
    }

    verifyUser = async (token) => {
        const response = await APIService.isVerified(token)
        if (response.status) {
            this.logIn({
                username: response.user.username,
                id: response.user._id,
                role: response.user.role
            })
            const card = localCard.getCard()
            if (card.length > 0) {
                card.map(item => this.addToCart(item))
            }
        } else {
            this.logOut()
        }
    }

    componentDidMount() {
        const token = getCookie('x-auth-token')
        if (!token) {
            this.logOut()
            return
        }
        this.verifyUser(token)
    }

    render() {
        const {
            loggedIn,
            user,
            role,
            cart
        } = this.state

        if (loggedIn === null) {
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
                cart,
                addToCart: this.addToCart,
                removeFromCart: this.removeFromCart
            }}>

                {this.props.children}

            </UserContext.Provider>

        )
    }
}

export default App