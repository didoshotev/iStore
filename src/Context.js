import React from 'react'

const UserContext = React.createContext({
    loggedIn: false,
    user: null,
    role: 'guest',
    logIn: () => {},
    logOut: () => {},
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {}
})

export default UserContext