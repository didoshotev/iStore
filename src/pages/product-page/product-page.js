import React from 'react'
import AuthTitle from '../../components/auth-title/auth-title'
import PageLayout from '../../components/page-layout/page-layout'
import Grid from '../../components/products/grid/grid'

const ProductPage = (props) => {
    let pageType = props.location.pathname;

    return (
    <PageLayout>
            <AuthTitle content={'Apple All Around'} />
            <Grid pageType={pageType} />
        </PageLayout>
    )

}

export default ProductPage