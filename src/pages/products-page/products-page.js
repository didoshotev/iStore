import React, { Component } from 'react'
import CreateProductContainer from '../../components/admin/create-product-container/create-product-container'
import AuthTitle from '../../components/auth-title/auth-title'
import PageLayout from '../../components/page-layout/page-layout'
import Grid from '../../components/products/grid/grid'
import UserContext from '../../Context'

class ProductsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            path: this.props.location.pathname
        }
    }
    static contextType = UserContext

    render() {
        console.log(this.context);
        const { role } = this.context
        console.log(role);
        return (
            <PageLayout>
                {
                    role === 'admin' &&
                    <CreateProductContainer />  
                }
                <AuthTitle content={'Apple All Around'} />
                <Grid pageType={this.state.path} />
            </PageLayout>
        )
    }

}

export default ProductsPage