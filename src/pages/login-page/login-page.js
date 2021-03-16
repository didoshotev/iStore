import React from 'react'
import AuthTitle from '../../components/auth-title/auth-title'
import Login from '../../components/auth/login'
import PageLayout from '../../components/page-layout/page-layout'

const LoginPage = () => {

    return (
        <PageLayout>
            <AuthTitle content={'Login'} />
            <Login />
        </PageLayout>
    )

}

export default LoginPage