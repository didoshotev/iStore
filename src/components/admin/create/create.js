import React, { Component } from 'react'
import FormGroup from '../../form-group/form-group'
import FormLayout from '../../form-layout/form-layout'
import getInputs from '../../../utils/inputs'
import PageLayout from '../../page-layout/page-layout'
import AuthTitle from '../../auth-title/auth-title'
import createProduct from '../../../utils/createProduct'

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            values: getInputs().createInputs.map(items => items.value),
        }
    }

    createUI() {
        const inputs = getInputs().createInputs
        return this.state.values.map((value, index) =>
            <FormGroup
                key={index}
                title={inputs[index].title}
                htmlFor={inputs[index].id}
                id={inputs[index].id}
                value={value}
                onChange={(e) => this.handleChange(e, index)}
            />
        )
    }


    handleChange = (e, index) => {
        let values = [...this.state.values]
        values[index] = e.target.value
        this.setState({ values })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
       let [title, description, deviceType, imageUrl, price, isActive] = [...this.state.values]
       
        await createProduct(
            'http://localhost:5000/api/products',
            {
                title, description, deviceType, imageUrl, price, isActive
            },
            'POST',
            (product) => {
                console.log('Product successfull made!')
                console.log(product);
                this.props.history.push('/')
            },
            (err) => {
                console.log('ERROR in creating product', err);
            }
        )
    }

    render() {
        return (
            <PageLayout>
                <AuthTitle content={'Create Product'}/>
                <FormLayout label={'Product Information'} onSubmit={this.handleSubmit}>
                    {this.createUI()}
                </FormLayout>
            </PageLayout>

        )
    }
}

export default Create