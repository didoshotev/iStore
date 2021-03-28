import React, { Component } from 'react'
import AuthTitle from '../../components/auth-title/auth-title'
import PageLayout from '../../components/page-layout/page-layout'
import Grid from '../../components/products/grid/grid'

class ProductsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            path: this.props.location.pathname
        }
    }


    render() {
        return (
            <PageLayout>
                <AuthTitle content={'Apple All Around'} />
                <Grid pageType={this.state.path} />
            </PageLayout>
        )
    }

}

export default ProductsPage