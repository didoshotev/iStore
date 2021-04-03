import React, { Component } from 'react'
import FormGroup from '../../form-group/form-group'
import FormLayout from '../../form-layout/form-layout'
import getInputs from '../../../utils/inputs'
import PageLayout from '../../page-layout/page-layout'
import AuthTitle from '../../auth-title/auth-title'
import apiCall from '../../../utils/apiCall'
import UploadImg from '../upload-img/upload-img'
import Button from '../../button/button'

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: getInputs().createInputs,
            imgUrl: ''
        }
    }

    createUI() {
        return this.state.inputs.map((inputObj, index) =>
            <FormGroup
                key={index}
                title={inputObj.title}
                htmlFor={inputObj.id}
                id={inputObj.id}
                value={inputObj.value}
                onChange={(e) => this.handleChange(e, index)}
            />
        )
    }


    handleChange = (e, index) => {
        const newState = this.state.inputs[index]
        newState.value = e.target.value
        this.setState(newState)

        // let inputs = [...this.state.inputs]
        // inputs[index] = e.target.value
        // this.setState({ inputs })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = this.state.inputs.map(a => a.value)
        let [title, description, deviceType, price, isActive] = [...res]
        const imageUrl = this.state.imgUrl

        await apiCall(
            'http://localhost:5000/api/products',
            {
                title, description, deviceType, imageUrl, price, isActive
            },
            'POST',
            (product) => {
                console.log('Product successfully made!')
                console.log(product);
                this.props.history.push('/')
            },
            (err) => {
                console.log('ERROR in creating product', err);
            }
        )
    }

    handleImg = (imgUrl) => {
        this.setState({
            imgUrl
        })
    }

    render() {
        return (
            <PageLayout>
                <AuthTitle content={'Create Product'} />
                <FormLayout label={'Product Information'} onSubmit={this.handleSubmit}>
                    <UploadImg onGetImg={this.handleImg} />
                    {this.createUI()}
                </FormLayout>

            </PageLayout>

        )
    }
}

export default Create