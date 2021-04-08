import React, { Component } from 'react'
import FormGroup from '../../global/form/form-group/form-group'
import FormLayout from '../../global/form/form-layout/form-layout'
import getInputs from '../../../utils/inputs'
import PageLayout from '../../global/page-layout/page-layout'
import AuthTitle from '../../global/auth-title/auth-title'
import apiCall from '../../../utils/apiCall'
import UploadImg from '../upload-img/upload-img'
import FormError from '../../global/form/form-error/form-error'
import Select from '../../global/form/select/select'


class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: getInputs().createInputs,
            imgUrl: '',
            deviceType: 'iphone',
            isActive: true,
            errorFlag: false
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
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = this.state.inputs.map(a => a.value)
        let [title, description, price] = [...res]
        const imageUrl = this.state.imgUrl
        const deviceType = this.state.deviceType 
        const isActive = this.state.isActive

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
                this.setState({
                    errorFlag: true
                })
                console.log('ERROR in creating product', err);
            }
        )
    }

    handleImg = (imgUrl) => {
        this.setState({
            imgUrl
        })
    }

    handleIsActive = (e) => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    handleCategory = (e) => {
        this.setState({
            deviceType: e.target.value
        })
    }

    render() {
        return (
            <PageLayout>
                <AuthTitle content={'Create Product'} />
                <FormLayout label={'Product Information'} onSubmit={this.handleSubmit}>
                    <UploadImg onGetImg={this.handleImg} />
                    {this.createUI()}

                    <Select id={'deviceType'} title={'Product category'} onChange={(e) => this.handleCategory(e)} >
                        {
                            getInputs().categories.map((item, index) => {
                                return <option key={index} value={item.id}>{item.title}</option>
                            })
                        }
                    </Select>

                    <Select id={'isActive'} title={'Is the product active'} onChange={(e) => this.handleIsActive(e)} >
                        {
                            getInputs().isActive.map((item, index) => {
                                return <option key={index} value={item.value}>{item.title}</option>
                            })
                        }
                    </Select>
                    {
                        this.state.errorFlag &&
                        <FormError errorMessage={'Invalid or missing credentials'} />
                    }
                </FormLayout>

            </PageLayout>

        )
    }
}

export default Create