const getNavigation = (userid) => {

    const links = [
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
        {
            title: 'Cart',
            link: `/cart/${userid}`
        }
    ]

    return links
}

export default getNavigation