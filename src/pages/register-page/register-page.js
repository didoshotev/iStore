import React from 'react'
import AuthTitle from '../../components/auth-title/auth-title'
import PageLayout from '../../components/page-layout/page-layout'
import Register from '../../components/auth/register'

const RegisterPage = () => {

    return (
        <PageLayout>
            <AuthTitle content={'Register'} />
            <Register />
        </PageLayout>
    )

}

export default RegisterPage