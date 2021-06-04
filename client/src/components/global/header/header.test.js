import React from 'react'
import Header from './header'
import renderer from 'react-test-renderer'
import TestingEnvironment from '../../../test-utils/router'
import getNavigation from '../../../utils/navigation'

describe('Header Component', () => {
    it('return auth routes from getNavigation', () => {
        const links = getNavigation({
            loggedIn: true,
        })

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

        expect(links).toStrictEqual(authLinks)
    })

    it('should render auth routes', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                }
            }}>
                <Header />
            </TestingEnvironment>

        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('should render non-auth routes', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: false,
                }
            }}>
                <Header />
            </TestingEnvironment>

        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})