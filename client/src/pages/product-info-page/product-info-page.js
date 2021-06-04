import React, { Component } from 'react'
import { withRouter } from 'react-router';
import PageLayout from '../../components/global/page-layout/page-layout'
import ProductInfo from '../../components/products/product-Info/productInfo';


class ProductInfoPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const id = this.props.match.params.id
        const category = this.props.match.params.category
        return (
            <PageLayout>
                <ProductInfo id={id} category={category}/>
            </PageLayout>
        )
    }

}

export default withRouter(ProductInfoPage)