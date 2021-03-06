const getNavigation = (loggedIn) => {

    const guestLinks = [
        {
            title: 'All Products',
            link: '/products'
        },
        {
            title: 'Mac',
            link: '/mac'
        },
        {
            title: 'iPad',
            link: '/ipad'
        },
        {
            title: 'iPhone',
            link: '/iphone'
        },
        {
            title: 'Login',
            link: '/login'
        },
        {
            title: 'Register',
            link: '/register'
        },
    ]

    const authLinks = [
        {
            title: 'All Products',
            link: '/products'
        },
        {
            title: 'Mac',
            link: '/mac'
        },
        {
            title: 'iPad',
            link: '/ipad'
        },
        {
            title: 'iPhone',
            link: '/iphone'
        },
        {
            title: 'Logout',
            link: '/logout'
        },
        {
            title: 'Cart',
            link: `/cart`
        }
    ]

    return loggedIn ? authLinks : guestLinks
}

export default getNavigation